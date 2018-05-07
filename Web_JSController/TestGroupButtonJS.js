var app = angular.module('Main.TestGroupButtonJS');
app.controller("TestGroupButtonJS", function($scope, $http) {
	
	$scope.list = [{"strCarrierCode":"NH ","strFFlightNo":"     ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"1234567","strPlanNo":"B0000228","strEffDateFrom":"03May17","strActype":"350 380 747 788 789","strEffDateTo":"23May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"     ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"1234567","strPlanNo":"B0000222","strEffDateFrom":"02May17","strActype":"350 380 747 788 789","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"     ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"1234567","strPlanNo":"B0000013","strEffDateFrom":"13Sep16","strActype":"350 380 747 788 789","strEffDateTo":"31Dec99","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"100  ","strToStation":"OSK","strFromStation":"BKK","strOptDay":"1      ","strPlanNo":"B0000228","strEffDateFrom":"03May17","strActype":"350 380 747 788 789","strEffDateTo":"23May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"100  ","strToStation":"OSK","strFromStation":"BKK","strOptDay":"1      ","strPlanNo":"B0000222","strEffDateFrom":"02May17","strActype":"350 380 747 788 789","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"100  ","strToStation":"   ","strFromStation":"   ","strOptDay":"1 3 5 7","strPlanNo":"B0000153","strEffDateFrom":"01Mar17","strActype":"788","strEffDateTo":"31Dec99","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"100  ","strToStation":"OSK","strFromStation":"BKK","strOptDay":"1      ","strPlanNo":"B0000013","strEffDateFrom":"13Sep16","strActype":"350 380 747 788 789","strEffDateTo":"31Dec99","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"133  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000227","strEffDateFrom":"01May17","strActype":"321","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"200  ","strToStation":"   ","strFromStation":"   ","strOptDay":"1      ","strPlanNo":"B0000228","strEffDateFrom":"03May17","strActype":"350 380 747 788 789","strEffDateTo":"23May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"200  ","strToStation":"   ","strFromStation":"   ","strOptDay":"1      ","strPlanNo":"B0000222","strEffDateFrom":"02May17","strActype":"350 380 747 788 789","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"200  ","strToStation":"   ","strFromStation":"   ","strOptDay":"1      ","strPlanNo":"B0000013","strEffDateFrom":"13Sep16","strActype":"350 380 747 788 789","strEffDateTo":"31Dec99","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"301  ","strToStation":"HKG","strFromStation":"BKK","strOptDay":"123    ","strPlanNo":"B0000233","strEffDateFrom":"01Jul17","strActype":"380","strEffDateTo":"31Jul17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"301  ","strToStation":"HKG","strFromStation":"BKK","strOptDay":"123    ","strPlanNo":"B0000232","strEffDateFrom":"01Jun17","strActype":"380","strEffDateTo":"30Jun17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"301  ","strToStation":"HKG","strFromStation":"BKK","strOptDay":"123    ","strPlanNo":"B0000231","strEffDateFrom":"01May17","strActype":"380","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"301  ","strToStation":"HKG","strFromStation":"BKK","strOptDay":"123    ","strPlanNo":"B0000230","strEffDateFrom":"01May17","strActype":"380","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"301  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000226","strEffDateFrom":"01May17","strActype":"350","strEffDateTo":"30Jun17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"301  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000225","strEffDateFrom":"01May17","strActype":"380","strEffDateTo":"31May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"350  ","strToStation":"   ","strFromStation":"   ","strOptDay":"123    ","strPlanNo":"B0000221","strEffDateFrom":"16May17","strActype":"123","strEffDateTo":"25May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"399  ","strToStation":"HKG","strFromStation":"BKK","strOptDay":"1      ","strPlanNo":"B0000220","strEffDateFrom":"01Jun17","strActype":"380:1","strEffDateTo":"30Jun17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"591  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000210","strEffDateFrom":"01May17","strActype":"316","strEffDateTo":"30May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"601  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"1      ","strPlanNo":"B0000206","strEffDateFrom":"01May17","strActype":"308:1","strEffDateTo":"30May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"603  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000215","strEffDateFrom":"02May17","strActype":"123","strEffDateTo":"30May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"621  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000214","strEffDateFrom":"02May17","strActype":"321","strEffDateTo":"30May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"651  ","strToStation":"hkg","strFromStation":"bkk","strOptDay":"123    ","strPlanNo":"B0000208","strEffDateFrom":"03May17","strActype":"315","strEffDateTo":"24May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"654  ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"1234567","strPlanNo":"B0000169","strEffDateFrom":"27Mar17","strActype":"345","strEffDateTo":"28Oct17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"658  ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"1234567","strPlanNo":"B0000170","strEffDateFrom":"30Mar17","strActype":"345","strEffDateTo":"24Aug17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"660  ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"12 4   ","strPlanNo":"B0000171","strEffDateFrom":"29Mar17","strActype":"345","strEffDateTo":"26May17","strFuncIndex":"B"},{"strCarrierCode":"NH ","strFFlightNo":"700  ","strToStation":"NRT","strFromStation":"BKK","strOptDay":"1234567","strPlanNo":"B0000151","strEffDateFrom":"01Feb17","strActype":"773 774 777","strEffDateTo":"31Dec99","strFuncIndex":"B"}];
	
	
	$scope.i = [1,2,3,4,5,6,7];
    $scope.day = [];
   
    $scope.checkColor = function(i,strOptDay){
 	   var value = strOptDay.slice(i, i + 1);
 	   //console.log("value="+value);.
 	  
 	   if(value != ' '){
 		   return {active: true}; 
 		 }else{
 			 return {active: false};
 		 }
 	};
 	
 	$scope.selection = [];
	$scope.selectIndex = [];
	
	$scope.toggleOptDaySelection = function(index, item) {
		//console.log("Select row index no." + index);
  		
    	console.log(item);
    	   var idx = $scope.selection.indexOf(item);
   	     //IS CURRENTLY SELECTED 
   	    if(idx > -1){
   			$scope.selection.splice(idx, 1);
   			$scope.selectIndex.splice(idx, 1);
   			$scope.Operation.sort(idx, 1);
   	    }
   	     //IS NEWLY SELECTED 
   	    else{ 
   	    	
   			$scope.selection.push(item);
   			$scope.selectIndex.push(index);
   			$scope.selection.sort(item);
   			$scope.selectIndex.sort(index);
   		
   	    }
	    console.log($scope.selectIndex);
	    console.log($scope.selection);
	};
	
	
	
});