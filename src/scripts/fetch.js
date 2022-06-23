
const BusinessLocation = {

 getSweet :async function(){
  const response = await apiRequest('desserts, All')
  console.log(response)
  return response
 },

getSpicy:async function(){
       
  const response = await apiRequest('herbsandspices, All')
  console.log(response)
  return response
},

getFresh: async function(){
  const response = await apiRequest('seafoodmarkets, All')
  console.log(response)
  return response
},   


getBoba:async function(){
    const response = await apiRequest('bubbletea, [CA]')
    console.log(response)
    return response
},
   

getHealthy: async function(){
  const response = await apiRequest('acaibowls')
  console.log(response)
  return response
},

getExpensive:async function(){
  const response = await apiRequest('Food Trucks')
  console.log(response)
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

 