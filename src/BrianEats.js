
import findGeo from './scripts/geolocation.js'
const BusinessLocation = require('./scripts/fetch.js');

let map,infoWindow;

document.addEventListener("DOMContentLoaded", () => {

// hide map 
    document.getElementById("map").style.display = "none"

// generate questions
let userInterface = document.querySelector(".Interface")
// let question = document.createElement("div")
// let hidden = document.createElement("div")

//     hidden.setAttribute("class","hide")
//     question.setAttribute('class','question')

//     let infotag = document.createElement('p')
//     let innerText = document.createTextNode('just click a food category and we will do the work for you')

//       infotag.appendChild(innerText)
//       hidden.appendChild(infotag)
//       userInterface.appendChild(hidden)
   
  
//    let tag =  document.createElement('p')
//    let text = document.createTextNode("What do you feel like eating today?") 

//       tag.appendChild(text)
//       question.appendChild(tag)
//       userInterface.appendChild(question)

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
                                   
                                 console.log(data)

                                 findGeo(map,infoWindow,directionsService,directionsRenderer,data)

                                 
                         }  
             }
     })
})


function initMap(){ 

  infoWindow = new google.maps.InfoWindow();
   map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:37.799034800120424 ,lng: -122.40128762913366}, zoom:16
      }
  );
}

window.initMap = initMap;

