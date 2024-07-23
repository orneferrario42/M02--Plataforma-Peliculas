const { funMovie } = require("../services/movieService");

const movieController = async (req,res) => {
const cartelera = await funMovie()
res.status(200).json(cartelera);
};

module.exports = movieController;