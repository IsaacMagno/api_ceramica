const productServices = require("../services/productServices");

const getProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productServices.findProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const newProduct = await productServices.createProduct(productData);
    return res.status(201).json({ product: newProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;
  try {
    const updatedProduct = await productServices.updateProduct(id, productData);
    return res.status(200).json({ product: updatedProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productServices.deleteProduct(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
