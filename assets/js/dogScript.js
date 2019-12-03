// if response[0].id === undefined (seems to be when it gets to id)...display "Sorry, we don't have any information on this particular breed."

$(document).ready(function () {


    $('#dogSearchBtn').click(function () {
        console.log("click");
        var dogSearchTerm = $("#dogSearchTerm").val().toLowerCase().trim();
        var queryURL = "https://api.thedogapi.com/v1/breeds/search?q=" + dogSearchTerm + "&api_key=2348f10e-3705-4583-95c1-15be926331eb";
        var breedID;
        event.preventDefault()

        
        
        console.log(dogSearchTerm);

// Will need to be linked to a click event listener--when you push search button on dog side
$.ajax({
    url: queryURL,
    method: "GET",
    contentType: 'application/json'
  }).then(function(response) {
      console.log(response);
      console.log("dog id", response[0].id);
      console.log("Got here!");

    

      // Defining breed ID so it can be supplied in imgQueryURL
      breedID = response[0].id
      var imgQueryURL = "https://api.thedogapi.com/v1/images/search?breed_id=" + breedID + "&api_key=2348f10e-3705-4583-95c1-15be926331eb"
      console.log(imgQueryURL);
      console.log("Got here 2");

      // Second AJAX call to get image URL
      $.ajax({

        url: imgQueryURL,
        method: "GET",
        contentType: 'application/json'
      }).then(function(dogImgResponse) {

        $("#dogDiv").empty();

        console.log("imgURL", dogImgResponse);
        dogImgURL = dogImgResponse[0].url;
        console.log("dogImgURL: " + dogImgURL);

        var createDogImg = $("<img class='dogImg' src=" + dogImgURL+ ">");
        var dogName = response[0].name;
        var dogLifeSpan = response[0].life_span;
        var dogWeight = response[0].weight.imperial;
        var dogHeight = response[0].height.imperial;
        var dogBredFor = response[0].bred_for;
        var dogTemperament = response[0].temperament;


        $("#dogDiv").append(createDogImg);
        // try to center image and text
        $("#dogDiv").append("<br><br>")
        $("#dogDiv").append("<strong>Breed Name</strong>: " + dogName + "<br>");
        $("#dogDiv").append("<strong>Temperament</strong>: " + dogTemperament + "<br>");
        $("#dogDiv").append("<strong>Life Span:</strong> " + dogLifeSpan + "<br>");
        $("#dogDiv").append("<strong>Weight:</strong> " + dogWeight + " pounds <br>");
        $("#dogDiv").append("<strong>Height:</strong> " + dogHeight + " inches <br>");
        $("#dogDiv").append("<strong>Bred for:</strong> " + dogBredFor + "<br>");
        
      });
    });
});

});
// });


    


// }
    // Within event listener for dog side---set up dynamic HTML updates for info and img.

    // Set up same process except with Cat API/linking to event listener on cat side of HTML
