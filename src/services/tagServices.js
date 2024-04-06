const { Tag } = require("../database/models");

/**
 * Encontra uma tag pelo ID.
 * @param {number} id - O ID da tag.
 * @returns {object} Retorna a tag se encontrada, null caso contrário.
 */
const findTagById = async (id) => {
  // Busca a tag pelo ID
  const tag = await Tag.findByPk(id);
  return tag;
};

/**
 * Obtém todas as tags.
 * @returns {object[]} Retorna uma lista de tags.
 */
const getTags = async () => {
  try {
    const tags = await Tag.findAll();
    return tags;
  } catch (error) {
    console.error("Erro ao obter tags:", error);
    throw error;
  }
};

/**
 * Cria uma nova tag.
 * @param {object} tagData - Os dados da nova tag.
 * @returns {object} Retorna a tag criada.
 */
const createTag = async (tagData) => {
  try {
    const newTag = await Tag.create(tagData);
    return newTag;
  } catch (error) {
    console.error("Erro ao criar tag:", error);
    throw error;
  }
};

/**
 * Atualiza uma tag existente.
 * @param {number} id - O ID da tag.
 * @param {object} tagData - Os novos dados da tag.
 * @returns {object} Retorna a tag atualizada.
 */
const updateTag = async (id, tagData) => {
  try {
    const [updated] = await Tag.update(tagData, { where: { id } });
    if (updated) {
      const updatedTag = await Tag.findByPk(id);
      return updatedTag;
    }
    throw new Error("Tag não encontrada.");
  } catch (error) {
    console.error("Erro ao atualizar tag:", error);
    throw error;
  }
};

/**
 * Exclui uma tag existente.
 * @param {number} id - O ID da tag.
 */
const deleteTag = async (id) => {
  try {
    const deleted = await Tag.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Tag não encontrada.");
    }
  } catch (error) {
    console.error("Erro ao excluir tag:", error);
    throw error;
  }
};

module.exports = {
  findTagById,
  getTags,
  createTag,
  updateTag,
  deleteTag,
};
