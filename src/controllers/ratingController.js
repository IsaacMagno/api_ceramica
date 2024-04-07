const ratingServices = require("../services/ratingServices");

const getRatings = async (req, res) => {
  try {
    const ratings = await ratingServices.getRatings();
    return res.status(200).json({ ratings });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getRatingById = async (req, res) => {
  const { id } = req.params;
  try {
    const rating = await ratingServices.findRatingById(id);
    if (!rating) {
      return res.status(404).json({ message: "Avaliação não encontrada" });
    }
    return res.status(200).json({ rating });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createRating = async (req, res) => {
  const ratingData = req.body;
  try {
    const newRating = await ratingServices.createRating(ratingData);
    return res.status(201).json({ rating: newRating });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateRating = async (req, res) => {
  const { id } = req.params;
  const ratingData = req.body;
  try {
    const updatedRating = await ratingServices.updateRating(id, ratingData);
    return res.status(200).json({ rating: updatedRating });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteRating = async (req, res) => {
  const { id } = req.params;
  try {
    await ratingServices.deleteRating(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRatings,
  getRatingById,
  createRating,
  updateRating,
  deleteRating,
};
