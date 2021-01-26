var movies = [
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




// add new movies to array through ui

function renderCards(){

    movies.forEach(element => (

      // call OMDB API
      $.ajax({
            url: "https://www.omdbapi.com/?t=" + element.title +"&y=&plot=short&filter_sort_order=asc&apikey=c2a157c7",
            method: "GET"
          }).then(function(response) {
            console.log(response);
            // append cards
            $(".movie-cards").append(
              "<div class=col-md-8><div class=card><div class=card-body><div class=text-center id=card-text><p id = card-title>" + response.Title + " (" + response.Year + ")" +
              "</p><p class=card-text id=genre>genre: " + response.Genre +
              "</p><p class=card-text id=country>country: " + response.Country +
              "</p><p class=card-text id=director>dir: " + response.Director +
              "</p><p class=card-text id=cast>cast: " + response.Actors +
              "</p><p class=card-text id=plot>" + response.Plot +
              "</p></div><div class=my-info> <p id=rating>" + element.rating + "/5"+
              "</p><p id=review>"+element.review+"</p></div></div></div>"
              );
          })
        ))
      
      };

$("#submit").click(function(){
    console.log("submit button!")
    saveMyMovies();
    window.location.reload();
});

$("#show-movies").click(function(){
  console.log("show movies!")
  $("#buttons").append("<button type=button class= btn btn-primary btn-lg btn-block id=hide-movies>Hide my movies</button>");
  renderCards();
});

 
  


  