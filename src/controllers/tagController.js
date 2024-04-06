const tagServices = require("../services/tagServices");

const getTags = async (req, res) => {
  try {
    const tags = await tagServices.getTags();
    return res.status(200).json({ tags });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTagById = async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await tagServices.findTagById(id);
    if (!tag) {
      return res.status(404).json({ message: "Tag não encontrada" });
    }
    return res.status(200).json({ tag });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTag = async (req, res) => {
  const tagData = req.body;
  try {
    const newTag = await tagServices.createTag(tagData);
    return res.status(201).json({ tag: newTag });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTag = async (req, res) => {
  const { id } = req.params;
  const tagData = req.body;
  try {
    const updatedTag = await tagServices.updateTag(id, tagData);
    return res.status(200).json({ tag: updatedTag });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTag = async (req, res) => {
  const { id } = req.params;
  try {
    await tagServices.deleteTag(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
