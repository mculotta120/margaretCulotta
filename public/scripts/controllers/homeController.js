myApp.controller('homeController', [ '$scope', '$http', function( $scope, $http ){
  // console.log("homeController");
 console.log("in portfolio");
    $scope.colorImages=[{imgUrl:"/images/image1.jpg", name:"Image 1"}, {imgUrl:"/images/image2.jpg", name: "Image 2"},
                        {imgUrl:"/images/image3.jpg", name: "Image 3"},{imgUrl:"/images/image4.jpg", name: "Image 4"}];
    $scope.pieces = [{imgUrl: "/images/image1.jpg", name:"Image 1", afterImgUrl: "/images/image3.jpg"},
                     {imgUrl: "/images/image2.jpg", name: "Image 2", afterImgUrl: "/images/image4.jpg"}];
    //  $scope.followBtnImgUrl = '/images/Meg_bw.jpg';

     $scope.toggleImage = function(piece) {
         if(piece.imgUrl === piece.afterImgUrl) {
             piece.imgUrl = piece.$backupUrl;
         } else {
             piece.$backupUrl = piece.imgUrl;
             piece.imgUrl = piece.afterImgUrl;
         }
    }; //end toggleImage

        $scope.currentPieceIndex = 0;
        $scope.currentColorPiece = $scope.colorImages[$scope.currentPieceIndex];
        $scope.thumbnailOpen = function( index ){
          $scope.currentPieceIndex = index;
            console.log("image: " + index);
            console.log("$scope.currentPieceIndex"+$scope.currentPieceIndex);
            console.log("$scope.colorImages[$scope.currentPieceIndex]"+ $scope.colorImages[$scope.currentPieceIndex]);
           }; //end thumbnailOpen

}]);
