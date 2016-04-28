describe('controller: gitHubDataController',function(){
	'use strict';
	beforeEach(module('app'));

	var myController = null;
	var $httpBackend = null;
	var $http = null;
	var scope = null;

	

	beforeEach(inject(function($rootScope, $controller){
	scope = $rootScope.$new();
	$controller('gitHubDataController',{$scope: scope });
	}));


	beforeEach(inject(function(_$http_, _$httpBackend_){
		$http = _$http_;
		$httpBackend = _$httpBackend_;
	}))

	it('pageSize is has to be 10', function(){
		expect(scope.pageSize).toEqual(10);
	});
	it('currentPage is has to be 0', function(){
		expect(scope.currentPage).toEqual(0);
	});
	it('numPages is has to be 0', function(){
		expect(scope.numPages).toEqual(0);
	});
	it('Test url repository', function(){
		var ret = {"login": "ben", "id": 39902, "repos_url": "https://api.github.com/users/ben/repos"};
		var retRepo =  {"id": 28676835,"name": "100","full_name": "ben/100"};
		scope.username = 'ben';
		scope.Search();
		expect(scope.repos_url).toEqual('https://api.github.com/users/ben/repos'); 

	});
	it('The name of the repository has to be 100', function(){
		var ret = {"login": "ben", "id": 39902, "repos_url": "https://api.github.com/users/ben/repos"};
		var retRepo =  {"id": 28676835,"name": "100","full_name": "ben/100"};
		scope.username = 'ben';
		$httpBackend.whenGET(scope.repos_url).respond(retRepo)
		scope.Search();
		$httpBackend.flush();
		expect(scope.repoData.name).toEqual('100'); 
	});
	it('The name of pages has to be repoData/pageSize', function(){
		var ret = {"login": "ben", "id": 39902, "repos_url": "https://api.github.com/users/ben/repos"};
		var retRepo =  [{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"}];
		scope.username = 'ben';
		$httpBackend.whenGET(scope.repos_url).respond(retRepo)
		scope.Search();
		$httpBackend.flush();
		expect(Math.ceil(scope.repoData.length/scope.pageSize)).toEqual(2); 
	});
	it('The name of pages has to be repoData/pageSize', function(){
		var ret = {"login": "ben", "id": 39902, "repos_url": "https://api.github.com/users/ben/repos"};
		var retRepo =  [{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"}];
		scope.username = 'ben';
		$httpBackend.whenGET(scope.repos_url).respond(retRepo)
		scope.Search();
		$httpBackend.flush();
		expect(Math.ceil(scope.repoData.length/scope.pageSize)).toEqual(2); 
	});
	it('if true make it false and vice versa', function(){
		var keyname = 'name'
		scope.sortKey = keyname;   //set the sortKey to the param passed
        scope.reverse = !scope.reverse; //if true make it false and vice versa
        expect(scope.reverse).not.toEqual(!scope.reverse); 
	});

});