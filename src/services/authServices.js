const { Authentication } = require("../database/models");

/**
 * Encontra uma autenticação pelo ID.
 * @param {number} id - O ID da autenticação.
 * @returns {object} Retorna a autenticação se encontrada, null caso contrário.
 */
const findAuthById = async (id) => {
  // Busca a autenticação pelo ID
  const auth = await Authentication.findByPk(id);
  return auth;
};

/**
 * Obtém todas as autenticações.
 * @returns {object[]} Retorna uma lista de autenticações.
 */
const getAuth = async () => {
  try {
    const auth = await Authentication.findAll();
    return auth;
  } catch (error) {
    console.error("Erro ao obter autenticações:", error);
    throw error;
  }
};

/**
 * Cria uma nova autenticação.
 * @param {string} username - O nome de usuário.
 * @param {string} password - A senha.
 * @returns {object} Retorna a autenticação criada.
 * @throws {Error} Lança um erro se ocorrer um problema ao criar a autenticação.
 */
const createAuth = async (username, password) => {
  try {
    const newAuth = await Authentication.create({ username, password });
    return newAuth;
  } catch (error) {
    console.error("Erro ao criar autenticação:", error);
    throw error;
  }
};

/**
 * Atualiza uma autenticação existente.
 * @param {number} id - O ID da autenticação.
 * @param {string} username - O novo nome de usuário.
 * @param {string} password - A nova senha.
 * @returns {object} Retorna a autenticação atualizada.
 * @throws {Error} Lança um erro se a autenticação não for encontrada ou se ocorrer um problema ao atualizar.
 */
const updateAuth = async (id, username, password) => {
  try {
    const [updated] = await Authentication.update(
      { username, password },
      { where: { id } }
    );
    if (updated) {
      const updatedAuth = await Authentication.findByPk(id);
      return updatedAuth;
    }
    throw new Error("Autenticação não encontrada.");
  } catch (error) {
    console.error("Erro ao atualizar autenticação:", error);
    throw error;
  }
};

/**
 * Exclui uma autenticação existente.
 * @param {number} id - O ID da autenticação.
 * @returns {number} Retorna o número de autenticações excluídas (deve ser sempre 1).
 * @throws {Error} Lança um erro se a autenticação não for encontrada ou se ocorrer um problema ao excluir.
 */
const deleteAuth = async (id) => {
  try {
    const deletedAuth = await Authentication.destroy({ where: { id } });
    if (!deletedAuth) {
      throw new Error("Autenticação não encontrada.");
    }
    return deletedAuth;
  } catch (error) {
    console.error("Erro ao excluir autenticação:", error);
    throw error;
  }
};

module.exports = {
  findAuthById,
  getAuth,
  createAuth,
  updateAuth,
  deleteAuth,
};
