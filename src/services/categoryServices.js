const { Category } = require("../database/models");

/**
 * Encontra uma categoria pelo ID.
 * @param {number} id - O ID da categoria.
 * @returns {object} Retorna a categoria se encontrada, null caso contrário.
 */
const findCategoryById = async (id) => {
  // Busca a categoria pelo ID
  const category = await Category.findByPk(id);
  return category;
};

/**
 * Obtém todas as categorias.
 * @returns {object[]} Retorna uma lista de categorias.
 */
const getCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    console.error("Erro ao obter categorias:", error);
    throw error;
  }
};

/**
 * Cria uma nova categoria.
 * @param {object} categoryData - Os dados da nova categoria.
 * @returns {object} Retorna a categoria criada.
 */
const createCategory = async (categoryData) => {
  try {
    const newCategory = await Category.create(categoryData);
    return newCategory;
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    throw error;
  }
};

/**
 * Atualiza uma categoria existente.
 * @param {number} id - O ID da categoria.
 * @param {object} categoryData - Os novos dados da categoria.
 * @returns {object} Retorna a categoria atualizada.
 */
const updateCategory = async (id, categoryData) => {
  try {
    const [updated] = await Category.update(categoryData, { where: { id } });
    if (updated) {
      const updatedCategory = await Category.findByPk(id);
      return updatedCategory;
    }
    throw new Error("Categoria não encontrada.");
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    throw error;
  }
};

/**
 * Exclui uma categoria existente.
 * @param {number} id - O ID da categoria.
 */
const deleteCategory = async (id) => {
  try {
    const deleted = await Category.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Categoria não encontrada.");
    }
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    throw error;
  }
};

module.exports = {
  findCategoryById,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
