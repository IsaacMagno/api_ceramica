const orderItemServices = require("../services/orderItemServices");

const getOrderItems = async (req, res) => {
  try {
    const orderItems = await orderItemServices.getOrderItems();
    return res.status(200).json({ orderItems });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOrderItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const orderItem = await orderItemServices.findOrderItemById(id);
    if (!orderItem) {
      return res.status(404).json({ message: "Item de pedido não encontrado" });
    }
    return res.status(200).json({ orderItem });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createOrderItem = async (req, res) => {
  const orderItemData = req.body;
  try {
    const newOrderItem = await orderItemServices.createOrderItem(orderItemData);
    return res.status(201).json({ orderItem: newOrderItem });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateOrderItem = async (req, res) => {
  const { id } = req.params;
  const orderItemData = req.body;
  try {
    const updatedOrderItem = await orderItemServices.updateOrderItem(
      id,
      orderItemData
    );
    return res.status(200).json({ orderItem: updatedOrderItem });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteOrderItem = async (req, res) => {
  const { id } = req.params;
  try {
    await orderItemServices.deleteOrderItem(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
