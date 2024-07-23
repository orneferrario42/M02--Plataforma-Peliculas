const {Router} = require("express");
const movieController = require("../controller/movieController");
const {newmovie}= require("../controller/crearPelisContro");

const rutas=Router();

rutas.get("/movies", movieController);
rutas.post("/movies",newmovie );



module.exports = rutas;