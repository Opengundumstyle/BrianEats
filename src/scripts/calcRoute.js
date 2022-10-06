
function calcRoute(position,destination,directionsService,directionsRenderer){

    // var selectedMode = document.getElementById('mode').value;
    var request = {
        origin: position,
        destination: destination,
        // destination: {lat:37.7964273,lng:-122.4058233 },
        travelMode: google.maps.TravelMode.WALKING
    };
    
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
          directionsRenderer.setDirections(response);
        }
    });
    
}


export default calcRoute;