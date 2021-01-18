var movies = [
  {title: "jurassic+park",
   review: "a fun romp. kids love and are terrified by it. adults remember being kids." },
  {title: "breathless",
   review: "bonnie et clyde. she's a winner, he's a loser, but you can't outsmart the paris police." },
  {title: "dazed+and+confused",
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
      
            $("body").append(
              "<div class = card><div class = card body><h5 id = card-title>" + response.Title +
              "</h5><p id = year-director>" + response.Year + 
              "</p><p class = card-text>"+element.review+"</p></div></div>"
              );
          })
        ))
      
      };

  renderCards();
