const discountCupomServices = require("../services/discountCupomServices");

const getDiscountCupoms = async (req, res) => {
  try {
    const discountCupoms = await discountCupomServices.getDiscountCupoms();
    return res.status(200).json({ discountCupoms });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDiscountCupomById = async (req, res) => {
  const { id } = req.params;
  try {
    const discountCupom = await discountCupomServices.findDiscountCupomById(id);
    if (!discountCupom) {
      return res
        .status(404)
        .json({ message: "Cupom de desconto não encontrado" });
    }
    return res.status(200).json({ discountCupom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createDiscountCupom = async (req, res) => {
  const discountCupomData = req.body;
  try {
    const newDiscountCupom = await discountCupomServices.createDiscountCupom(
      discountCupomData
    );
    return res.status(201).json({ discountCupom: newDiscountCupom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateDiscountCupom = async (req, res) => {
  const { id } = req.params;
  const discountCupomData = req.body;
  try {
    const updatedDiscountCupom =
      await discountCupomServices.updateDiscountCupom(id, discountCupomData);
    return res.status(200).json({ discountCupom: updatedDiscountCupom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteDiscountCupom = async (req, res) => {
  const { id } = req.params;
  try {
    await discountCupomServices.deleteDiscountCupom(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDiscountCupoms,
  getDiscountCupomById,
  createDiscountCupom,
  updateDiscountCupom,
  deleteDiscountCupom,
};
