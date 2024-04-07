const { Order } = require("../database/models");

/**
 * Encontra um pedido pelo ID.
 * @param {number} id - O ID do pedido.
 * @returns {object} Retorna o pedido se encontrado, null caso contrário.
 */
const findOrderById = async (id) => {
  // Busca o pedido pelo ID
  const order = await Order.findByPk(id);
  return order;
};

/**
 * Obtém todos os pedidos.
 * @returns {object[]} Retorna uma lista de pedidos.
 */
const getOrders = async () => {
  try {
    const orders = await Order.findAll();
    return orders;
  } catch (error) {
    console.error("Erro ao obter pedidos:", error);
    throw error;
  }
};

/**
 * Cria um novo pedido.
 * @param {object} orderData - Os dados do novo pedido.
 * @returns {object} Retorna o pedido criado.
 */
const createOrder = async (orderData) => {
  try {
    const newOrder = await Order.create(orderData);
    return newOrder;
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    throw error;
  }
};

/**
 * Atualiza um pedido existente.
 * @param {number} id - O ID do pedido.
 * @param {object} orderData - Os novos dados do pedido.
 * @returns {object} Retorna o pedido atualizado.
 */
const updateOrder = async (id, orderData) => {
  try {
    const [updated] = await Order.update(orderData, { where: { id } });
    if (updated) {
      const updatedOrder = await Order.findByPk(id);
      return updatedOrder;
    }
    throw new Error("Pedido não encontrado.");
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    throw error;
  }
};

/**
 * Exclui um pedido existente.
 * @param {number} id - O ID do pedido.
 */
const deleteOrder = async (id) => {
  try {
    const deleted = await Order.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Pedido não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir pedido:", error);
    throw error;
  }
};

module.exports = {
  findOrderById,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
