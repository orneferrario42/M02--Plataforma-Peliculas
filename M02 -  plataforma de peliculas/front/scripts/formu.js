const axios = require('axios')

const clear = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input)=>{
        input.value = ""
    });
};

//
async function sumbit(event) {
    try {
        event.preventDefault(); // para no borrar los datos
        const inputs = document.querySelectorAll('input');

        // Validar que todos los campos estén completos
        let formComplete = true;
        inputs.forEach(input => {
            if (!input.value) {
                formComplete = false;
            }
        });

        // Si el formulario está completo, enviar los datos al servidor
        if (formComplete) {
            const title = document.getElementById('title').value;
            const year = document.getElementById('year').value;
            const director = document.getElementById('director').value;
            const duration = document.getElementById('duration').value;
            const genre = document.getElementById('genre').value;
            const rate = document.getElementById('rate').value;
            const poster = document.getElementById('poster').value;

            const respuesta = await axios.post('http://localhost:3000/movies', {
                title,
                year,
                director,
                duration,
                genre,
                rate,
                poster
            });

            console.log('Se ha cargado con éxito', respuesta.data);
            alert('La película se ha cargado con éxito');
        } else {
            console.log('Formulario Incompleto');
            alert('Formulario, Incompleto');
        }
    } catch (error) {
        console.error('No se cargó correctamente:', error);
        alert('Error al cargar la pelicula, intentelo nuevamente.');
    }
}


module.exports = {
    clear,
    sumbit,
};