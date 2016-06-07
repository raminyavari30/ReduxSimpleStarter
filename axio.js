var axios = require('axios');

var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyCm8LVgXXLesWdJZboaavAmLgvT8cVtXD0'
 
axios.get(url).then(function(response){
  console.log(response.data.results);
})