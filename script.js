document.getElementById('btnClick').addEventListener('click', function() {
    document.getElementById('output').textContent = '¡Botón clicado!';
});

// Este es un metodo de programación funcional
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});

var peliculas = [
    {
        titulo: 'El Cid',
        genero: 'Drama',
        duracion: '2 horas',
        director: 'Alejandro Amenábar',
        actores: ['Diego Luna', 'Penélope Cruz']
    },
    {
        titulo: 'Pelicula Omar',
        genero: 'Hacking',
        duracion: '2 horas',
        director: 'En Busca de la Libertad',
        actores: ['Ibarra', 'Malasquez', 'Ccencho', 'Omar Rivera']
    }
];

function createCard(pelicula) {
    var card = document.createElement('div');
    card.classList.add('card');

    var titulo = document.createElement('h3');
    titulo.textContent = pelicula.titulo;
    card.appendChild(titulo);

    var genero = document.createElement('p');
    genero.textContent = 'Género: ' + pelicula.genero;
    card.appendChild(genero);

    var duracion = document.createElement('p');
    duracion.textContent = 'Duración: ' + pelicula.duracion;
    card.appendChild(duracion);

    var director = document.createElement('p');
    director.textContent = 'Director: ' + pelicula.director;
    card.appendChild(director);

    var actores = document.createElement('p');
    actores.classList.add('actores');
    actores.textContent = 'Actores: ' + pelicula.actores.join(', ');
    card.appendChild(actores);

    return card;
}

var peliculasContainer = document.getElementById('peliculas-container');

peliculas.forEach(function(pelicula) {
    var card = createCard(pelicula);
    peliculasContainer.appendChild(card);
});
