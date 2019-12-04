// searchTerm will need to be hooked to HTML search bar input in order to grab search term user puts in

$(document).ready(function () {
$('#catSearchBtn').click(function () {
  console.log("click");
  var catSearchTerm = $("#catSearchTerm").val().toLowerCase().trim();
  var catQueryURL = "https://api.thecatapi.com/v1/breeds/search?q=" + catSearchTerm + "&api_key=71028376-b274-406a-8124-3a794fdad169";
  var catBreedID;
  event.preventDefault()


  console.log(catSearchTerm);

  $.ajax({
    url: catQueryURL,
    method: "GET",
    contentType: 'application/json'
  }).then(function (catResponse) {
    console.log(catResponse);
    console.log("cat id", catResponse[0].id);
    console.log("Got here cat side!");

    // Defining breed ID so it can be supplied in imgQueryURL
    
    catBreedID = catResponse[0].id
    var catImgQueryURL = "https://api.thecatapi.com/v1/images/search?breed_id=" + catBreedID + " & api_key=71028376-b274-406a-8124-3a794fdad169";

    console.log(catImgQueryURL);

    // Second AJAX call to get image URL
    $.ajax({

      url: catImgQueryURL,
      method: "GET",
      contentType: 'application/json'
    }).then(function (catImgResponse) {

      $("#catDiv").empty();
      
      console.log("catImgURL", catImgResponse);
      catImgURL = catImgResponse[0].url;
      console.log("catimgUrl: " + catImgURL);

      var createCatImg = $("<img class='catImg' src=" + catImgURL + ">");
      var catName = catResponse[0].name;
      var catLifeSpan = catResponse[0].life_span;
      var catWeight = catResponse[0].weight.imperial;
      var catOrigin = catResponse[0].origin;
      var catTemperament = catResponse[0].temperament;
      var catShedLevel = catResponse[0].shedding_level;
      var catDescription = catResponse[0].description;
      var catDogFriendly = catResponse[0].dog_friendly;


      
      $("#catDiv").append(createCatImg);
      $("#catDiv").append("<br><br>");
      $("#catDiv").append("<strong>Breed Name:</strong> " + catName + "<br>");
      $("#catDiv").append("<strong>Description:</strong> " + catDescription + "<br>");
      $("#catDiv").append("<strong>Temperament:</strong> " + catTemperament + "<br>");
      $("#catDiv").append("<strong>Life Span: </strong> " + catLifeSpan + " years <br>");
      $("#catDiv").append("<strong>Weight:</strong> " + catWeight + " pounds <br>");
      $("#catDiv").append("<strong>Origin:</strong> " + catOrigin + "<br>");
      $("#catDiv").append("<strong>Shedding:</strong> " + catShedLevel + " (on a scale of 1 to 5) <br>");
      $("#catDiv").append("<strong>Dog Friendly:</strong> " + catDogFriendly + " (on a scale of 1 to 5) <br>");
    });
  });

});

});
