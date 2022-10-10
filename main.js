let tampilMovie = document.getElementById("home");
let getDataMovie = async () =>{
    let responce = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&/api_key=9d223e8721e1d03ed3ee0b94439afea9/&page=1");
    let datamovie = await responce.json();
    datamovie.slice(0,10).forEach(item, index => {
        tampilMovie.innerHTML += ''
    });
}