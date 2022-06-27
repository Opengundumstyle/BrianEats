

// import {showSpinner} from "./loading.js"

const BusinessLocation = {


 getSweet :async function(){

  //  showSpinner()
  const response = await apiRequest('desserts, All')
    
  return response
 },

getSpicy:async function(){
       
  const response = await apiRequest('herbsandspices, All')

  return response
},

getFresh: async function(){
  const response = await apiRequest('seafoodmarkets, All')
    
  return response
},   


getBoba:async function(){
    const response = await apiRequest('bubbletea, [CA]')

    return response
},
   

getHealthy: async function(){
  const response = await apiRequest('acaibowls')

  return response
},

getExpensive:async function(){
  const response = await apiRequest('Food Trucks')

  return response
 },



}

  



// connect between frontend and backend server
const apiRequest = (query) => {

   return fetch(`/api?searchTerm=${encodeURIComponent(query)}`)
      .then(res => {
           return res.json()
              }
           )
  }
     

// window.corsRequest = corsRequest
window.apiRequest = apiRequest



module.exports = BusinessLocation;

 