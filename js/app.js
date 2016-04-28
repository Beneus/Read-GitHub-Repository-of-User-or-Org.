var app = angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {
        
        var urlV3= "https://api.github.com/users/";
        // init pagination parameters 
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.numPages = 0;
        $scope.urlUserData = urlV3;
        
        $scope.Search=function(){
            $scope.repos_url = urlV3 + $scope.username + '/repos';
            $http.get($scope.repos_url + '?per_page=100').success(function (data) {
             if(data){
                $scope.repoData = data;
                $scope.numPages = Math.ceil($scope.repoData.length/$scope.pageSize);
             }
            });
        }
     
        $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }

}]).filter('startFrom', function() {
            return function(input, start) {
                // first document of the page
                    start = +start; 
                    // list of documents from start
                if(input){
                    return input.slice(start);
                }
            }
   
});
