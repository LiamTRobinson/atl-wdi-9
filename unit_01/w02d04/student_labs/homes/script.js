$(function() {
	var $newLink = $("<a id='zillow-link' href='http://www.zillow.com'><p>Zillow</p></a>");
	var newHomes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  	];
  	var lastTds = $("tbody tr:last-child td");
  	var keyNames = ["address", "sf", "bedrooms", "baths", "price"];

  	$("#showHomes").on("click", function(){
  		$("tbody tr").fadeIn(1000).show();
  	})

	$("#addHome").removeClass("btn-danger").addClass("btn-success");
	$("h1").addClass("text-center");
	$newLink.addClass("text-center").appendTo("body");
	$("#zillow-link").attr("target", "_blank");

	$('#addHome').on("click", function(){
    	$("tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td><button class='btn btn-xs btn-danger'>Remove</button></td></tr>");
    	for (var i = 0; i <= Object.keys(newHomes[0]).length; i++) {
    		$("tbody tr:last-child td:nth-child("+i+")").text(newHomes[0][keyNames[i-1]]);
    	}
    	newHomes.shift();
    	if (newHomes.length === 0){
    		$("#addHome").fadeOut(1000, function() {$(this).remove();});
    	}
	});

	$('#homes tbody').on('click', 'tr', 
		function() {
    		$(this).fadeOut(1000, 
    			function() {
    				console.log(this);
        			$(this).hide();
    			});
		});




});





