import prisma from "../../../../prisma/client";
import CategoriesHandler from "../interface";

const CategoryToUpdate: CategoriesHandler["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: {
        name,
      },
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default CategoryToUpdate;
