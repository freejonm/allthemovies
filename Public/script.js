

// functions

function checkMovie(){
  // get title from input
  let title = $("#movie-title").val();
  // replace spaces with + to match API phrasing
  let fixedTitle = title.replace(/\s/g, "+");
  // API call
  $.ajax({
    url: "https://www.omdbapi.com/?t=" + fixedTitle + "&y=&plot=short&filter_sort_order=asc&apikey=c2a157c7",
    method: "GET"
  }).then((response)=>{
    console.log(response);
    // check for an error
    if (Object.keys(response).includes("Error")){
      $("#errorModal").modal({show: true});
    }

    else {
    $("#confirm-movie").modal({show: true});
    $("#modal-confirm-body").empty();
    $("#modal-confirm-body").append(`<img src=${response.Poster}></img>`)
    $("#modal-confirm-body").append(`<p>${response.Title}</p><p> released: ${response.Year}</p><p> dir: ${response.Director}</p><p>top billed: ${response.Actors}</p>`);

    $("#modal-confirm").click(()=>{
      $("#confirm-movie").modal("hide");
    })
  }


    
  })

}
// users create their own database
function saveMyMovies(){
  let now = moment();
  console.log(now);

  // getting user input
  let myTitle = $("#movie-title").val();
  let myRating = $("#my-rating").val();
  let myReview = $("#my-review").val();

  // getting API input

  // getting array of objects from local storage or creating a new one if there is none
  let stringMyMovies = localStorage.getItem("MyMovies") || "[]";
  let parsedMyMovies= JSON.parse(stringMyMovies);

  // building myMovie object with user inputs
  let myMovie = {};
  myMovie.title = myTitle;
  myMovie.rating = myRating;
  myMovie.review = myReview;
  myMovie.time = now._d; 

  parsedMyMovies.push(myMovie);
  let stringifiedMyMovies = JSON.stringify(parsedMyMovies);

  localStorage.setItem("MyMovies", stringifiedMyMovies);
}


// pull from local memory and append cards based on user database
function showMovies(){
  let memory = localStorage.getItem("MyMovies");
  console.log(memory);
  let parsedMemory = JSON.parse(memory);
  console.log(parsedMemory);


  parsedMemory.forEach(movie => (
    
    console.log(movie.title),

    $.ajax({
      url: "https://www.omdbapi.com/?t=" + movie.title +"&y=&plot=short&filter_sort_order=asc&apikey=c2a157c7",
      method: "GET"
    }).then(function(response) {
      console.log(response);

      let cast = response.Actors;
      let castArray = cast.split(",");
      
      // append cards
      $("#movie-cards").append(
        `<div class=card><img class=card-img-top src=${response.Poster}></img><div class=card-body><div class=text-center id=card-text><p id = card-title>${ response.Title} ${response.Year}</p><p class=card-text id=genre>genre: ${response.Genre} </p><p class=card-text id=country>country: ${response.Country}</p><p class=card-text id=director>dir: ${response.Director}</p><p class=card-text id=cast>top-billed: ${castArray[0]}, ${castArray[1]},</p><p class=card-text id=cast>${castArray[2]}, ${castArray[3]}.</p><p class=card-text id=plot>${response.Plot}</p></div><div class=my-info> <p id=rating>${movie.rating}/5</p><p id=review>${movie.review}</p></div>`
        );

    }))   )
}



// buttons 

// click to confirm movie
$("#check-movie").click(()=>{
  console.log("confirm click!");
  checkMovie();

});

// click to go to review adding movie
$("#confirm-movie-yes").click(()=>{
  $("#confirm-movie").modal("hide");
  $("#add-movie").modal({show: true});
})

// click to save movie
$("#submit").click(()=>{
    $("#movie-title").empty();
    $("#add-movie").modal("hide");
    saveMyMovies();
    window.location.reload();
  });

// render movie cards
$("#show-movies").click(()=>{
  console.log("show movies!")
  showMovies();
});

// hide movie cards
$("#hide-movies").click(()=>{
  console.log("hide movies!");
  $("#movie-cards").empty();
})

 
  


  