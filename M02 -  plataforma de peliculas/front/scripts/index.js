// Mapear y mostrar las tarjetas
const renderCard = require ('./renderCards');
const axios = require ("axios")
const {clear, sumbit} = require ("./formu")

//*Promesas. . .
const funcion = async ()  => {
    try {
const {data} = await axios.get("http://localhost:3000/movies") //https://students-api.up.railway.app/movies
renderCard(data);
console.log(data);
    } catch (error) {
        console.log(error)
    }
    
}
funcion()

document.addEventListener('DOMContentLoaded', function() {
const botonclear = document.getElementById('botonclear');
botonclear.addEventListener('click', clear)

const botonsumbit = document.getElementById('formulario');
botonsumbit.addEventListener('submit',sumbit )
});