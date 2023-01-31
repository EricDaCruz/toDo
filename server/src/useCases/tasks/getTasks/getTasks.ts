import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetTasks {
   static async execute(req: Request, res: Response) {
      const tasks = await prisma.task.findMany({
         include: {
            category: true,
         },
      });

      res.status(200).json(tasks);
   }
}
