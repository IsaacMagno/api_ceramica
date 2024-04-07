const { Address } = require("../database/models");

/**
 * Encontra um endereço pelo ID.
 * @param {number} id - O ID do endereço.
 * @returns {object} Retorna o endereço se encontrado, null caso contrário.
 */
const findAddressById = async (id) => {
  // Busca o endereço pelo ID
  const address = await Address.findByPk(id);
  return address;
};

/**
 * Obtém todos os endereços.
 * @returns {object[]} Retorna uma lista de endereços.
 */
const getAddresses = async () => {
  try {
    const addresses = await Address.findAll();
    return addresses;
  } catch (error) {
    console.error("Erro ao obter endereços:", error);
    throw error;
  }
};

/**
 * Cria um novo endereço.
 * @param {object} addressData - Os dados do novo endereço.
 * @returns {object} Retorna o endereço criado.
 */
const createAddress = async (addressData) => {
  try {
    const newAddress = await Address.create(addressData);
    return newAddress;
  } catch (error) {
    console.error("Erro ao criar endereço:", error);
    throw error;
  }
};

/**
 * Atualiza um endereço existente.
 * @param {number} id - O ID do endereço.
 * @param {object} addressData - Os novos dados do endereço.
 * @returns {object} Retorna o endereço atualizado.
 */
const updateAddress = async (id, addressData) => {
  try {
    const [updated] = await Address.update(addressData, { where: { id } });
    if (updated) {
      const updatedAddress = await Address.findByPk(id);
      return updatedAddress;
    }
    throw new Error("Endereço não encontrado.");
  } catch (error) {
    console.error("Erro ao atualizar endereço:", error);
    throw error;
  }
};

/**
 * Exclui um endereço existente.
 * @param {number} id - O ID do endereço.
 */
const deleteAddress = async (id) => {
  try {
    const deleted = await Address.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Endereço não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir endereço:", error);
    throw error;
  }
};

module.exports = {
  findAddressById,
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
};
