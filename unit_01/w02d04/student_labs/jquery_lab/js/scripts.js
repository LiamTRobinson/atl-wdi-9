$(document).ready(function() {

	var teams = ['New York Giants', 'Washington Redskins', 'Philadelphia Eagles', 'Dallas Cowboys'];
	var $teamDivs = $("#content div");
	var $images = $("img");
	var thisTeam = function(x) {
		for (var i = 0; i < teams.length; i++) {
			if (x === $images[i]) {
				return teams[i];
			}
		}
	}

	$(document).on("click", function() {
			$(".teams-container").css("display", "block");
			$("p").remove();

	$teamDivs.addClass("teams-container");

	$images.on("click", function(event) {
		event.stopPropagation();
		$(".teams-container").hide();
		$(this).parent().css("display", "block");
		$("p").remove();
		$(this).parent().append("<p>");
		$("p").html(thisTeam(this));
		})
	})
});
