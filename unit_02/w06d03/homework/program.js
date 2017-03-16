					//hello world


// var express = require("express");
// var app = express();

// app.get("/home", function(req, res) {
// 	res.send("Hello World!");
// });

// app.listen(process.argv[2]);


// 					//static


// var express = require("express");
// var app = express();

// app.use(express.static(process.argv[3]));

// app.listen(process.argv[2]);


// 					//good old form


// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:true}));

// app.post("/form", function(req, res) {
// 	var string = req.body.str;
// 	var revString = "";
// 	for (var i = string.length - 1; i >= 0; i--) {
// 		revString += string.charAt(i);
// 	}
// 	res.send(revString);
// });

// app.listen(process.argv[2]);


					//param pam pam

// var express = require("express");
// var app = express();
// var crypto = require("crypto");

// app.put("/message/:id", function(req, res) {
// 	res.send(crypto.createHash("sha1").update(new Date().toDateString() + req.params.id).digest("hex"));
// });

// app.listen(process.argv[2])

					//what's in query

// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/search", function(req, res) {
// 	res.send(req.query)
// });

app.listen(process.argv[2]);