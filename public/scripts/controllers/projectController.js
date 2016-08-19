myApp.controller('projectController', [ '$scope', '$http', function( $scope, $http ){
  console.log("projectController");

  $scope.getProjects = function(){  // gets current recordset upon button click
          $http({   // gets recordset via GET
            method: 'GET',
            url: '/getProjects',
          }).then( function( response ){  // success call - runs function with response parameter
            console.log(response, "from GET");
              $scope.solo_projects = response.data;
              console.log($scope.solo_projects, "solo_projects"); // pulls the data from app.js and sets to solo_projects
            }, function myError( response ){
            console.log( response.statusText );
          }); //end .then
        }; //end getIssues

}]);
