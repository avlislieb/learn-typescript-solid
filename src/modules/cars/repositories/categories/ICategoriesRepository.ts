import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesInterface {
  findByName(name: string): Category;
  index(): Category[];
  store({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesInterface, ICreateCategoryDTO };
