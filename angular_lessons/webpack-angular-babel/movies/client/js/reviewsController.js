angular.module("moviesApp")
	.controller("ReviewsController", ReviewsController);

function ReviewsController() {
	var vm = this;

	vm.reviewList = [
		{content: "It was good."},
		{content: "Meh."},
		{content: "Did not like it."}
	]
}