// import {hideSpinner} from "./scripts/loading.js"
import findGeo from './scripts/geolocation.js'
const BusinessLocation = require('./scripts/fetch.js').default;
let map,infoWindow;


document.addEventListener("DOMContentLoaded", () => {
// hide map 
   document.getElementById("map").style.display = "none"
  
// generate questions
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
                                        .then((data)=>getlocation(data,latitude,longitude,event.target.id))
                                  })
                                 break;
                                 case 'sweet':
                                    navigator.geolocation.getCurrentPosition(position => {
                                         let latitude,longitude;
                                         latitude = position.coords.latitude;  
                                         longitude = position.coords.longitude;
                                         BusinessLocation.getSweet(latitude,longitude)
                                         .then((data)=>getlocation(data,latitude,longitude,event.target.id))
                                   })
                                  
                                    break;
                                 case 'boba':
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getBoba(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude,event.target.id))
                                 })
                                    break;
                                 case 'fresh':
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getFresh(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude,event.target.id))
                                 })
                                    break;
                                 case 'healthy':
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getHealthy(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude,event.target.id))
                                 })
                                    break;
                                 case "expensive":
                                    navigator.geolocation.getCurrentPosition(position => {
                                       let latitude,longitude;
                                       latitude = position.coords.latitude;  
                                       longitude = position.coords.longitude;
                                       BusinessLocation.getExpensive(latitude,longitude)
                                       .then((data)=>getlocation(data,latitude,longitude,event.target.id))
                                 })
                                 break;
                         }
                        

                         function getlocation(data,latitude,longitude,categoryName){
                                  // If the fetch was successful, here we can manipulate the data we received
                                  console.log('what is the data here in brianeats',data)
                                  let locationIcon = "https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/destination.gif";
                                 //  console.log('this should not be markerD',markerD)
                                  let mapDisplay = document.getElementById('map')
                                      mapDisplay.style.display = "block"
                                  
                                  document.getElementById('flavors').style.display ="none"
                                  document.getElementById('container').style.display ="none"
                                  let findNewPlace = document.createElement('button')
                        
                                  findNewPlace.innerHTML= `<div style="display:flex;flex-direction:row;gap:1rem;justify-content:space-between;">
                                                              <div>
                                                                <i class="fa fa-refresh" aria-hidden="true"></i>
                                                              </div>
                                                              <div>${categoryName}</div> 
                                                             <div>`
                                   
                                  findNewPlace.setAttribute('class','renewsearch')
                                  
                                  userInterface.append(findNewPlace)

                                  findNewPlace.addEventListener('click',()=>{
                                     findNewPlace.style.display = 'none'
                                     directionsRenderer.setMap(null);
                                     directionsRenderer = null;
                                     markerD.setMap(null);
                                     markerD = null;
                                     getlocation(data,latitude,longitude,categoryName)
                                  })
                                 
                                  
                                  let directionsService = new google.maps.DirectionsService();
                                  
                                  let directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
                                 

                                   
                                  directionsRenderer.setOptions({
                                    polylineOptions:{
                                        strokeColor: 'pink',
                                        strokeWeight: 10,
                                    }
                                 })    
      
                                 let bIdx = Math.floor(Math.random() * data.businesses.length);
                                 let business = data.businesses[bIdx]
                                
                                 const destination = {
                                    lat: data.businesses[bIdx].coordinates.latitude,
                                    lng: data.businesses[bIdx].coordinates.longitude,
                                  };
                              
                                 
                                 let markerD = new google.maps.Marker({
                                    position:destination,
                                    map,
                                    title:'click for more detail',
                                    icon:{
                                        url:locationIcon,
                                        scaledSize:new google.maps.Size(80,80),
                                        fillOpacity: 0.6,
                                    } ,
                                    optimized: false,
                                             })
                             
                                    markerD.addListener('mouseover',function(){
                                          infoWindow.open(map,this);
                                    })
                                    
                                    markerD.addListener('mouseout',function(){
                                       infoWindow.close();
                                    })
                           
                               findGeo(map,infoWindow,directionsService,directionsRenderer,business,latitude,longitude,destination,markerD) 

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

