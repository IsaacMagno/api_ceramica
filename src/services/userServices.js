const { User } = require("../database/models");

/**
 * Encontra um usuário pelo ID.
 * @param {number} id - O ID do usuário.
 * @returns {object} Retorna o usuário se encontrado, null caso contrário.
 */
const findUserById = async (id) => {
  // Busca o usuário pelo ID
  const user = await User.findByPk(id);
  return user;
};

/**
 * Obtém todos os usuários.
 * @returns {object[]} Retorna uma lista de usuários.
 */
const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    throw error;
  }
};

/**
 * Cria um novo usuário.
 * @param {object} userData - Os dados do novo usuário.
 * @returns {object} Retorna o usuário criado.
 */
const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

/**
 * Atualiza um usuário existente.
 * @param {number} id - O ID do usuário.
 * @param {object} userData - Os novos dados do usuário.
 * @returns {object} Retorna o usuário atualizado.
 */
const updateUser = async (id, userData) => {
  try {
    const [updated] = await User.update(userData, { where: { id } });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      return updatedUser;
    }
    throw new Error("Usuário não encontrado.");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

/**
 * Exclui um usuário existente.
 * @param {number} id - O ID do usuário.
 */
const deleteUser = async (id) => {
  try {
    const deleted = await User.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Usuário não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    throw error;
  }
};

module.exports = {
  findUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
