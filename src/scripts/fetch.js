

// import {showSpinner} from "./loading.js"

const BusinessLocation = {


 getSweet :async function(lat,lng){

  //  showSpinner()
  const response = await apiRequest(`desserts, All&${lat}&${lng}`)
    
  return response
 },

getSpicy:async function(lat,lng){
       
  // const response = await apiRequest(['herbsandspices, All',lat,lng])
  const response = await apiRequest(`szechuan, All&${lat}&${lng}`)
  
  return response
},

getFresh: async function(lat,lng){
  const response = await apiRequest(`seafoodmarkets, All&${lat}&${lng}`)
    
  return response
},   


getBoba:async function(lat,lng){
    const response = await apiRequest(`bubbletea, [CA]&${lat}&${lng}`)

    return response
},
   

getHealthy: async function(lat,lng){
  const response = await apiRequest(`acaibowls&${lat}&${lng}`)

  return response
},

getExpensive:async function(lat,lng){
  const response = await apiRequest(`restaurants&${lat}&${lng}`)
  
  return response
 },
}


// connect between frontend and backend server
const apiRequest = async (query) => {
  
   console.log('what is query at fetch',query)
   const res = await fetch(`/api?searchTerm=${encodeURIComponent(query)}`)
   return await res.json()
  }


// window.corsRequest = corsRequest
window.apiRequest = apiRequest



export default BusinessLocation;

 