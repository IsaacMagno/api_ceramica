const { OrderItem } = require("../database/models");

/**
 * Encontra um item de pedido pelo ID.
 * @param {number} id - O ID do item de pedido.
 * @returns {object} Retorna o item de pedido se encontrado, null caso contrário.
 */
const findOrderItemById = async (id) => {
  // Busca o item de pedido pelo ID
  const orderItem = await OrderItem.findByPk(id);
  return orderItem;
};

/**
 * Obtém todos os itens de pedido.
 * @returns {object[]} Retorna uma lista de itens de pedido.
 */
const getOrderItems = async () => {
  try {
    const orderItems = await OrderItem.findAll();
    return orderItems;
  } catch (error) {
    console.error("Erro ao obter itens de pedido:", error);
    throw error;
  }
};

/**
 * Cria um novo item de pedido.
 * @param {object} orderItemData - Os dados do novo item de pedido.
 * @returns {object} Retorna o item de pedido criado.
 */
const createOrderItem = async (orderItemData) => {
  try {
    const newOrderItem = await OrderItem.create(orderItemData);
    return newOrderItem;
  } catch (error) {
    console.error("Erro ao criar item de pedido:", error);
    throw error;
  }
};

/**
 * Atualiza um item de pedido existente.
 * @param {number} id - O ID do item de pedido.
 * @param {object} orderItemData - Os novos dados do item de pedido.
 * @returns {object} Retorna o item de pedido atualizado.
 */
const updateOrderItem = async (id, orderItemData) => {
  try {
    const [updated] = await OrderItem.update(orderItemData, { where: { id } });
    if (updated) {
      const updatedOrderItem = await OrderItem.findByPk(id);
      return updatedOrderItem;
    }
    throw new Error("Item de pedido não encontrado.");
  } catch (error) {
    console.error("Erro ao atualizar item de pedido:", error);
    throw error;
  }
};

/**
 * Exclui um item de pedido existente.
 * @param {number} id - O ID do item de pedido.
 */
const deleteOrderItem = async (id) => {
  try {
    const deleted = await OrderItem.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Item de pedido não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir item de pedido:", error);
    throw error;
  }
};

module.exports = {
  findOrderItemById,
  getOrderItems,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
