('use strict');
for(var i = 0; i < restArr; i++) {
    console.log(restArr[i]);
}

var restArr = []; //Array for storing new objects
var restPastSearches = []; //Array for storing past searches
var searchWord = document.getElementById('restaurant-filter');

var restaurantInfoDisplayAside = document.getElementById('restaurant-info'); //Creates html element on which info will be displayed
var restaurantUnList = document.getElementById('restaurant-list');
v//ar restaurantListItem = document.getElementById('restaurant-list-item');

//Constructor function for object properties
var CreateRestaurant = function(restName, restAddress, restHours, foodType, keywords, phone, restCodeability, restLink, src) {
  this.restName = restName;
  this.restAddress = restAddress;
  this.restHours = restHours;
  this.foodType = foodType;
  this.keywords = keywords;
  this.phone = phone;
  this.restCodeability = restCodeability;
  this.restLink = restLink;
  this.src = src; //For images
  restArr.push(this); //All new objects will go into array so we can loop through info
}

//Protype for restaurant info/list and images
// CreateRestaurant.prototype.renderRestIconsOnMap = function() { //Use our own icon images and post them on map coordinates

// };

var restaurantSearchHandler = function() {
//Loop thru restArr to see if search name === restName || search food type === foodType || search location === restAddress
console.log(restArr[0].restName);
  for(var i = 0; i < restArr; i++) {
    //Checks restArr to see if target matches and array item
    if(event.target.value === restArr[i].restName || event.target.value === restArr[i].restAddress || event.target.value === restArr[i].foodType || event.target.value === restArr[i].keywords[i]) {
        var restaurantName = document.createElement('h2');
        restaurantName.textContent = "Sarkis";
        restaurantListItem.textContent = this.restName + '\n' + this.restAddress + '\n' + this.restHours + '\n' + this.phone + '\n' + this.foodType + '\n' + this.restLink;
        console.log(restaurantListItem.textContent);
        
        restaurantUnList.appendChild(restaurantName);
        localStorage.setItem('pastHistory', JSON.stringify(restArr)); //goes thru array with all data and stores it in local
        console.log(restArr[i])
        console.log(restArr);
        }
    }
    restaurantInfoDisplayAside.appendChild(restaurantUnList);
}

// console.log(searchWord);
// searchWord.addEventListener('change', restaurantSearchHandler());

document.getElementById("restaurant-filter").addEventListener("click",restaurantSearchHandler);

  //Function for clearing localStorage will be linked to button and have removeItem() and alert
  var clearFunction = function() {

  };

//Twenty restaurants will inherit object properties and method
//Restaurant 1//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('MOD Pizza', '305 W Harrison St #221, Seattle, WA 98109 305 W Harrison St #221, Seattle, WA 98109 (Seattle Center)', 'Sunday - Thursday 10:30am - 8pm, Friday-Saturday 10:30am -9pm', 'Fast, Italian', ['pizza', 'salad', 'italian', 'breadsticks', 'beer', 'milkshake'], '(206)428-6315', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'https://modpizza.com/locations/seattle-center/', 'IMG/modPizza.jpg');

//Restaurant 2//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Blue Water Taco Grill', '515 Queen Anne Ave N, Seattle, WA 98119', 'Sunday - Saturday 11am - 9pm', 'sit-down, Mexican', ['Mexican','burrito', 'tacos', 'enchiladas', 'beer', 'liquor'], '(206)352-2407', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'http://www.bluewatertacogrill.com/', 'IMG/blueWaterTacoGrill.jpg');

//Restaurant 3//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Caffe Ladro', '600 Queen Anne Ave N, Seattle, WA 98109', 'Sunday-Saturday 5:30am - 8pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins'], 'none', ['- Wifi yes', '-Price $', '- Distance .8 miles'], 'https://caffeladro.com/', 'IMG/cafeLadro.jeg');

//Restaurant 4//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant(' Uptown Espresso Belltown','2504 4th Ave, Seattle, WA 98121', 'Sunday 6am - 10pm, Monday-Thursday 5am - 10pm, Friday 5pm - 11pm, Saturday 6am - 11pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins'], '(206)441-1084', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'https://velvetfoam.com/', 'IMG/uptownEspresso.jpg');

//Restaurant 5//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Bedlam Coffee', '2231 2nd Ave, Seattle, WA 98121', 'Sunday 7am - 9pm, Monday- Thursday 6am - 9pm, Friday 6am - 10pm, Saturday 7am - 10pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins'], '(202)547-0369', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'http://www.bedlamcoffee.com/', 'IMG/bedlamCoffee.jpg');

//Restaurant 6//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Cafe Solstice', '925 E Thomas St, Seattle, WA 98102', 'Sunday 6:30am - 11pm, Monday - Friday 6am - 11pm', 'Cafe, sit-down, fast', ['coffee', 'pastries', 'tea', 'cookies', 'muffins', 'sandwiches', 'beer', 'soup'], '(206)403-1916', ['- Wifi yes', '-Price $', '- Distance 1.7 miles'], 'https://www.cafesolsticeseattle.com/', 'IMG/cafeSolstice.jpg');

//Restaurant 7//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Bambinos Pizzeria', '401 Cedar St, Seattle, WA 98121', 'Sunday - Saturday 11:30am - 11pm', 'sit-down, Italian', ['salad', 'appetizers', 'pizza', 'pasta', 'calzone', 'dessert'], '(206)269-2222', ['- Wifi no', '-Price $$', '- Distance .3 miles'], 'https://bambinsppizzeria-online-ordering.securebrygid.com/zgrid/themes/10535/intro/index.jsp ', 'IMG/bambinosPizzeria.jpg');

//Restaurant 8//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Shiro’s Sushi', '2401 2nd Ave, Seattle, WA 98121', 'Sunday - Saturday 5:30pm - 10:30pm', 'sit-down, sushi, soup, tea, wine, ice cream', ['sushi'], '(206)443-9844', ['- Wifi no', '-Price $$', '- Distance .3 miles'], ' http://shiros.com/', 'IMG/shirosSushi.jpg');

//Restaurant 9//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant(' No Anchor', '2505 2nd Ave #105, Seattle, WA 98121', 'Sunday 11am - 11pm, Monday- Thursday 12pm - 11pm, Friday 12pm -12am, Saturday 11am - 11pm', 'bar, sit-down', ['beer', 'liquor', 'wine', 'appetizers', 'American'], '(206)448-2610', ['- Wifi no', '-Price $$', '- Distance .3 miles'], ' https://www.noanchorbar.com/ ', 'IMG/noAnchor.jpg');

//Restaurant 10//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Thai On One', '2904 1st Ave, Seattle, WA 98121', 'Sunday 12pm - 9:30pm, Monday - Friday 11am - 9:30pm, Saturday 12pm - 9:30pm', 'Thai, sit-down', ['thai', 'appetizers', 'noodles', 'soup'], '(206)441-4348', ['- Wifi no', '-Price $', '- Distance .1 miles'], ' https://www.thaion1.com/', 'IMG/thaiOnOne.jeg');

//Restaurant 11//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Rocco’s', '2228 2nd Ave, Seattle, WA 98121', 'Sunday - Saturday 11am - 2am', 'sit-down, Italian', ['pizza', 'beer', 'liquor', 'appetizers', 'salad', 'dessert'], '(206)448-2625', ['- Wifi no', '-Price $$', '- Distance .4 miles'], ' https://www.roccosseattle.com/', 'IMG/roccos.jpeg');

//Restaurant 12//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Taqueria Cantina', '2630 1st Ave, Seattle, WA 98121', 'Sunday 10am - 11pm, Monday- Thursday 11am - 11pm, Friday 11am - 12 am, Saturday 10am - 12am', 'sit-down, Mexican', ['Mexican', 'burrito', 'tacos', 'enchiladas', 'beer', 'liquor'], '(206)995-8588', ['- Wifi no', '-Price $$', '- Distance .2'], 'taqueriacantina.com', 'IMG/taqueriaCantina.jpg');

//Restaurant 13//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Plaza Garibaldi', '129 1st Ave N, Seattle, WA 98109', 'Sunday - Thursday 11am - 10pm, Friday-Saturday 11am - 2am', 'sit-down, Mexican', ['Mexican', 'burrito', 'tacos', 'enchiladas', 'beer', 'liquor'], '(206)397-4088', ['- Wifi no', '-Price $$', '- Distance .2 miles'], 'pgaribaldi.com', 'IMG/plazaGaribaldi.jpg');

//Restaurant 14//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Mantra Thai Restaurant & Bar', '2720 4th Ave #116, Seattle, WA 98121', 'Sunday 11am - pm, Monday - Saturday 11am - 9:30 pm', 'sit-down, Thai', ['thai', 'appetizers', 'noodles', 'soup', 'tea', 'dessert', 'rice'], '(206)659-0466', ['- Wifi no', '-Price $', '- Distance .2 miles'], 'http://mantrathai.com/', 'IMG/mantraThaiRestaurant.jpg');

//Restaurant 15//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('The 5 point Cafe', '415 Cedar St, Seattle, WA 98119', 'Sunday-Saturday 12am - 12am', 'cafe, American, sit-down', ['breakfast', 'liquor', 'beer', 'soup', 'salad', 'sandwich', 'burgers'], '(206)448-9991', ['- Wifi no', '-Price $', '- Distance'], ' http://the5pointcafe.com/', 'IMG/fivePointCafe.jpg');

//Restaurant 16//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Zeeks Pizza', '419 Denny Way, Seattle, WA 98109', 'Sunday - Saturday 11am - 10pm', 'Fast, Italian', ['pizza', 'salad', 'Italian', 'breadsticks', 'beer'], '(206)285-8646', ['- Wifi no', '-Price $$', '- Distance .2 miles'], 'http://zeekspizza.com/locations-hours/zeeks-pizza-denny-belltown/', 'IMG/zeeksPizza.jpg');

//Restaurant 17//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Green Leaf Vietnamese Restaurant', '2800 1st Ave, Seattle, WA 98121', 'Sunday - Wednesday 11am -12am, Thursday -Saturday 11am - 2am', 'sit-down, Vietnamese', ['rice', 'dessert', 'salad', 'soup'], '(206)448-3318', ['- Wifi no', '-Price $$', '- Distance .1 miles'], 'http://greenleaftaste.com/#!/home/', 'IMG/greenLeafVietnamese.jpg' );

//Restaurant 18//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Eastern Cafe', '510 Maynard Ave S, Seattle, WA 98104', 'Sunday 9am - 8pm, Monday - Friday 7:30am - 10pm, Saturday 9am - 10pm', 'cafe, sit-down', ['sandwich', 'breakfast', 'wine', 'beer', 'dessert', 'salad', 'pastries', 'tea', 'coffee'], '(206)623-1776', ['- Wifi yes', '-Price $', '- Distance 1.9 miles'], 'https://www.facebook.com/EasternCafe', 'IMG/easternCafe.jpg');

//Restaurant 19//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Tilikum Place Cafe', '407 Cedar St, Seattle, WA 98121', 'Sunday 8am - 3pm & 5pm - 10 pm, Monday - Friday 11am - 3pm & 5pm - 10pm, Saturday 8am - 3pm & 5pm - 10pm', 'cafe, sit-down, American', ['breakfast', 'dessert', 'soup', 'appetizers'], '(206)282-4830', ['- Wifi no', '-Price $$', '- Distance .2 miles'], ' http://www.tilikumplacecafe.com/', 'IMG/tilikumCafe.jpg' );

//Restaurant 20//new CreateRestaurant(NAME, ADDRESS, HOURS, TYPE, KEYWORDS, PHONE, CODEABILITY, WEBSITE)
new CreateRestaurant('Sugar Bakery & Coffeehouse', '110 Republican St, Seattle, WA 98109', 'Sunday 7am - 10pm, Monday-Friday 6:30am - 10pm, Saturday 7am - 10pm', 'cafe, sit-down, American', ['sandwich', 'breakfast', 'dessert', 'salad', 'pastries', 'tea', 'coffee'], '(206)695-2518', ['- Wifi yes', '-Price $', '- Distance .4 miles'], ' sugarbakerycafe.com', 'IMG/sugarBakery.jpg');



//console.log(input);
// var restaurantName = document.createElement('h2');
// restaurantName.textContent = 'Restaurant Name';
// document.body.appendChild(restaurantName);

// var restaurantCuisine = document.createElement('p');
// restaurantCuisine.textContent = 'Restaurant Cuisine';
// document.body.appendChild(restaurantCuisine);

// var restaurantDescription = document.createElement('p');
// restaurantDescription.textContent = 'Restaurant Description';
// document.body.appendChild(restaurantDescription);

// var restaurantType = document.createElement('p');
// restaurantType.textContent = 'Restaurant Type';
// document.body.appendChild(restaurantType);

// var restaurantAddress = document.createElement('p');
// restaurantAddress.textContent = 'Restaurant Address';
// document.body.appendChild(restaurantAddress);

// var restaurantDistance = document.createElement('p');
// restaurantDistance.textContent = 'Restaurant Distance';
// document.body.appendChild(restaurantDistance);

// var restaurantHours = document.createElement('p');
// restaurantHours.textContent = 'Restaurant Hours';
// document.body.appendChild(restaurantHours);

// var restaurantPhone = document.createElement('p');
// restaurantPhone.textContent = 'Restaurant Phone';
// document.body.appendChild(restaurantPhone);

// var restaurantWebsite = document.createElement('p');
// restaurantWebsite.textContent = 'Restaurant Website';
// document.body.appendChild(restaurantWebsite);

// var restaurantCodability = document.createElement('p');
// restaurantCodability.textContent = 'Restaurant Codability';
// document.body.appendChild(restaurantCodability);

// var restaurantMenu = document.createElement('p');
// restaurantMenu.textContent = 'Restaurant Menu';
// document.body.appendChild(restaurantMenu);
 