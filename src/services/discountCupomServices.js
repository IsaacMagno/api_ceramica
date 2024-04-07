const { DiscountCupom } = require("../database/models");

/**
 * Encontra um cupom de desconto pelo ID.
 * @param {number} id - O ID do cupom de desconto.
 * @returns {object} Retorna o cupom de desconto se encontrado, null caso contrário.
 */
const findDiscountCupomById = async (id) => {
  // Busca o cupom de desconto pelo ID
  const discountCupom = await DiscountCupom.findByPk(id);
  return discountCupom;
};

/**
 * Obtém todos os cupons de desconto.
 * @returns {object[]} Retorna uma lista de cupons de desconto.
 */
const getDiscountCupoms = async () => {
  try {
    const discountCupoms = await DiscountCupom.findAll();
    return discountCupoms;
  } catch (error) {
    console.error("Erro ao obter cupons de desconto:", error);
    throw error;
  }
};

/**
 * Cria um novo cupom de desconto.
 * @param {object} discountCupomData - Os dados do novo cupom de desconto.
 * @returns {object} Retorna o cupom de desconto criado.
 */
const createDiscountCupom = async (discountCupomData) => {
  try {
    const newDiscountCupom = await DiscountCupom.create(discountCupomData);
    return newDiscountCupom;
  } catch (error) {
    console.error("Erro ao criar cupom de desconto:", error);
    throw error;
  }
};

/**
 * Atualiza um cupom de desconto existente.
 * @param {number} id - O ID do cupom de desconto.
 * @param {object} discountCupomData - Os novos dados do cupom de desconto.
 * @returns {object} Retorna o cupom de desconto atualizado.
 */
const updateDiscountCupom = async (id, discountCupomData) => {
  try {
    const [updated] = await DiscountCupom.update(discountCupomData, {
      where: { id },
    });
    if (updated) {
      const updatedDiscountCupom = await DiscountCupom.findByPk(id);
      return updatedDiscountCupom;
    }
    throw new Error("Cupom de desconto não encontrado.");
  } catch (error) {
    console.error("Erro ao atualizar cupom de desconto:", error);
    throw error;
  }
};

/**
 * Exclui um cupom de desconto existente.
 * @param {number} id - O ID do cupom de desconto.
 */
const deleteDiscountCupom = async (id) => {
  try {
    const deleted = await DiscountCupom.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Cupom de desconto não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir cupom de desconto:", error);
    throw error;
  }
};

module.exports = {
  findDiscountCupomById,
  getDiscountCupoms,
  createDiscountCupom,
  updateDiscountCupom,
  deleteDiscountCupom,
};
