import express, { Express } from "express";
import { categoryRouter } from "./category.routes";
import { taskRouter } from "./task.routes";

export const routes = (app: Express) => {
   app.use(categoryRouter, taskRouter);
};
