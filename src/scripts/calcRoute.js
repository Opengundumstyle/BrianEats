
// // function calcRoute(position,destination,directionsService,directionsRenderer){

// //     // var selectedMode = document.getElementById('mode').value;
// //     var request = {
// //         origin: position,
// //         destination: destination,
// //         travelMode: google.maps.TravelMode.WALKING
// //     };
    
// //     directionsService.route(request, function(response, status) {
// //       if (status == 'OK') {
// //           directionsRenderer.setDirections(response);
// //         }
// //     });
    
// // }

// // new animated route

// function calcRoute(position,destination,directionsService,map,routePath){
//     // var selectedMode = document.getElementById('mode').value;
//     // var request = {
//     //     origin: position,
//     //     destination: destination,
//     //     travelMode: google.maps.TravelMode.WALKING
//     // };
    
//     // directionsService.route(request, function(response, status) {
//     //   if (status == 'OK') {
//     //         // routePath.path = response.routes[0].overview_path;
//     //         // console.log('what is response',response)
//     //         // console.log('what is routepath',routePath)
//     //         // let lineSymbol = {
//     //         //     path: google.maps.SymbolPath.CIRCLE,
//     //         //     fillOpacity:1,
//     //         //     scale:3
//     //         //    }

//     //         // routePath = new google.maps.Polyline({
//     //         //        path:response.routes[0].overview_path,
//     //         //        strokeColor: 'pink',
//     //         //        icons: [{
//     //         //            icon: lineSymbol,
//     //         //            offset: '0',
//     //         //            repeat: '10px'
//     //         //          }],
//     //         //   })

//     //     }
//     // });
//     animateLine(routePath);
//     routePath.setMap(map);
// }


// function animateLine(line){
//    let count = 0;
//    let markSpeed;
//    let zoomLevel;
//    let multiPointer = 10;
   
//    window.setInterval(function(){

//      count = (count + 1) % 200;
//      let icons = line.get('icons');
//      icons[0].offset = (count/markSpeed) + '%';
//      line.set('icons',icons);
     
//      let getZoom0 = line.get('map');
//      let getZoom1 = getZoom0.getZoom();
     
//      zoomLevel = getZoom1;
     
//      if(zoomLevel >= 21){
//         markSpeed = multiPointer * zoomLevel / 0.2;
//      }else if(zoomLevel >=19){
//         markSpeed = multiPointer * zoomLevel / 0.5;
//      }else if(zoomLevel >=16){
//         markSpeed = multiPointer * zoomLevel / 2;
//      }else{
//        markSpeed = multiPointer * zoomLevel/ 20;
//      }
//    },100);

// }


// export default calcRoute;