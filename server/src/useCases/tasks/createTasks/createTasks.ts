import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

export class CreateTasks {
   static async execute(req: Request, res: Response) {
      try {
         const createTaskBody = z.object({
            title: z.string().min(1),
            categoryId: z.string().uuid(),
         });

         const { title, categoryId } = createTaskBody.parse(req.body);

         const task = await prisma.task.create({
            data: {
               title,
               categoryId,
            },
         });

         res.status(201).json(task);
      } catch (err) {
         console.log(err);
         res.status(400).json({ message: "Failed to create task" });
      }
   }
}
