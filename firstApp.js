var url = "http://localhost:8000/all";                                                                                                                                               
                                                                                                       
angular.module('firstApp', [])                                                                         
                                                                                                       
.controller('mainController', [ '$scope', '$http', function($scope, $http) {                           
    // bind this to vm (view-model)                                                                    
    // define variables and objects on this                                                            
    // this lets them be available to our views                                                        
    // define a list of items                                                                          
                                                                                                       
                                                                                                       
  $scope.players = function(){                                                                         
       console.log("here");                                                                            
       $http.get(url).success(function(response){ 
         console.log(response);
         return response;  
       });                            
   }                                                                                                   
                                                                                                       
}]);            
