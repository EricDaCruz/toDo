import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const firstCategoryId = "0730ffac-d039-4194-9571-01aa2aa0efbd";
const secondCategoryId = "00880d75-a933-4fef-94ab-e05744435297";
const thirdCategoryId = "fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00";

async function run() {
   await prisma.task.deleteMany();
   await prisma.category.deleteMany();

   /**
    * Create Categories
    **/
   await Promise.all([
      prisma.category.create({
         data: {
            id: firstCategoryId,
            name: "Escola",
         },
      }),

      prisma.category.create({
         data: {
            id: secondCategoryId,
            name: "Trabalho",
         },
      }),

      prisma.category.create({
         data: {
            id: thirdCategoryId,
            name: "Programação",
         },
      }),
   ]);

   /**
    * Create Tasks
    **/
   await Promise.all([
      prisma.task.create({
         data: {
            title: "Lição de Geografia",
            categoryId: firstCategoryId,
         },
      }),

      prisma.task.create({
         data: {
            title: "Lição de Matemática",
            categoryId: firstCategoryId,
         },
      }),

      prisma.task.create({
         data: {
            title: "Estudar NodeJS",
            categoryId: thirdCategoryId,
         },
      }),
   ]);
}

run()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });
