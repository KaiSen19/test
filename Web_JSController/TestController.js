var app = angular.module('Main.TestController');
app.controller("TestController", function($scope, $http) {

	
	$scope.click = function(){
		
		$http({
			method: 'POST',
			url:'/TestDB2/TestDb2servlet',
			headers:{
				'Content-Type': 'application/json',
			},
			data:{
					'carrier' : $scope.carrier,
			},
		}).then( function successCallback(response) {
			
			$scope.list = response.data.list;
			
	
			console.log("aa ="+$scope.list);
			
		},function errorCallback(response) {
        	console.log(response);
        	alert("Error : " + response);
        }); 
		
		
	};
	
});