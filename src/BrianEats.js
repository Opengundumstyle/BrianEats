// import {hideSpinner} from "./scripts/loading.js"
import findGeo from './scripts/geolocation.js'
const BusinessLocation = require('./scripts/fetch.js').default;
let map,infoWindow;

document.addEventListener("DOMContentLoaded", () => {
// hide map 
   document.getElementById("map").style.display = "none"

// generate questions
   // let userInterface = document.querySelector(".Interface")
   let introInterface =  document.querySelector(".start-page")
   let userInterface = document.querySelector(".page2")

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
    
   document.getElementById('start-button').addEventListener('click', event =>{
       if(event.target.id === 'start-button') 
          {
            userInterface.style.display='block'
            introInterface.style.display = 'none'
            }
   })

   
// set trigger event which shows the direction 
     document.getElementById('flavors').addEventListener('click',event =>{
            if(event.target.classList.contains('flavor')){
               switch(event.target.id){
                              case 'spicy':
                                 navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                        latitude = position.coords.latitude;  
                                        longitude = position.coords.longitude;
                                        BusinessLocation.getSpicy(latitude,longitude)
                                        .then((data)=>getlocation(data,latitude,longitude))
                                  })
                                 break;
                                 case 'sweet':
                                    navigator.geolocation.getCurrentPosition(position => {
                                         let latitude,longitude;
                                         latitude = position.coords.latitude;  
                                         longitude = position.coords.longitude;
                                         BusinessLocation.getSweet(latitude,longitude)
                                         .then((data)=>getlocation(data,latitude,longitude))
                                   })
                                  
                                    break;
                                 case 'boba':
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getBoba(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude))
                                 })
                                    break;
                                 case 'fresh':
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getFresh(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude))
                                 })
                                    break;
                                 case 'healthy':
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getHealthy(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude))
                                 })
                                    break;
                                 case "expensive":
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getExpensive(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude))
                                 })
                                 break;
                         }
                        

                         function getlocation(data,latitude,longitude){
                         
                                  // If the fetch was successful, here we can manipulate the data we received

                                  console.log('what is the data here in brianeats',data)
                                  
                                  let mapDisplay = document.getElementById('map')
                                      mapDisplay.style.display = "block"
                                  
                                  document.getElementById('flavors').style.display ="none"
                                     
                                  let directionsService = new google.maps.DirectionsService();

                                  let directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});

                                  directionsRenderer.setOptions({
                                    polylineOptions:{
                                        strokeColor: 'pink'
                                    }
                                 })    
                     
                              findGeo(map,infoWindow,directionsService,directionsRenderer,data,latitude,longitude) 
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

