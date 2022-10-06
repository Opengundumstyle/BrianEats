

// import {showSpinner} from "./loading.js"

const BusinessLocation = {


 getSweet :async function(){

  //  showSpinner()
  const response = await apiRequest('desserts, All')
    
  return response
 },

getSpicy:async function(lat,lng){
       
  // const response = await apiRequest(['herbsandspices, All',lat,lng])
  const response = await apiRequest(`herbsandspices, All&${lat}&${lng}`)
  
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
const apiRequest = async (query) => {
  //  console.log('what query in apiRequest',query[0])
  //  console.log('what lat lng in apiRequest',query[1])
  //  const res = await fetch(`/api?searchTerm=${encodeURIComponent(query[0])}`)
   console.log('what is query at fetch',query)
   const res = await fetch(`/api?searchTerm=${encodeURIComponent(query)}`)
   return await res.json()
  }


// window.corsRequest = corsRequest
window.apiRequest = apiRequest



export default BusinessLocation;

 