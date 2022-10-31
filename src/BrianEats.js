// import {hideSpinner} from "./scripts/loading.js"
// import calcRoute from './scripts/calcRoute.js';
import findGeo from './scripts/geolocation.js'

const BusinessLocation = require('./scripts/fetch.js').default;

let map,infoWindow;
let routePath;
document.addEventListener("DOMContentLoaded", () => {
// hide map 
   document.getElementById("map").style.display = "none"
  
// declare html element variables 
   let introInterface =  document.querySelector(".start-page")
   let userInterface = document.querySelector(".page2")
   let loadPage = document.querySelector(".loading-wrapper")
   let modal = document.getElementById("myModal");
   let close = document.getElementsByClassName("close")[0];
   let open = document.querySelector(".fa")
   
// generate options
   let pereferences = ["spicy","sweet","boba","fresh","healthy","expensive"]
   let flavors = document.createElement('div')
       flavors.setAttribute('id','flavors')
      userInterface.append(flavors)
      
   for(let pereference of pereferences){
         let flavor = document.createElement('button')
         flavor.innerText = pereference
         // flavor.setAttribute('class','flavor')
         flavor.setAttribute('id', pereference)
         flavor.classList.add('btn','btn--stripe')
         flavors.appendChild(flavor)
   }
    
   document.getElementById('start-button').addEventListener('click', event =>{
       if(event.target.id === 'start-button') 
          {
            userInterface.style.display = 'block'
            introInterface.style.display = 'none'
            }
   })

      open.onclick = function() {
         modal.style.display = "block";
      }

      close.onclick = function() {
            modal.style.display = "none";
         }

      window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
         }
      
// set trigger event which shows the direction 
     document.getElementById('flavors').addEventListener('click',event =>{
            if(event.target.classList.contains('btn')){
            userInterface.style.display = 'none'
            open.style.display ='none'
            loadPage.style.display="block"
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
                                      userInterface.style.display = 'block'
                                  loadPage.style.display="none"
                                  document.getElementById('flavors').style.display ="none"
                                  document.getElementById('container').style.display ="none"
                                 
                                  let findNewPlace = document.createElement('button')
                                  let homepage = document.createElement('button')
                                  
                                

                                  findNewPlace.innerHTML= `<div style="display:flex;flex-direction:row;gap:1rem;justify-content:space-between;">
                                                              <div>
                                                                <i class="fa fa-refresh" aria-hidden="true"></i>
                                                              </div>
                                                              <div>${categoryName}</div> 
                                                             <div>`
                                   
                                  findNewPlace.setAttribute('class','renewsearch')
                                  
                                  homepage.innerHTML = `<div>
                                                           home
                                                       </div>`
                                 
                                  homepage.setAttribute('class','homepage-button')
                                  
                                  userInterface.append(findNewPlace)

                                  userInterface.append(homepage)
                                 
                                  findNewPlace.addEventListener('click',()=>{
                                     findNewPlace.style.display = 'none'
                                     homepage.style.display ='none'
                                    //  directionsRenderer.setMap(null);
                                    //  directionsRenderer = null;
                                     routePath.setMap(null);
                                    //  routePath = null;
      
   
                                     markerD.setMap(null);
                                     markerD = null;
                                     getlocation(data,latitude,longitude,categoryName)
                                  })
                                 

                                  homepage.addEventListener('click',()=>{
                                    mapDisplay.style.display = "none"
                                    findNewPlace.style.display = 'none'
                                    homepage.style.display ='none'
                                    routePath.setMap(null);
                                    markerD.setMap(null);
                                    markerD = null;
                                    userInterface.style.display = "block"
                                    open.style.display ='block'
                                    document.getElementById('container').style.display ="block"
                                    let flavorsButton = document.getElementById('flavors');
                                    flavorsButton.style.display = 'block'
                                    
                                  })
                                  
                                  let directionsService = new google.maps.DirectionsService();
                                  let position= {
                                      lat:latitude,
                                      lng:longitude,
                                  }

                                 // let directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
                                 // let lineSymbol = {
                                 //    path: google.maps.SymbolPath.CIRCLE,
                                 //    fillOpacity:1,
                                 //    scale:3
                                 //   }
             
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

                                    var request = {
                                       origin: position,
                                       destination: destination,
                                       travelMode: google.maps.TravelMode.WALKING
                                     };
                                   

                                    directionsService.route(request, function(response, status) {
                                       if (status == 'OK') {

                                             let lineSymbol = {
                                                path: google.maps.SymbolPath.CIRCLE,
                                                fillOpacity:1,
                                                scale:3
                                             }
                           
                                           routePath = new google.maps.Polyline({
                                                path:response.routes[0].overview_path,
                                                geodesic: true,
                                                strokeColor: 'pink',
                                                icons: [{
                                                   icon: lineSymbol,
                                                   offset: '0',
                                                   repeat: '10px'
                                                }],
                                            })
                                          }
                                          routePath.setMap(map);
                                          animateLine(routePath);
                                 });
                              

                                  function animateLine(line){

                                    let count = 0;
                                    let markSpeed;
                                    let zoomLevel;
                                    let multiPointer = 10;
                                    
                                    window.setInterval(function(){
                                      
                                      count = (count + 1) % 200;
                                      let icons = line.get('icons');
                                      icons[0].offset = (count/markSpeed) + '%';
                                      line.set('icons',icons);

                                      console.log('what is line',line)
                                      let getZoom0 = line.get('map');
                                      console.log('what is getZoom0 here',getZoom0)
                                      let getZoom1 = getZoom0.getZoom();
                                      
                                      zoomLevel = getZoom1;
                                      
                                      if(zoomLevel >= 21){
                                         markSpeed = multiPointer * zoomLevel / 0.2;
                                      }else if(zoomLevel >=19){
                                         markSpeed = multiPointer * zoomLevel / 0.5;
                                      }else if(zoomLevel >=16){
                                         markSpeed = multiPointer * zoomLevel / 2;
                                      }else{
                                        markSpeed = multiPointer * zoomLevel/ 20;
                                      }
                                    },100);
                                    
                                 }
                              
                               findGeo(map,infoWindow,business,latitude,longitude,destination,markerD,routePath) 
                              //  calcRoute(position,destination,directionsService,map,routePath)

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

