const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    //Most popular movies
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    //search movies

    const movieBox = document.querySelector("#movie-box")
    
    const getMovies = async (api)=>{
      const response = await fetch(api)
      const data = await response.json()
    //   console.log(data)
      showMovies(data.results);
    }

    const showMovies = (data) =>{
        movieBox.innerHTML =" ";
            data.forEach((item) => {
                //creating a box for each movie detail
                const box = document.createElement("div")
                box.classList.add("box")
                box.innerHTML = `
                <img src="${IMGPATH + item.poster_path}"  alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${item.original_title}  </h2>
                        <span> ${item.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                 </div>
                `
                movieBox.append(box)
            });
    }

    document.querySelector("#search").addEventListener('keyup', (e)=>{
      if(e.target.value != " "){
        //search
        getMovies(SEARCHAPI+ e.target.value)
      }else{
        //popular
        getMovies(APIURL)
      }
    })

    getMovies(APIURL);