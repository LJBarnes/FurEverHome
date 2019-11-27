// searchTerm will need to be hooked to HTML search bar input in order to grab search term user puts in
var searchTerm = "american wirehair";
var queryURL = "https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm + "&api_key=71028376-b274-406a-8124-3a794fdad169";
var breedID;
// Will need to be linked to a click event listener--when you push search button on cat side
$.ajax({
    url: queryURL,
    method: "GET",
    contentType: 'application/json'
  }).then(function(response) {
      console.log(response);
      console.log("cat id", response[0].id);

      // Defining breed ID so it can be supplied in imgQueryURL
      // This is different for catAPI...figure out where the image url is
      breedID = response[0].id
      var imgQueryURL = "https://api.thecatapi.com/v1/images/search?breed_id=" + breedID +" &api_key=71028376-b274-406a-8124-3a794fdad169";
      // https://api.thecatapi.com/v1/images/search?breed_ids=beng
      // + breedID +
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
    // Within event listener for cat side---set up dynamic HTML updates for info and img.

  
