//var myMap; // GLOBAL VARIABLE FOR MAP.....

// THIS FUNCTION IS CALLED WHEN PAGE LOADS FULLY....

function Initialize(){
    
    // CREATE PROPERTIES OF THE GOOGLE MAP API....
    
    var mapProp = {
        center : new google.maps.LatLng(12.939125, 77.693628),
        zoom : 13,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    
    // CREATE A NEW GOOGLE MAP AND SEND DIV ELEMENT AND MAP PROPERTIES AS THE ARGUMENTS.....
    
    myMap = new google.maps.Map(document.getElementById("myMap"),mapProp);
    
    // CREATE A MARKER FOR CENTER OF THE MAP.....
    
   /* var markerProp = {
        position : myMap.getCenter(),
        map : myMap,
        title : "Click to Zoom"
    }
    
    var addMarker = new google.maps.Marker(markerProp); */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

// ADD THE EVENT LISTENER FOR ON PAGE LOAD AND CALL INITIALIZE FUNCTION.....

google.maps.event.addDomListener(window,'load',Initialize);