
import calcRoute from './calcRoute.js'



function findGeo(map,infoWindow,directionsService,directionsRenderer,data){
        
      directionsRenderer.setMap(map); // object that set route when fullfilled request
    
        let bIdx = Math.floor(Math.random() * 20);
       
         console.log('what is the data here in geolocation',data)
         console.log('what is bIdx',bIdx)
         console.log('what is data.businesses[bIdx]',data.businesses[bIdx+115])
        
         const destination = {
            lat: data.businesses[bIdx].coordinates.latitude,
            lng: data.businesses[bIdx].coordinates.longitude,
          };


              if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                            (position) =>{
                              const pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                              };
                    
                              infoWindow.setPosition(destination);
                              infoWindow.setContent(`${data.businesses[bIdx].name}`);
                              infoWindow.open(map);
                              map.setCenter(destination);
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