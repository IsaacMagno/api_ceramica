const orderServices = require("../services/orderServices");

const getOrders = async (req, res) => {
  try {
    const orders = await orderServices.getOrders();
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await orderServices.findOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    return res.status(200).json({ order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  const orderData = req.body;
  try {
    const newOrder = await orderServices.createOrder(orderData);
    return res.status(201).json({ order: newOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const orderData = req.body;
  try {
    const updatedOrder = await orderServices.updateOrder(id, orderData);
    return res.status(200).json({ order: updatedOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await orderServices.deleteOrder(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
