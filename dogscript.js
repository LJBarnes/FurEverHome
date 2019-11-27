// searchTerm will need to be hooked to HTML search bar input in order to grab search term user puts in
var searchTerm = "akita";
var queryURL = "https://api.thedogapi.com/v1/breeds/search?q=" + searchTerm + "&api_key=2348f10e-3705-4583-95c1-15be926331eb";
var breedID;
// Will need to be linked to a click event listener--when you push search button on dog side
$.ajax({
    url: queryURL,
    method: "GET",
    contentType: 'application/json'
  }).then(function(response) {
      console.log(response);
      console.log("dog id", response[0].id);

      // Defining breed ID so it can be supplied in imgQueryURL
      breedID = response[0].id
      var imgQueryURL = "https://api.thedogapi.com/v1/images/search?breed_id=" + breedID + "&api_key=2348f10e-3705-4583-95c1-15be926331eb"
      console.log(imgQueryURL);

      // Second AJAX call to get image URL
      $.ajax({

        url: imgQueryURL,
        method: "GET",
        contentType: 'application/json'
      }).then(function(response) {
        console.log("imgURL", response);
        imgURL = response[0].url;
        console.log(imgURL);
      });
    });
    // Within event listener for dog side---set up dynamic HTML updates for info and img.

    // Set up same process except with Cat API/linking to event listener on cat side of HTML
