
import calcRoute from './calcRoute.js'

function findGeo(map,infoWindow,directionsService,directionsRenderer,data,latitude,longitude){
        
      directionsRenderer.setMap(map); // object that set route when fullfilled request
    
        let bIdx = Math.floor(Math.random() * 20);
        let pos = {lat:latitude,lng:longitude}
        console.log('what is pos here in findGeo',pos)
         const destination = {
            lat: data.businesses[bIdx].coordinates.latitude,
            lng: data.businesses[bIdx].coordinates.longitude,
          };
          infoWindow.setPosition(destination);
          infoWindow.setContent(`${data.businesses[bIdx].name}`);
          infoWindow.open(map);
          map.setCenter(destination);
          calcRoute(pos,destination,directionsService,directionsRenderer);
          }

export default findGeo;