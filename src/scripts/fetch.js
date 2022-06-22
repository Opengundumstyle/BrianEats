

// async function getBusiness(){


// const response = await fetch('https://api.yelp.com/v3/businesses/search?location=SF',
// {
//     headers: new Headers({ 
//         'Access-Control-Allow-Origin':'*',
//         'Authorization': 'Bearer Suoh9_eJO4drWOSINZNWRsI_3QI1pVAbkj_MZeQ-cp3_6zLaQS7frgp7qaCjYrDpyd_VkSPHlERQXGerYE7JKbGAz-x_zRxlBB7W7owCEJiQcoQvZMLj06mn2YyxYnYx',
//         'Content-Type': 'application/json'
//     }),
//     method:'GET',
//     credentials:"include",
// });
//    console.log(response)
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json() 
//     // response.json() parses JSON response into native JavaScript objects
//     // response.json() is asynchronous
//     return data
// }

// getBusiness()
//     .then(data => {
//         // If the fetch was successful, here we can manipulate the data we received
//         console.log(data);
//     })
//     .catch(error => {
//         // If our fetch was unnsuccessful, here we can handle our error(s)
//         console.error('There has been a problem with your fetch operation: ', error);
//     }
// );






 