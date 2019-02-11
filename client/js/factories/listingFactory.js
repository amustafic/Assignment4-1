angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://bootcamp5-adnanmustafic.herokuapp.com');
    },
	
	create: function(listing) {
	  return $http.post('https://bootcamp5-adnanmustafic.herokuapp.com', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('https://bootcamp5-adnanmustafic.herokuapp.com', listing);

    }
  };

  return methods;
});
