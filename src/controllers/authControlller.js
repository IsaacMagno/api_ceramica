const authServices = require("../services/authServices");

const getAuth = async (req, res) => {
  try {
    const auth = await authServices.getAuth();
    return res.status(200).json({ auth });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAuthById = async (req, res) => {
  const { id } = req.params;
  try {
    const auth = await authServices.findAuthById(id);
    if (!auth) {
      return res.status(404).json({ message: "Autenticação não encontrada" });
    }
    return res.status(200).json({ auth });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createAuth = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newAuth = await authServices.createAuth(username, password);
    return res.status(201).json({ auth: newAuth });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateAuth = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    const updatedAuth = await authServices.updateAuth(id, username, password);
    return res.status(200).json({ auth: updatedAuth });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteAuth = async (req, res) => {
  const { id } = req.params;
  try {
    await authServices.deleteAuth(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAuth,
  getAuthById,
  createAuth,
  updateAuth,
  deleteAuth,
};
