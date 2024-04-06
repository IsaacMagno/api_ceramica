const categoryServices = require("../services/categoryServices");

const getCategories = async (req, res) => {
  try {
    const categories = await categoryServices.getCategories();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryServices.findCategoryById(id);
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    return res.status(200).json({ category });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    const newCategory = await categoryServices.createCategory(categoryData);
    return res.status(201).json({ category: newCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const categoryData = req.body;
  try {
    const updatedCategory = await categoryServices.updateCategory(
      id,
      categoryData
    );
    return res.status(200).json({ category: updatedCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await categoryServices.deleteCategory(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
