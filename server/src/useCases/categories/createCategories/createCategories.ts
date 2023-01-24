import { Response, Request } from "express";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export class CreateCategories {
   static async execute(req: Request, res: Response) {
      try {
         const createCategoryBody = z.object({
            name: z.string().min(1),
         });

         const { name } = createCategoryBody.parse(req.body);

         let nameToLowerCase = name.toLocaleLowerCase();

         const category = await prisma.category.create({
            data: {
               name: nameToLowerCase,
            },
         });

         res.status(201).json(category);
      } catch (err) {
         res.status(400).json({ message: "Can't create category"});
      }
   }
}
