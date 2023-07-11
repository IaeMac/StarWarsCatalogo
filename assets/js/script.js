const movies = document.querySelectorAll('.movie')

movies.forEach((movie)  => {
    movie.addEventListener('mouseenter' , () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        
        removeMovieSelected();

        movie.classList.add('selected');

        changeMovieTitle(movie);

        changeMovieDescription(movie);

        changeMoviePoster(movie);


    })
})



function changeMovieDescription(movie) {
    const movieDescription = document.getElementById('sinopse');
    movieDescription.innerText = movie.getAttribute('data-description');
}


function changeMovieTitle (movie) {
    const movieTitle = document.getElementById('movie-title');
    movieTitle.innerText = movie.getAttribute('data-name')
}

function changeMoviePoster(movie) {
    const posterMovie = document.querySelector('.poster-film');
    const idMovie = movie.attributes.id.value;
    posterMovie.src = `./assets/img/${idMovie}-poster.jpg`;
}


function removeMovieSelected(){
    const selectedMovie = document.querySelector('.selected');
    selectedMovie.classList.remove('selected');
}



