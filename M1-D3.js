/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

var object = [
name = "Maksymilian",
surname = "Zuzel",
age = [22]
];
console.log(object);
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */

var object = [
name = "Maksymilian",
surname = "Zuzel",
age = [22],
driving_license = true,
];
console.log(object);

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */


/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */

var totalShoppingCart = 60;
var shipping = 10; 
function shoppingCost () {
if (totalShoppingCart >= 50)
var shipping = 0;
}
console.log(shipping);


Console showing 10 anyway, why?

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

var totalShoppingCart = 60/0.2;
var shipping = 10; 

function shoppingCost () {
if (totalShoppingCart >= 50)
var shipping = 0;
}

console.log(totalShoppingCart);

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */

var car = [
	brand = "BMW",
	model = "5",
	licensePlate = "BCW" + rand,
	]
	
var car2 = car;
var car3 = car;
var car4 = car;
var car5 = car;

var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// Logs something like 37
var rand = randomNumber(100, 999);

console.log(car,car2,car3,car4,car5);


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */


var carsForRent = [
car,
car,
car3,
car4,
car5,
]

var car = [
	brand = "BMW",
	model = "5",
	licensePlate = "BCW" + rand,
	]
	
var car2 = car;
var car3 = car;
var car4 = car;
var car5 = car;

var rand = randomNumber(100, 999);

var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

var carsForRent = [
car,
car,
car3,
car4,
car5,
]

var car = [
	brand = "BMW",
	model = "5",
	licensePlate = "BCW" + rand,
	]
	
var car2 = car;
var car3 = car;
var car4 = car;
var car5 = car;

carsForRent.delete(car,car5),

var rand = randomNumber(100, 999);

var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(carsForRent);


/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */

console.log(carsForRent);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

var totalCars = [
number = carsForSale.length + carsForRent.length
]

var carsForSale = [
car,
car2,
car3,
]

var carsForRent = [
car,
car,
car3,
car4,
car5,
]

var car = [
	brand = "BMW",
	model = "5",
	licensePlate = "BCW" + rand,
	]
	
var car2 = car;
var car3 = car;
var car4 = car;
var car5 = car;

var rand = randomNumber(100, 999);

var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(totalCars);


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

console.log(carsForSale);

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
