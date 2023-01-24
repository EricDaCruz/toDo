import express, { Express } from "express";
import { categoryRouter } from "./category.routes";

export const routes = (app: Express) => {
   app.use(categoryRouter);
};
