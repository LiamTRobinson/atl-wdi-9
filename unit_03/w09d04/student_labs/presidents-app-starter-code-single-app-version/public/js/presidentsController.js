angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ["$http"];

function PresidentsController($http){
  var vm = this;

  vm.all = [];
  vm.editView = [];
  vm.addPresident = addPresident;
  vm.newPresident = {};
  vm.deletePresident = deletePresident;
  vm.updatePresident = updatePresident;
  vm.displayEditView = displayEditView;
  vm.isLoadingAll = true;

  activate();

  function activate() {
    vm.isLoadingAll = true;
    $http
      .get("/presidents")
      .then(function setAll(response) {
        vm.all = response.data.presidents;
        vm.all.forEach(function(thing) {
          vm.editView = [];
          vm.editView.push(false);
          vm.isLoadingAll = false;
        });
      });
  }

  function addPresident(){
    vm.isLoadingAll = true;
    $http
      .post("/presidents", vm.newPresident)
      .then(function addToAll(response) {
        vm.all.push(response.data.president);
        vm.editView.push(false);
        vm.newPresident = {};
        vm.isLoadingAll = false;
      });
  }

  function deletePresident(index) {
    vm.isLoadingAll = true;
    var id = vm.all[index]._id;
    $http
      .delete(`/presidents/${id}`)
      .then(function(response) {
        activate();
      });
  }

  function updatePresident(index) {
    vm.isLoadingAll = true;
    var id = vm.all[index]._id;
    $http
      .patch(`/presidents/${id}`, vm.all[index])
      .then(function(response) {
        activate();
      });
  }

  function displayEditView(index) {
    vm.editView[index] = true;
  }
}
