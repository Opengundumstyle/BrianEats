
function calcRoute(position,destination,directionsService,directionsRenderer){

    // var selectedMode = document.getElementById('mode').value;
    var request = {
        origin: position,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING
    };
    
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
          directionsRenderer.setDirections(response);
        }
    });
    
}


export default calcRoute;