
// database 
var movies = 
[
  {title: "breathless",
   rating: "4",
   review: "bonnie et clyde. she's a winner, he's a loser, but you can't fool the paris police." },

   {title: "dazed+and+confused",
    rating: "5",
    review: "come for the catchphrases, drugs, and rock and roll. stay for that summer (not) coming of age feeling." },

   {title: "e.t.",
    rating: "4.5",
    review: "e.t. getting drunk is my whole asthetic."
   },
  
  {title: "jurassic+park",
   rating: "3",
   review: "most kids will love/be terrified by it. most adults will remember being kids." },
  
]

// empty array for local storage
var myMovies = [];

// functions

function checkMovie(){

  var title = $("#movie-title").val();

  $.ajax({
    url: "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&filter_sort_order=asc&apikey=c2a157c7",
    method: "GET"
  }).then(function(response){
    console.log(response);
    if (response.response === "False"){
      $("#exampleModalLongTitle").text("ERROR!!!!!!");
      $(".modal-body").text("Movie title not found. Please double-check that you have the correct title and try again.")
    }

    else{
    $(".modal-body").empty();
    $(".modal-body").append("<img src="+response.Poster+"></img>")
  }
    
    // text(response.Title + " released in " + response.Year + " directed by " + response.Director);
  })

  


}
// users create their own database
function saveMyMovies(){

  // getting user input
  var myTitle = $("#movie-title").val();
  var myRating = $("#my-rating").val();
  var myReview = $("#my-review").val();

  // getting array of objects from local storage or creating a new one if there is none
  var stringMyMovies = localStorage.getItem("MyMovies") || "[]";
  var parsedMyMovies= JSON.parse(stringMyMovies);

  // building myMovie object with user inputs
  var myMovie = {};
  myMovie.title = myTitle;
  myMovie.rating = myRating;
  myMovie.review = myReview;

  parsedMyMovies.push(myMovie);
  var stringifiedMyMovies = JSON.stringify(parsedMyMovies);

  localStorage.setItem("MyMovies", stringifiedMyMovies);
}


function renderMovies(){

    movies.forEach(element => (

      // call OMDB API
      $.ajax({
            url: "https://www.omdbapi.com/?t=" + element.title +"&y=&plot=short&filter_sort_order=asc&apikey=c2a157c7",
            method: "GET"
          }).then(function(response) {
            console.log(response);
            
            // build array out of Actors string from API
            var cast = response.Actors;
            castArray = cast.split(",");

            // append cards
            $("#movie-cards").append(
              "<div class=card><div class=card-body><div class=text-center id=card-text><p id = card-title>" + response.Title + " (" + response.Year + ")" +
              "</p><p class=card-text id=genre>genre: " + response.Genre +
              "</p><p class=card-text id=country>country: " + response.Country +
              "</p><p class=card-text id=director>dir: " + response.Director +
              "</p><p class=card-text id=cast>top-billed: " + castArray[0] + ", " + castArray[1] + ",</p>" + "<p class-card-text id=cast>" + castArray[2] + ", " + castArray[3] +
              ".</p><p class=card-text id=plot>" + response.Plot +
              "</p></div><div class=my-info> <p id=rating>" + element.rating + "/5"+
              "</p><p id=review>"+element.review+"</p></div></div>"
              );
          })
        ))
      
      };

// pull from local memory and append cards based on user database
function pullMemory(){
  var memory = localStorage.getItem("MyMovies");
  console.log(memory);
  var parsedMemory = JSON.parse(memory);
  console.log(parsedMemory);


  parsedMemory.forEach(element => (
    
    console.log(element.title),

    $.ajax({
      url: "https://www.omdbapi.com/?t=" + element.title +"&y=&plot=short&filter_sort_order=asc&apikey=c2a157c7",
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var cast = response.Actors;
      var castArray = cast.split(",");

      // append cards
      $("#movie-cards").append(
        "<div class=card><div class=card-body><div class=text-center id=card-text><p id = card-title>" + response.Title + " (" + response.Year + ")" +
        "</p><p class=card-text id=genre>genre: " + response.Genre +
        "</p><p class=card-text id=country>country: " + response.Country +
        "</p><p class=card-text id=director>dir: " + response.Director +
        "</p><p class=card-text id=cast>top-billed: " + castArray[0] + ", " + castArray[1] + ",</p>" + "<p class-card-text id=cast>" + castArray[2] + ", " + castArray[3] +
        ".</p><p class=card-text id=plot>" + response.Plot +
        "</p></div><div class=my-info> <p id=rating>" + element.rating + "/5"+
        "</p><p id=review>"+element.review+"</p></div></div>"
        );

    }))   )
}



// buttons

// click to confirm movie
$("#check-movie").click(function(){
  console.log("confirm click!");
  $("#exampleModalCenter").modal({show: true});
  checkMovie();

});

// click to save movies
$("#submit").click(function(){
    $("#movie-title").text("placeholder");
   
    saveMyMovies();
    window.location.reload();
});

// render movie cards
$("#show-movies").click(function(){
  console.log("show movies!")
  pullMemory();
});

// hide movie cards
$("#hide-movies").click(function(){
  console.log("hide movies!");
  $("#movie-cards").empty();
})

 
  


  