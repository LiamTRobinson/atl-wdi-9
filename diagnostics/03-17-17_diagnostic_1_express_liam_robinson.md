1. A request is sent from the client to the server and the server sends back a response based on the request. The requests are defined by their methods and paths.

2. A get request is a request to view data from the server/database. A post request is a request to add data to the server/database.  Not to imply that server and database are interchangeable, but we haven't worked with databases yet and so my experience has only been with server related shtuuufffff.

3. npm init initializes npm in your current directory by adding the node modules in a json file.

4. Create (post) Read (get) Update (put) Delete (delete)

5. POST

6. It would send a put request containing whatever information was input into the text field to myScript.js.

7. router.post("/menus", function(req, res) {

	//doStuffWithReqBodyAndSuch

	res.redirect("/homepage");
});

8. app.get("/artist/:id/song/:song_id", function(req, res){
	var artistId = req.params.id;
	var songId = req.params.song_id;
});

9. Model View Controller. So far we have implemented this in express.js by separating the data(Model), controllers(Controller), and views(View) into different directories/subdirectories.  We have also used this concept a little bit in JavaScript/JQuery in labs/exercises like the stopwatch.

10. app.get("/products", function(req,res) {
	var responseObject = {error: "Bad Request"};
	res.send(responseObject);
});

	or

	app.get("/products", function(req, res) {
		res.render("/error", {
			error: "Bad Request"
		});
	});