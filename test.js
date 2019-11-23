 var queryURL = `https://api.thedogapi.com/v1/breeds?api_key=71028376-b274-406a-8124-3a794fdad169`;
  $.ajax({
    url: queryURL,
    method: "GET",
    contentType: 'application/json'
  }).then(function(response) {
    console.log(response);
    var results = response.id;
    for (var i = 0; i < results.length; i++);{
      console.log(response[i].id)
    }
  })