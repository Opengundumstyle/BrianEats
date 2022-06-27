// import {hideSpinner} from "./scripts/loading.js"
import findGeo from './scripts/geolocation.js'
const BusinessLocation = require('./scripts/fetch.js');


let map,infoWindow;

document.addEventListener("DOMContentLoaded", () => {

// hide map 
    document.getElementById("map").style.display = "none"

// generate questions
let userInterface = document.querySelector(".Interface")

// generate options
   let pereferences = ["spicy","sweet","boba","fresh","healthy","expensive"]
   let flavors = document.createElement('div')
      flavors.setAttribute('id','flavors')
      userInterface.append(flavors)
   for(let pereference of pereferences){
         let flavor = document.createElement('button')
         flavor.innerText = pereference
         flavor.setAttribute('class','flavor')
         flavor.setAttribute('id', pereference)
         flavors.appendChild(flavor)
   }



// set trigger event which shows the direction 
     document.getElementById('flavors').addEventListener('click',event =>{
            let destination;
          
             if(event.target.classList.contains('flavor')){
                       
                        switch(event.target.id){
                              case 'spicy':
                                 destination = BusinessLocation.getSpicy().then(data=>getlocation(data));
                                 break;
                              case 'sweet':
                                 destination = BusinessLocation.getSweet().then(data=>getlocation(data));
                                 break;
                              case 'boba':
                                 destination = BusinessLocation.getBoba().then(data=>getlocation(data));
                                 break;
                              case 'fresh':
                                 destination = BusinessLocation.getFresh().then(data=>getlocation(data));
                                 break;
                              case 'healthy':
                                  destination = BusinessLocation.getHealthy().then(data=>getlocation(data));
                                  break;
                              case "expensive":
                                  destination = BusinessLocation.getExpensive().then(data=>getlocation(data));
                                  break;
                         }

                         console.log(destination)

                         function getlocation(data){
                         
                                  // If the fetch was successful, here we can manipulate the data we received
                                 
                                  let mapDisplay = document.getElementById('map')
                                  mapDisplay.style.display = "block"
                                 let directionsService = new google.maps.DirectionsService();
                                 let directionsRenderer = new google.maps.DirectionsRenderer();

                                  directionsRenderer.setOptions({
                                    polylineOptions:{
                                        strokeColor: 'pink'
                                    }
                                 })
                              
                                 console.log(data)

                                 findGeo(map,infoWindow,directionsService,directionsRenderer,data)
                                 
                                 
                         }  
             }
     })
})


function initMap(){ 

  infoWindow = new google.maps.InfoWindow()

   map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:37.799034800120424 ,lng: -122.40128762913366}, zoom:16
      }
  );
}

window.initMap = initMap;

