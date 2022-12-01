# BrianEats
This project is taken from the inspiration of yelp recommendation system where a api is being used to satisfied foodies's
needs on where and what they want to eat. But with a minor twist. Instead of giving you the headache of where and what to eat, BrianEats handles all that with a single click, we find the designated place with our advance cutting-edge  algorithmn base on your current mood and tendency on food flavor. Are you ready to join us on this amazing food quest? 

check out <a href="https://brianeats.herokuapp.com/" target="_blank"> LiveSite </a>


<h2>Functionality & MVPs</h2>

- clean and dynamic user interface with brief & easy to read instructions on modal
![](https://github.com/Opengundumstyle/aa_javascript_project/blob/main/src/homepage.gif)
- provide sets of flavor options for users to choose from
- fetch restaurant data according to user's current location and pereferences in one food category  

```
 case 'boba':
    navigator.geolocation.getCurrentPosition(position => {
       let latitude,longitude;
       latitude = position.coords.latitude;  
       longitude = position.coords.longitude;
       BusinessLocation.getBoba(latitude,longitude)
       .then((data)=>getlocation(data,latitude,longitude,event.target.id))
 })
    break;
```
```
  getBoba:async function(lat,lng){
    const response = await apiRequest(`bubbletea, [CA]&${lat}&${lng}`)

    return response
},
```
```json
 const url = `${urlStart}/businesses/search?categories=${searchTerm1}&latitude=${searchTerm2}&longitude=${searchTerm3}
              &radius=10000&limit=20`;
    
 fetch(url,{
        headers: { 
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': "Bearer " + apiKey,
                    'Content-Type': 'application/json'
                },
                method:'GET',
                credentials:"include",
    }) 
```
  
- trace and draw out the closest (walking)distance from user to restaurant
  <img src="https://github.com/Opengundumstyle/aa_javascript_project/blob/main/src/BrianEatSnapShot.png" width="650px">

<h2>Technologies, Libraries, APIs</h2>

- npm
- webpack
- express.js
- google map api
- yelp fusion api

<h2> Wireframes:</h2>

 <img src="https://github.com/Opengundumstyle/aa_javascript_project/blob/main/user-interface.png" width="650px">
<h2>Implementation Timeline</h2>
<h3>Day1:</h3>
research related APIs required for mvps, set up projects
<h3>Day2:</h3>
Display static google map on local host. Create utilities like marker class and geolocator..etc  to identiy current user.
<h3>Day3 - Day4:</h3>
Architect homepage and create eventlisteners for categories component to control route rendering between two points with google geolocation service
<h3>Day5:</h3>
Implement data fetching functionalities utilizing yelp fusion api. Transfer json response to render restaurants information combining with google map infoWindow
<h3>Day6:</h3>
Deploy Heroku pages, double check to ensure correct references and links on Heroku pages.
<h2>Bonus</h2>

- change routes
- expand the category from restaurants to anyplaces,for instance(clothes stores,bars,clubs,dispensaries etc.)
