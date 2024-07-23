const {handlerMovies} = require('../models/Movies');

async function crearmovie(data) {
    try {
        const newMovie = await handlerMovies.create(data);
        return newMovie;
    } catch (error) {
        throw new Error('no se pudo subir la peli :(');
    }
}

module.exports = { crearmovie };