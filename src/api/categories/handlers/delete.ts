import prisma from "../../../../prisma/client";
import CategoriesHandler from "../interface";

const deleteCategory: CategoriesHandler["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await prisma.category.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ message: `Category ${deletedCategory.name}has been deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteCategory;
