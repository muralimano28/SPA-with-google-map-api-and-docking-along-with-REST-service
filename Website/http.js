var app = angular.module('myApp',[]);
			app.controller('showData',function($scope,$http){
				var mapProp = {
                    center : new google.maps.LatLng(12.952093, 77.699544),
                    zoom : 16,
                    mapTypeId : google.maps.MapTypeId.ROADMAP
                };
                myMap = new google.maps.Map(document.getElementById("myMap"),mapProp);
                 $http.get('http://localhost:8376/RestTutorial.Service1.svc/getdata1/').
					success(function(data){
							$scope.table1 = data;
                            addMarker($scope.table1);
							});
				$http.get('http://localhost:8376/RestTutorial.Service1.svc/getdata2/').
					success(function(data){
							$scope.table2 = data;
                            addMarker($scope.table2);
							});        
                                 /*$scope.table1 = [{"Id":1,"Mobile":9952923967,"Name":"Muralimanohar","Location" : "Aricent Campus","Lati":12.955670,"Lngi":77.691364},                       {"Id":2,"Mobile":9487419569,"Name":"Dipesh","Location" : "Innovative Multiplex","Lati":12.954170,"Lngi":77.699420},                                       {"Id":3,"Mobile":1234567890,"Name":"Sahana","Location" : "Aricent Prestige Tech park","Lati":12.944049,"Lngi":77.692811}];
                addMarker($scope.table1);
                $scope.table2 = [{"Id":1,"Mobile":9952923967,"Name":"Muralimanohar","Location" : "Aricent Campus","Lati":12.955670,"Lngi":77.691364},                       {"Id":2,"Mobile":9487419569,"Name":"Dipesh","Location" : "Innovative Multiplex","Lati":12.954170,"Lngi":77.699420},                                       {"Id":3,"Mobile":1234567890,"Name":"Sahana","Location" : "Aricent Prestige Tech park","Lati":12.944049,"Lngi":77.692811}];*/
                function addMarker(table1){
                    for(x in table1){
                         var markerProp = {
                            position : new google.maps.LatLng(table1[x].Lati,table1[x].Longi),
                            map : myMap,
                            title : table1[x].Location                            
                        };
                        var addMarker = new google.maps.Marker(markerProp); 
                    }
                }
			});