
 	var MovieName = process.argv[2];
 	if (MovieName === undefined ) { MovieName = "Mr. NoBody" }
 	//console.log(MovieName);
	// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
	var request = require("request");
	// Then run a request to the OMDB API with the movie specified
	request("http://www.omdbapi.com/?t=" + MovieName + "=&plot=short&apikey=40e9cece", function(error, response, body) {
  	// If the request is successful (i.e. if the response status code is 200)
  	if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    
    body = JSON.parse(body);
//    console.log('inside keys.js');
//    console.log(body);
// 	console.log("Title" + body.Title);
// 	console.log("Rating: " + body.imdbRating);
// 	console.log("Released: " + body.Released);
// 	console.log("Actors: " + body.Actors);
// 	console.log("Genre: " + body.Genre);
// 	console.log("Language: " + body.Language);
// 	console.log("Country: " + body.Country);
  	//  // * Title of the movie.
  	//  //* Year the movie came out.
  	//  //* IMDB Rating of the movie.
  	//  //* Rotten Tomatoes Rating of the movie.
  	// // * Country where the movie was produced.
  	//  * Language of the movie.
  	//  * Plot of the movie.
  	//  * Actors in the movie.
  	}
 });

 	var twitterKeys = {
   consumer_key: '4EVAnqz8X8UYZAtBwZ3wiiiFj',
   consumer_secret: 'Jj68XufBnAKu0NNModrmeTzvrzvfB6bVorPUVSgihSlFEkCcju',
   access_token_key: '919673721484222464-osscqEREEhBkMMy8DpBI8CMxIpjbMYv',
   access_token_secret: 'nGCYaYiWKcnv6ASVvHJ2Z52XqqrvSZ17LY2BCgBbKAax4'
 }

 module.exports = twitterKeys;
 
//  	var fs = require("fs");
//  	//This block of code will read from the "movies.txt" file.
// 	//It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// 	//The code will store the contents of the reading inside the variable "data"
// 	fs.readFile("random.txt", "utf8", function(error, data) {
//   	// If the code experiences any errors it will log the error to the console.
//   	if (error) {
//       return console.log(error);
//   	}
//   	// We will then print the contents of data
//   	console.log(data);
//   	// Then split it by commas (to make it more readable)
//   	var dataArr = data.split(",");
//   	// We will then re-display the content as an array for later use.
//   	console.log(dataArr);
 		
//  		var spotifySong = process.argv[2];
//  		var spotify = require('Spotify');

// 		function spotifySong(song) {
//   		spotify.search({ type: 'track', query: song}, function(error, data){
//       	if(!error){
//         	for(var i = 0; i < data.tracks.items.length; i++){
//             var songData = data.tracks.items[i];
//             //artist
//             console.log("Artist: " + songData.artists[0].name);
//             //song name
//             console.log("Song: " + songData.name);
//             //spotify preview link
//             console.log("Preview URL: " + songData.preview_url);
//             //album name
//             console.log("Album: " + songData.album.name);
//             console.log("-----------------------");
            
//             //adds text to log.txt
//             fs.appendFile('log.txt', songData.artists[0].name);
//             fs.appendFile('log.txt', songData.name);
//             fs.appendFile('log.txt', songData.preview_url);
//             fs.appendFile('log.txt', songData.album.name);
//             fs.appendFile('log.txt', "-----------------------");
//           }
//         } else {
//           console.log('Error occurred.');
//         }
//       })
//     };
//   });