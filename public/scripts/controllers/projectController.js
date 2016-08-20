myApp.controller('projectController', [ '$scope', '$http', function( $scope, $http ){
  console.log("projectController");
  $scope.projects =[];
  $scope.soloProjects = [];
  $scope.groupProjects = [];

  $scope.getProjects = function(){  // gets current recordset upon button click
          $http({   // gets recordset via GET
            method: 'GET',
            url: '/getProjects',
          }).then( function( response ){  // success call - runs function with response parameter
            // console.log(response, "from GET");
              $scope.projects = response.data;
              for(var i = 0; i<$scope.projects.length; i++){
                if($scope.projects[i].type == "solo"){
                $scope.soloProjects.push($scope.projects[i]);
              }else{
                $scope.groupProjects.push($scope.projects[i]);
                }
              } // end for loop
            }, function myError( response ){
            console.log( response.statusText );
          }); //end .then

        }; //end getProjects



}]);
