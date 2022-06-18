
import func from './scripts/geolocation.js'

// import {func} from './scripts/another.js'

// render map

let map,infoWindow;

function initMap(){ 

   map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:37.799034800120424 ,lng: -122.40128762913366}, zoom:8
      }
  );
    infoWindow = new google.maps.infoWindow

   const marker = new google.maps.Marker({
    position: {lat:37.799034800120424 ,lng: -122.40128762913366},
    map:map,
    icon:"https://img.icons8.com/nolan/1x/marker.png"
  })

//create button 
const locationButton = document.createElement("button")

locationButton.textContent = "Pan to Current Location"
locationButton.classList.add("custom-map-control-button")
map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton)
locationButton.addEventListener("click", () =>{
        if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition(
                      (position) =>{
                            
                      }  
              )
        }
        
})

//add marker

    function addMarker(location){
        const marker = new google.maps.Marker({
        position: location,
        map:map,
        icon:"https://img.icons8.com/nolan/1x/marker.png"
        })
     }

      addMarker({lat:38, lng:-122})
      addMarker({lat:37.799034800120424, lng: -121.40128762913366})

}

window.initMap = initMap;

