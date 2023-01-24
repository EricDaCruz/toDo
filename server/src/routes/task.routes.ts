import express from "express";
import { CreateTasks } from "../useCases/tasks/createTasks/createTasks";


export const taskRouter = express.Router();

taskRouter
   .post("/tasks", CreateTasks.execute);
