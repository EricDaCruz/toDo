import express from "express";
import { CreateTasks } from "../useCases/tasks/createTasks/createTasks";
import { GetTasks } from "../useCases/tasks/getTasks/getTasks";

export const taskRouter = express.Router();

taskRouter
   .get("/tasks", GetTasks.execute)
   .post("/tasks", CreateTasks.execute);
