$(function() {
	var giphyPic = "";
	$(".get-gif").on("click", function() {
		$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  			.done(function(data){
    			console.log(data);
    			giphyPic += data.data.image_url;

 		});
  		$(".image-jumbotron").attr("src", giphyPic);
	});

	$(".save-gif").on("click", function() {
		console.log(giphyPic.toString());
		$.post("/gifs", giphyPic.toString());
	});

})
