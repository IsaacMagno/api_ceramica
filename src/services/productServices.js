const { Product } = require("../database/models");

/**
 * Encontra um produto pelo ID.
 * @param {number} id - O ID do produto.
 * @returns {object} Retorna o produto se encontrado, null caso contrário.
 */
const findProductById = async (id) => {
  // Busca o produto pelo ID
  const product = await Product.findByPk(id);
  return product;
};

/**
 * Obtém todos os produtos.
 * @returns {object[]} Retorna uma lista de produtos.
 */
const getProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
    throw error;
  }
};

/**
 * Cria um novo produto.
 * @param {object} productData - Os dados do novo produto.
 * @returns {object} Retorna o produto criado.
 */
const createProduct = async (productData) => {
  try {
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw error;
  }
};

/**
 * Atualiza um produto existente.
 * @param {number} id - O ID do produto.
 * @param {object} productData - Os novos dados do produto.
 * @returns {object} Retorna o produto atualizado.
 */
const updateProduct = async (id, productData) => {
  try {
    const [updated] = await Product.update(productData, { where: { id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      return updatedProduct;
    }
    throw new Error("Produto não encontrado.");
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    throw error;
  }
};

/**
 * Exclui um produto existente.
 * @param {number} id - O ID do produto.
 */
const deleteProduct = async (id) => {
  try {
    const deleted = await Product.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Produto não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
    throw error;
  }
};

module.exports = {
  findProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
