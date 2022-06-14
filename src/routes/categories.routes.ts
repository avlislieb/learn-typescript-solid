import { Router } from "express";
// import { v4 as uuidv4 } from "uuid";
// import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

// const categories: Category[] = []
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const requiredFields = ["name", "description"];

  requiredFields.forEach((field) => {
    if (!request.body[field]) {
      return response.status(422).json({
        error: `${field} is required`,
      });
    }
    return true;
  });

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(422).json({
      error: "Category already exists",
    });
  }

  categoriesRepository.store({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.index();
  return response.json(categories);
});

export { categoriesRoutes };
