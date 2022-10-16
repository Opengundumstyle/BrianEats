
import calcRoute from './calcRoute.js'

function findGeo(map,infoWindow,directionsService,directionsRenderer,business,latitude,longitude,destination,markerD){
        
     
    
      directionsRenderer.setMap(map); // object that set route when fullfilled request

        let pos = {lat:latitude,lng:longitude}
        let closetime = business.is_closed?'<div style="color:red;justify-content:flex-start;display:flex">Closed</>':'<div style="color:green; justify-content: flex-start;display:flex">Open</div>';
        let markerPos = {
              lat:destination.lat + 0.0002,
              lng:destination.lng,
        }
        
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
        
          // infoWindow.setPosition(destination);
          infoWindow.setPosition(markerPos);

          infoWindow.setContent(` 
                                   <div><img src='${business.image_url}' width='280px' height='80px' style="object-fit:cover"></div >
                                   <div style="font-weight:bolder; font-size:15px;justify-content:flex-start;display:flex">${business.name}</div>
                                
                                      <div class='info-rating-count'>
                                          <div>${business.rating}</div>
                                            ${getStars(business.rating)}
                                          <div>(${business.review_count})</div>
                                      </div>
                                      <div class='categories-price-info'>
                                          <div >${business.categories[0].title}</div>
                                          <div >${business.price}</div>
                                      </div>
                                 ${closetime}
                                `
                                )
               let mylocation = 'https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/mylocation.gif'
         
                  new google.maps.Marker({
                          position:{lat:latitude,lng:longitude},
                          map,
                          title:"you're here",
                          icon:{
                            url:mylocation,
                            scaledSize:new google.maps.Size(80,80),
                            fillOpacity: 0.6,
                        } ,
                        optimized: false,
                    })
            
        
            infoWindow.open({
                anchor: markerD,
                map,
               });
           
            let mapdiv = document.getElementById("map");
            let businessInfo = document.createElement('div');
             businessInfo.setAttribute('class','info-div');
            let img = document.createElement('img');
            img.src= business.image_url;
            businessInfo.appendChild(img);
            mapdiv.append(businessInfo);
            map.setCenter(destination);
            calcRoute(pos,destination,directionsService,directionsRenderer);

          }

export default findGeo;