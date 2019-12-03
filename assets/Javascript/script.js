// $.ajax({
//       url: "https://api.thedogapi.com/v1/breeds?api_key=2348f10e-3705-4583-95c1-15be926331eb",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);

//     });
var searchTerm = "akita";
var queryURL = "https://api.thedogapi.com/v1/breeds/search?q=" +searchTerm + "&api_key=2348f10e-3705-4583-95c1-15be926331eb";
var breedID;
$.ajax({
  url: queryURL,
  method: "GET",
  contentType: 'application/json'
}).then(function (response) {
  console.log(response);
  console.log("dog id", response[0].id);
  breedID = response[0].id 
  var imgQueryURL = "https://api.thedogapi.com/v1/images/search?breed_id=" + breedID + "&api_key=2348f10e-3705-4583-95c1-15be926331eb"

  console.log(imgQueryURL);
  $.ajax({

    url: imgQueryURL,
    method: "GET",
    contentType: 'application/json'
  }).then(function (response) {
    console.log("img url", response);
  });
    // save to a variable and use to create image
  

  // for (var i = 0; i < 3; i++) {
  //   breedID = response[i].id;
  //   console.log(breedID);
  //   $.ajax({

  //   // the id# will have to change/breed
  //     url: imgQueryURL,
  // method: "GET",
  // contentType: 'application/json'
  // }).then(function (imageResponse){
  //   console.log(imageResponse);
  //   console.log(breedID);

  // });
});



  // console.log(response.data);
  // console.log(response[10].name);
// });

 // original call--breeds/search 
  // inside response object response.id (for images)
  // value will be passed into next ajax call--
  // use id from public images
  // -URL 











// For Images:
// var queryURL = 'https://api.thedogapi.com/v1/images?api_key=2348f10e-3705-4583-95c1-15be926331eb';
// "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=pemb&api_key=2348f10e-3705-4583-95c1-15be926331eb"
// var queryURL = 'https://api.thedogapi.com/v1/images?api_key=2348f10e-3705-4583-95c1-15be926331eb';
// $.ajax({
//   url: queryURL,
//   method: "GET",
//   contentType: 'application/json'
// }).then(function (response) {
//   console.log("image response:" + response);
//   console.log(response.data);
//   console.log(response[10].name);
// });

      // CAT API AJAX CALL:
      // var queryURL = `https://api.thecatapi.com/v1/breeds?api_key=71028376-b274-406a-8124-3a794fdad169`;
      // $.ajax({
      //   url: queryURL,
      //   method: "GET",
      //   contentType: 'application/json'
      // }).then(function(response) {
      //   console.log(response);
      // });

  //     var breedNames = []
  //     $.ajax({
  //       url: queryURL,
  //       method: "GET",
  //       contentType: 'application/json'
  //     }).then(function(response) {
  //       console.log(response);
  //       // figure out a way to do specfic numbes so it doesnt log/append all of them
  //       // needs to log/append the one that's searched for....so this would pertain
  //       // to the event listener attached to drop down elements....
  //       // look at NYTimes activity and see how they attach event listener to the dropdown
  //       console.log(response[10].name);
  //       console.log(response[11].name);
  //       // Use this for getting the names to populate dropdown:
  //       for (var i=0; i < response.length; i++) {
  //         // instead of console logging, append the names to selectid/drop down
  // console.log(response[i].name);


  // });