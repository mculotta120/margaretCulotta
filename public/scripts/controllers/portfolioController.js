
app.controller('portfolioController', ['$scope', '$http', function($scope, $http) {
  console.log("in portfolio controller");
    $scope.followBtnImgUrl = '/sth.jpg';
    $scope.pieces = [{imgUrl: "public/images/image1.jpg", name:"Image 1"},
                     {imgUrl: "public/images/image2.jpg", name: "Image 2"}];

     $scope.toggleImage = function(piece) {
         if(merchant.imgUrl === $scope.followBtnImgUrl) {
             merchant.imgUrl = merchant.$backupUrl;
         } else {
             merchant.$backupUrl = merchant.imgUrl;
             merchant.imgUrl = $scope.followBtnImgUrl;
         }
    };
}]);
