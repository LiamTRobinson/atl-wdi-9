var $newLink = $("<a id='zillow-link' href='http://www.zillow.com'><p>Zillow</p></a>");
$(function() {
	$("#addHome").removeClass("btn-danger").addClass("btn-success");
	$("h1").addClass("text-center");
	$newLink.addClass("text-center").appendTo("body");
	$("#zillow-link").attr("target", "_blank");
	$('#addHome').on("click", function(){
    console.log(this);
	});
});





