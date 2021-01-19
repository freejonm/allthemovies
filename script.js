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



function renderCards(){

    movies.forEach(element => (

      // call OMDB API
      $.ajax({
            url: "https://www.omdbapi.com/?t=" + element.title +"&y=&plot=short&apikey=c2a157c7",
            method: "GET"
          }).then(function(response) {
            console.log(response);
            // append cards
            $("body").append(
              "<div class=container><div class = card><div class = card-body><div class=card-text><p id = card-title>" + response.Title + " (" + response.Year + ")" +
              "</p><p class=card-text id=genre>genre: " + response.Genre +
              "</p><p class=card-text id=country>country: " + response.Country +
              "</p><p class=card-text id=director>dir: " + response.Director +
              "</p><p class=card-text id=cast>cast: " + response.Actors +
              "</p><p class=card-text id=plot>" + response.Plot +
              "</p></div><div class=my-info> <p id=rating>" + element.rating + "/5"+
              "</p><p id=review>"+element.review+"</p></div></div>></div></div>"
              );
          })
        ))
      
      };

  renderCards();
  
  // ADD NAVBAR

  // ADD USERS
  // create user handler
  // users can add and save their own reviews by entering the name of a movie in a search field

  // USER STATS
  // categorize user by taste in movies using user ratings compared to imdb votes
  // show user's favorite genre by averaging ratings within genre
