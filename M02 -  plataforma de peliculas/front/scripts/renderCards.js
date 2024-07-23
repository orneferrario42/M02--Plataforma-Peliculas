const filmsSection = document.getElementById('films')
const container = document.getElementsByClassName("container")[0];
const cards = document.querySelectorAll(".card");

const renderCard = (movies) => {
const container = document.getElementById("container");    

const mapear =  movies.map((movie) => {
const cards = document.createElement('div');
const pelicula = document.createElement('div');
const imagen = document.createElement('img');
const detalle = document.createElement('div');
const h2 = document.createElement('h2');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const boton = document.createElement('div');
const h6 = document.createElement('h6');

pelicula.classList.add("pelicula");
detalle.classList.add("detalle");
boton.classList.add("btn");


imagen.src = movie.poster;
h2.innerHTML = movie.title;
p1.innerHTML = movie.director;
p2.innerHTML =movie.year;
p3.innerHTML = movie.duration;
h6.innerHTML = "Ver"



detalle.appendChild(h2);
detalle.appendChild(p1);
detalle.appendChild(p2);
detalle.appendChild(p3);
boton.appendChild(h6);
detalle.appendChild(boton);

pelicula.appendChild(imagen);
pelicula.appendChild(detalle);

cards.appendChild(pelicula);



return cards;    
});
return mapear.forEach(element => {
    container.appendChild(element)
});
};


module.exports = renderCard







// `<img src="${movie.poster}" alt="${movie.title}">
//     <h3>${movie.title}</h3>
//     <p>Director: ${movie.director}</p>
//     <p>Year: ${movie.year}</p>
//     <p>Genre: ${movie.genre.join(", ")}</p>
//     <p>Duration: ${movie.duration}</p>
//     <p>Rating: ${movie.rate}</p>
//     `;




