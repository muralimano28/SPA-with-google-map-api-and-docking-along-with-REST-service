var app = angular.module('myApp',[]);
			app.controller('showData',function($scope,$http){
			
				/*$http.get('http://localhost:8733/WcfJsonRestService.Service1.svc/data/').
					success(function(data){
							$scope.table1 = data;
							});
							$http.get('http://localhost:8733/WcfJsonRestService.Service1.svc/data1/').
					success(function(data){
							$scope.table2 = data;
							});*/
							$scope.table1 = [{"Id":1,"Mobile":9952923967,"Name":"Muralimanohar"},{"Id":2,"Mobile":9487419569,"Name":"Dipesh"},{"Id":3,"Mobile":1234567890,"Name":"Sahana"}];
			});