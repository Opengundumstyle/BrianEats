
import findGeo from './scripts/geolocation.js'

let map,infoWindow;

document.addEventListener("DOMContentLoaded", () => {

// hide map 
    document.getElementById("map").style.display = "none"

// generate questions
let userInterface = document.querySelector(".Interface")
let tag =  document.createElement('p')
let text = document.createTextNode("What do you feel like eating today?") 
  tag.appendChild(text)
  userInterface.appendChild(tag)

// generate options
   let pereferences = ["spicy","sweet","hot","cold","healthy","greasy"]
   let flavors = document.createElement('div')
      flavors.setAttribute('id','flavors')
      userInterface.append(flavors)
   for(let pereference of pereferences){
         let flavor = document.createElement('button')
         flavor.innerText = pereference
         flavor.setAttribute('class','flavor')
         flavors.appendChild(flavor)
   }

// set trigger event which shows the direction 
     document.getElementById('flavors').addEventListener('click',event =>{
             if(event.target.classList.contains('flavor')){
                    
                      let mapDisplay = document.getElementById('map')
                    
                           mapDisplay.style.display = "block"

                      let directionsService = new google.maps.DirectionsService();
                      let directionsRenderer = new google.maps.DirectionsRenderer();
                      
                      findGeo(map,infoWindow,directionsService,directionsRenderer)


                      /********************************************************/

                   
                      
          


             }
     })
})




const fetchRestaurants = 'https://api.yelp.com/v3/businesses/search?location=SF'
                      
const corsRequest = (url = fetchRestaurants) => {
  fetch(`/cors?url=${encodeURIComponent(url)}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}

const apiRequest = (query = 'SF') => {
  fetch(`/api?searchTerm=${encodeURIComponent(query)}`)
    .then(res => {console.log(res.json())})
    .then(data => {
      console.log(data);
    })
}


window.corsRequest = corsRequest
window.apiRequest = apiRequest

// render map

function initMap(){ 

  infoWindow = new google.maps.InfoWindow();
   map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:37.799034800120424 ,lng: -122.40128762913366}, zoom:8
      }
  );
}

window.initMap = initMap;

