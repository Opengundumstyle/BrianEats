
import calcRoute from './calcRoute.js'

function findGeo(map,infoWindow,directionsService,directionsRenderer,data,latitude,longitude){
        
      directionsRenderer.setMap(map); // object that set route when fullfilled request
    
        let bIdx = Math.floor(Math.random() * 20);
        let pos = {lat:latitude,lng:longitude}
        let closetime = data.businesses[bIdx].is_closed?'<div style="color:red;justify-content:flex-start;display:flex">Closed</>':'<div style="color:green; justify-content: flex-start;display:flex">Open</div>';

        const destination = {
            lat: data.businesses[bIdx].coordinates.latitude,
            lng: data.businesses[bIdx].coordinates.longitude,
          };

        
          function getStars(rating) {

              // Round to nearest half
              rating = Math.round(rating * 2) / 2;
              let output = [];

              // Append all the filled whole stars
              for (var i = rating; i >= 1; i--)
                output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

              // If there is a half a star, append it
              if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

              // Fill the empty stars
              for (let i = (5 - rating); i >= 1; i--)
                output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

              return output.join('');

            }
        
          infoWindow.setPosition(destination);
          infoWindow.setContent(`<div><img src='${data.businesses[bIdx].image_url}' width='150px' height='150px'></div >
                                 <div style="font-weight:bolder; font-size:15px;justify-content:flex-start;display:flex">${data.businesses[bIdx].name}</div>
                                 <div class='info-rating-count'>
                                    <div>${data.businesses[bIdx].rating}</div>
                                       ${getStars(data.businesses[bIdx].rating)}
                                    <div>(${data.businesses[bIdx].review_count})</div>
                                 </div>
                                 <div class='categories-price-info'>
                                    <div >${data.businesses[bIdx].categories[0].title}</div>
                                    <div >${data.businesses[bIdx].price}</div>
                                 </div>
                                 ${closetime}`
                                )
               
                                
          new google.maps.Marker({
                position:{lat:latitude,lng:longitude},
                map,
                title:"you're here",
          })

          let markerD = new google.maps.Marker({
                position:destination,
                map,
                title:'Is this the place you looking for?',
                         })
          
          markerD.addListener('mouseover',function(){
                 infoWindow.open(map,this);
          })
          
          markerD.addListener('mouseout',function(){
               infoWindow.close();
          })
          
                         
          infoWindow.open(map);
          let mapdiv = document.getElementById("map")
          let businessInfo = document.createElement('div')
            businessInfo.setAttribute('class','info-div')
            let img = document.createElement('img')
            img.src= data.businesses[bIdx].image_url
            businessInfo.appendChild(img)
            mapdiv.append(businessInfo)

            map.setCenter(destination);
          calcRoute(pos,destination,directionsService,directionsRenderer);
          }

export default findGeo;