[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
User: ID, Name, Age, Address, Email providers
Email Providers: ID, Name, users

var user = {
	id: Number,
	name: String,
	address: String,
	emailProviders: []
};
var emailProvider = {
	id: Number,
	name: String,
	users: []
};
var exampleUser = {
	id: 1,
	name: "Stephen Colbert",
	address: "1234 Really Nice House Dr",
	emailProviders: [{
	id: 1,
	name: "Yahoo"
	},{
	id: 506,
	name: "BitMail"
	}]
};
var exampleEmailProvider = {
	id: 65,
	name: "Hotmail",
	users: [{
	id: 453,
	name: "George Castanza",
	address: "5678 Stuff Place",
	},{
	id:.....
	.....
	....

	},......]
};
```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
user: id, name, password, radiostations
radio station: id, name, genre, popularity, playlists
playlist: id, name, songs
songs: id, name, artist, album

var user = {
	id: Number,
	name: String,
	password: String
};
var radioStation = {
	id: Number,
	name: String,
	genre: String,
	popularity: Number,
	playlists: [{
	id: Number,
	name: String,
	songs: [{
	id: Number,
	name: String,
	artist: String,
	album: String
	}, {.....}.....]
},{....}.....]
};
var playlist = {
	id: Number,
	name: String,
	songs: [{
	id: Number,
	name: String,
	artist: String,
	album: String
	}, {.....}.....]
};
var song = {
	id: Number,
	name: String,
	artist: String,
	album: String
};
```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
user: id, name, password, address, email, bands, recommended show(based on highest genre of users bands, address, and closest tour date)
band: tour venues, genre
tour venues: location, show dates, ticket seller

var user: {
	id: Number,
	name: String,
	password: String,
	address: String,
	email: String,
	bands: [],
	recommended show: String
};
var band = {
	tour venues: [];
	genre: String
};
var tourVenues = {
	location: String,
	showDates: {},
	ticketSeller: String
};
```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

```
user: id, name, email, location, shopping cart, past orders
coffeeshop: id, name, address, menu

var user = {
	id: Number,
	name: String,
	email: String,
	location: String,
	shoppingCart: [],
	pastOrders: {}
};
var coffeeShop = {
	id: Number,
	name: String,
	address: String,
	menu: {}
};
```

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
user: id, name, email
team: id, name, location, players
player: id, name, team, stats

var user = {
	id: Number,
	name: String,
	email: String
};
var team = {
	id: Number,
	name: String,
	location: String,
	players: {}
};
var player = {
	id: Number,
	name: String,
	team: String,
	stats: {}
};
```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

```
What information do they share with each other.
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add a link to the slack channel theme along with your name and you comfort level with the homework.
