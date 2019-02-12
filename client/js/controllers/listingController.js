angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      Listings.create($scope.newListing);
      $scope.newListing = {};
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
      Listings.remove(index).then(function(response) {
      }, function(error) {
        console.log('Could not delete:', error);
        return res.status(200).send(response); 
      });
    };

    $scope.showDetails = function(index) {
      
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);


  