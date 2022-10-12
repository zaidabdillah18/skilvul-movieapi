let home = document.getElementById('home');
let search = document.getElementById('movie-name');
let form = document.getElementById('form');
let movies = [];
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=26032962503d9eb1ca86e1e2d0ceb42f&sort_by=popularity.desc&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchAPI = 'https://api.themoviedb.org/3/search/movie?api_key=26032962503d9eb1ca86e1e2d0ceb42f&query='

// let getDataMovie = async () => {
//     let response = await fetch();
//     let datamovie = await response.json()
//     datamovie.results.forEach(element => {
//         console.log(element);
//         tampilMovie.innerHTML += `
//         <div class="col-md-4">
//                     <div class="card mb-4">
//                         <img src="${IMG_URL + element.poster_path}" class="card-img-top" alt="${element.title}">
//                         <div class="card-body">
//                             <div class="d-flex justify-content-between">
//                                 <p class="card-title">${element.title}</p>
//                                 <span class="card-title"><b>${element.vote_average}</b></span>
//                             </div>
//                             <p class="card-subtitle mb-2 text-muted">${element.release_date}</p>
//                         </div>
//                     </div>
//                     </div>
// `
//     });
// }
// getDataMovie();
getMovies(url)
async function getMovies(url){
    let response = await fetch(url);
    let datamovie = await response.json();
    displayMovie(datamovie.results)
   
}
function displayMovie(movies){
    home.innerHTML= 'halaman tidak di temukan'
    movies.forEach(element => {
        home.innerHTML=`<div class="col-md-4">
                             <div class="card mb-4">
                                 <img src="${IMG_URL + element.poster_path}" class="card-img-top" alt="${element.title}">
                                 <div class="card-body">
                                     <div class="d-flex justify-content-between">
                                         <p class="card-title">${element.title}</p>
                                         <span class="card-title"><b>${element.vote_average}</b></span>
                                     </div>
                                     <p class="card-subtitle mb-2 text-muted">${element.release_date}</p>
                                 </div>
                             </div>
                            </div>`
    });
}

form.addEventListener('submit', (e) => {
   e.preventDefault()
    search = search.value
    if(search && search !=''){
        getMovies(searchAPI + search)
        search = ''
    }else{
        window.location.reload()
    }
})


// const apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=26032962503d9eb1ca86e1e2d0ceb42f&sort_by=popularity.desc"
// const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=26032962503d9eb1ca86e1e2d0ceb42f&query=${search_key}&page=1"
// const IMG_URL = "https://image.tmdb.org/t/p/w500"

// const homes = document.getElementById("home");
// const from = document.getElementById("form");
// const input = document.getElementById("input");

// getMovies(apiURL);

// async function getMovies(url){
//     let response = await fetch(url);
//     let datamovie = await response.json()
//     displayMovie(datamovie.results);
//     console.log(datamovie.results)
// }

// function displayMovie(movies){
//     movies.forEach(element => {
//         homes.innerHTML = `
//             <img src="${IMG_URL + element.poster_path}"/>
//             <div class="details">
//                 <h2 class="title">${element.title}</h2>
//                 <p class="rate>Rating : <span class="rating">${element.vote_average}</span></p>
//                 <p class="overview">${element.overview}</p>
//             </div>
//         `
//         homes.appendChild(div)
//     });
    
// }