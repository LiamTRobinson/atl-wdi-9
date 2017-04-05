angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController)
.service("CriminalsService", CriminalsService);

CriminalsService.$inject = ["$http"];
CriminalsController.$inject = ["$http", "CriminalsService"];

function CriminalsController($http, CriminalsService){
  var self = this;
  self.all = [];
  self.newCriminal = {};
  self.addCriminal = addCriminal;
  self.deleteCriminal = deleteCriminal;

  function deleteCriminal(criminal) {
    CriminalsService.deleteCriminal(criminal)
    .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  };
  function addCriminal(newCriminal) {
    CriminalsService.addCriminal(newCriminal)
    .then(function(response) {
      self.all.push(response);
    });
  };

  CriminalsService.getCriminals().then(function(response) {
    self.all = response;
  });

};

function CriminalsService($http) {
  var service = this;
  service.getCriminals = getCriminals;
  service.addCriminal = addCriminal;
  service.deleteCriminal = deleteCriminal;


  function getCriminals(){
    return $http
      .get('/criminals')
      .then(function(response){
        return response.data.criminals;
    });
  }

  function addCriminal(newCriminal){
    return $http
      .post('/criminals', newCriminal)
      .then(function(response){
        return response.data.criminal;
    });
  };

  function deleteCriminal(criminal){
    return $http
      .delete("/criminals/" + criminal._id)
  };
}
