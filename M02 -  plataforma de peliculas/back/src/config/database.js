const mongoose = require("mongoose");


const dataBase = async () => {
await mongoose.connect("mongodb+srv://orneFerrario42:PaoGUaype54pNtWY@orneferrario42.psw7ctv.mongodb.net/movies?retryWrites=true&w=majority&appName=OrneFerrario42")
};

module.exports= dataBase;