const {handlerMovies} = require("../models/Movies");

const  funMovie = async ()=>{
    
const searchII = await handlerMovies.find();
console.log(searchII);
return searchII;
};







module.exports = {
    funMovie,
};
