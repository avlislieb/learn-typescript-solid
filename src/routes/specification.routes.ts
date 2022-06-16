import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/specification/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/specification/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  specificationService.execute({ name, description });
  res.status(201).send();
});

export { specificationRoutes };
