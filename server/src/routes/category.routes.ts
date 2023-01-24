import express from "express";
import { CreateCategories } from "../useCases/categories/createCategories/createCategories";
import { GetCategories } from "../useCases/categories/getCategories/getCategories";

export const categoryRouter = express.Router();

categoryRouter
   .get("/categories", GetCategories.execute)
   .post("/categories", CreateCategories.execute);
