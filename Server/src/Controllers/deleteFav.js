const { FavoriteModels } = require("../models/index");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await FavoriteModels.destroy({ where: { id } });
    const allFavorites = await FavoriteModels.findAll();
    return res.json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
