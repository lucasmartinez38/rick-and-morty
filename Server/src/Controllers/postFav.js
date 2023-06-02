const { FavoriteModels } = require("../models/index");

module.exports = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("faltan datos");
    }
    await FavoriteModels.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    const allFavorites = await FavoriteModels.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
