import express from "express";
import { createCourse } from "./routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());

app.get("/", createCourse);
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(5002);

export { app };
