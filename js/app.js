var app = angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {
        $scope.Search=function(){
            
            LoadUser($scope.username);
        }
        // search the repos belong to the user or org
        var LoadUser = function(userdate){
            $http.get("https://api.github.com/users/" + userdate).success(function (data) {
                // get the user or organisation
                $scope.userData = data;
                // Load repository of the user
                loadRepos();
            });
        }
        

        var loadRepos = function () {
            $http.get($scope.userData.repos_url + "?per_page=100").success(function (data) {
                    $scope.repoData = data;
                    numberOfPages();
                });
        };

        $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
       
        // init pagination parameters 
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.numPages = 0;
        var numberOfPages=function(){
            // number of pages
            $scope.numPages = Math.ceil($scope.repoData.length/$scope.pageSize);
                      
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