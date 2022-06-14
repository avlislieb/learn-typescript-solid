import { CategoriesRepository } from "../../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(request: IRequest): void {
    const requiredFields = ["name", "description"];
    requiredFields.forEach((field) => {
      if (!request[field]) {
        throw new Error(`${field} is required`);
      }
      return true;
    });

    const { name, description } = request;

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.store({ name, description });
  }
}

export { CreateCategoryService };
