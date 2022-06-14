import request from "supertest";
import { app } from "../server";

// const request = require("supertest")
// const app = require("../server")

describe("categories", () => {
  it("deve ser capaz de criar uma category", async () => {
    const category = { name: "one", description: "test" };

    await request(app).post("/categories").send(category).expect(201);
  });

  it("não deve ser capaz de criar uma category com o mesmo nome", async () => {
    const category = { name: "two", description: "test" };

    await request(app).post("/categories").send(category).expect(201);

    const response = await request(app).post("/categories").send(category);

    expect(response.statusCode).toBe(422);
    expect(response.body.error).toBeTruthy();
  });

  it("não deve ser capaz de criar uma category sem nome", async () => {
    const category = { description: "test" };
    const response = await request(app).post("/categories").send(category);

    expect(response.statusCode).toBe(422);
    expect(response.body.error).toBeTruthy();
    expect(response.body.error).toBe("name is required");
  });

  it("não deve ser capaz de criar uma category sem description", async () => {
    const category = { name: "test" };
    const response = await request(app).post("/categories").send(category);

    expect(response.statusCode).toBe(422);
    expect(response.body.error).toBeTruthy();
    expect(response.body.error).toBe("description is required");
  });
});
