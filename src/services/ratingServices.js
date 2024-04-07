const { Rating } = require("../database/models");

/**
 * Encontra uma avaliação pelo ID.
 * @param {number} id - O ID da avaliação.
 * @returns {object} Retorna a avaliação se encontrada, null caso contrário.
 */
const findRatingById = async (id) => {
  // Busca a avaliação pelo ID
  const rating = await Rating.findByPk(id);
  return rating;
};

/**
 * Obtém todas as avaliações.
 * @returns {object[]} Retorna uma lista de avaliações.
 */
const getRatings = async () => {
  try {
    const ratings = await Rating.findAll();
    return ratings;
  } catch (error) {
    console.error("Erro ao obter avaliações:", error);
    throw error;
  }
};

/**
 * Cria uma nova avaliação.
 * @param {object} ratingData - Os dados da nova avaliação.
 * @returns {object} Retorna a avaliação criada.
 */
const createRating = async (ratingData) => {
  try {
    const newRating = await Rating.create(ratingData);
    return newRating;
  } catch (error) {
    console.error("Erro ao criar avaliação:", error);
    throw error;
  }
};

/**
 * Atualiza uma avaliação existente.
 * @param {number} id - O ID da avaliação.
 * @param {object} ratingData - Os novos dados da avaliação.
 * @returns {object} Retorna a avaliação atualizada.
 */
const updateRating = async (id, ratingData) => {
  try {
    const [updated] = await Rating.update(ratingData, { where: { id } });
    if (updated) {
      const updatedRating = await Rating.findByPk(id);
      return updatedRating;
    }
    throw new Error("Avaliação não encontrada.");
  } catch (error) {
    console.error("Erro ao atualizar avaliação:", error);
    throw error;
  }
};

/**
 * Exclui uma avaliação existente.
 * @param {number} id - O ID da avaliação.
 */
const deleteRating = async (id) => {
  try {
    const deleted = await Rating.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Avaliação não encontrada.");
    }
  } catch (error) {
    console.error("Erro ao excluir avaliação:", error);
    throw error;
  }
};

module.exports = {
  findRatingById,
  getRatings,
  createRating,
  updateRating,
  deleteRating,
};
