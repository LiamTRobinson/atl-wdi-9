angular.module("InfamousCriminals")
	.controller("CriminalsController", CriminalsController);

CriminalsController.$inject = ["$http"];

function CriminalsController ($http) {
	var vm = this;

	vm.all = [];
	vm.newCriminal = {};
	vm.addCriminal = addCriminal;
	vm.deleteCriminal = deleteCriminal;
	vm.updateCriminal = updateCriminal;
	vm.displayEditStatusView = displayEditStatusView;
	vm.editStatusView = [];
	vm.editLocationView = [];
	vm.displayEditLocationView = displayEditLocationView;

	activate();

	function addCriminal() {
		$http
			.post("/criminals", vm.newCriminal)
			.then(function(response) {
				vm.all.push(response.data.criminal);
				vm.editStatusView.push(false);
				vm.editLocationView.push(false);
				vm.newCriminal = {};
			});
	}

	function activate() {
		$http
			.get("/criminals")
			.then(function(response) {
				vm.all = response.data.criminals;
				vm.all.forEach(function() {
					vm.editStatusView.push(false);
					vm.editLocationView.push(false);
				});
			});
	}

	function deleteCriminal(index) {
		var id = vm.all[index]._id;
		$http
			.delete(`/criminals/${id}`)
			.then(function(response) {
				vm.all.splice(index, 1);
				vm.editStatusView.splice(index, 1);
				vm.editLocationView.splice(index, 1);
			});
	}

	function updateCriminal(index) {
		var id= vm.all[index]._id;
		$http
			.patch(`criminals/${id}`, vm.all[index])
			.then(function(response) {
				vm.all[index] = response.data.criminal;
			});
	}

	function displayEditStatusView(index) {
		if (vm.editStatusView[index] === true) {
			vm.editStatusView[index] = false;
		}
		else {
			vm.editStatusView[index] = true;
		}
	}

	function displayEditLocationView(index) {
		if (vm.editLocationView[index] === true) {
			vm.editLocationView[index] = false;
		}
		else {
			vm.editLocationView[index] = true;
		}
	}
}