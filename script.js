var movies = [
  {title: "jurassic+park",
   rating: "3",
   review: "a fun romp. kids love and are terrified by it. adults remember being kids." },
  {title: "breathless",
   rating: "4",
   review: "bonnie et clyde. she's a winner, he's a loser, but you can't fool the paris police." },
  {title: "dazed+and+confused",
   rating: "5",
   review: "come for the catchphrases, drugs, and rock and roll. stay for that summer (not) coming of age feeling." }
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
              "<div class = card><div class = card body><h5 id = card-title>" + response.Title +
              "</h5><p id=year>" + response.Year + 
              "</p><p id=director>" + response.Director +
              "</p><p id=cast>" + response.Actors +
              "</p><p id=rating>" + element.rating + "/5"+
              "</p><p class = card-text>"+element.review+"</p></div></div>"
              );
          })
        ))
      
      };

  renderCards();
