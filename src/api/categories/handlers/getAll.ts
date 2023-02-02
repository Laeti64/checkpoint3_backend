import prisma from "../../../../prisma/client";
import CategoriesHandler from "../interface";

const getAllCategories: CategoriesHandler["getAll"] = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllCategories;
