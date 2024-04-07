const addressServices = require("../services/addressServices");

const getAddresses = async (req, res) => {
  try {
    const addresses = await addressServices.getAddresses();
    return res.status(200).json({ addresses });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await addressServices.findAddressById(id);
    if (!address) {
      return res.status(404).json({ message: "Endereço não encontrado" });
    }
    return res.status(200).json({ address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createAddress = async (req, res) => {
  const addressData = req.body;
  try {
    const newAddress = await addressServices.createAddress(addressData);
    return res.status(201).json({ address: newAddress });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateAddress = async (req, res) => {
  const { id } = req.params;
  const addressData = req.body;
  try {
    const updatedAddress = await addressServices.updateAddress(id, addressData);
    return res.status(200).json({ address: updatedAddress });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    await addressServices.deleteAddress(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
};
