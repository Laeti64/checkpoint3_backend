import prisma from "../../../../prisma/client";
import CategoriesHandler from "../interface";

const createCategory: CategoriesHandler["create"] = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryToCreate = await prisma.category.create({
      data: {
        name,
      },
    });
    res.status(201).json(categoryToCreate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createCategory;
