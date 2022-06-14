import express from "express";
import { createCourse } from "./routes";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.get("/", createCourse);
app.use("/categories", categoriesRoutes);

app.listen(5002);

export { app };
