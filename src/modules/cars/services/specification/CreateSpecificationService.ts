import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/specification/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(request: IRequest): void {
    const { name, description } = request;
    const specificationAlreadyExists = this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("specificaton already exists.");
    }

    this.specificationRepository.store({ name, description });
  }
}

export { CreateSpecificationService };
