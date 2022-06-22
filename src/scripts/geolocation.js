
import calcRoute from './calcRoute.js'



function findGeo(map,infoWindow,directionsService,directionsRenderer){
        
    
      let destination = new google.maps.LatLng(37.7683909618184, -122.51089453697205); // final position

      directionsRenderer.setMap(map); // object that set route when fullfilled request

              if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                            (position) =>{
                              const pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                              };
                    
                              infoWindow.setPosition(pos);
                              infoWindow.setContent("Location found.");
                              infoWindow.open(map);
                              map.setCenter(pos);
                              calcRoute(pos,destination,directionsService,directionsRenderer)
                            },
                            () => {
                              handleLocationError(true, infoWindow, map.getCenter());
                            }
                    );
              }else{
                   // Browser doesn't support Geolocation
               handleLocationError(false, infoWindow, map.getCenter());
            
              }
//       })
      
            }

export default findGeo;