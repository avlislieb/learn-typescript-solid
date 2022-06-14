import { Router } from "express";
// import { v4 as uuidv4 } from "uuid";
// import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/category/CreateCategoryService";

const categoriesRoutes = Router();

// const categories: Category[] = []
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.index();
  return response.json(categories);
});

export { categoriesRoutes };
