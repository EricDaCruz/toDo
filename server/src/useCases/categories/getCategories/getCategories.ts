import { Request, Response } from "express";
import { json } from "stream/consumers";
import { prisma } from "../../../lib/prisma";

export class GetCategories {

    static async execute(req: Request, res: Response){
        try{
            const categories = await prisma.category.findMany()

            res.status(200).json(categories)

        }catch(e){
            console.log(e);
            res.status(400).json({message:"Failed to get categories"})
        }

    }
}