
const str= "ztm is the best of the best"

let string= str.replaceAll("best", "worst");

console.log(string)













//a new type aded to javascript is bigint.


// let will_pokemon= {
// 	pikachu: {
// 		species: "Mouse Pokemon",
// 		height:0.4,
// 		weight: 6
// 	}
// }

// let andrei_pokemon= {
// 	pikachu: {
// 		species: "Mouse Pokemon",
// 		height:0.8,
// 		weight: 30,
// 		power: 'lighni'
// 	}
// }
//  let weight3= andrei_pokemon?.pikachu?.weight//optionla chaining operator ?.

// let power= andrei_pokemon?.pikachu?.power ?? 'no power'

// console.log(power)




// const basket=['apples', 'oranges', 'grapes'];
// const detailedBasket = {
// 	apples:5,
// 	oranges:10,
// 	grapes:1000
// }


// for(item of basket) {
// 	console.log(item);
// }

// //with for in you can see an object's properties 
// for(item in detailedBasket) {
// 	console.log(item)
// }






// userProfile=[['commanderTom', 23], ['derekZlander',40], ['hansel', 18]];
// let an=Object.fromEntries(userProfile);

// console.log(an);

//object.entries is the opposite of object.fromEntries






// const array = [1, 2, [3,[4,5]]];
// let me=array.flat(2);
// console.log(me)

// const divine= array.flatMap(value=> value+ 2);

// console.log(divine)

// userEmail = '           eddytheeagle@gmail.com';
// userEmail2= 'jonnydangeroud@gmail.com       ';
// console.log(userEmail.trimStart())
// console.log(userEmail2.trimEnd())






















// var css= document.querySelector("h3");
// var color1= document.querySelector(".color1");
// var color2= document.querySelector(".color2");
// var body= document.getElementById("gradient")

// function setGradient() {
// 	body.style.background ="linear-gradient(to right,"
// + color1.value 
// +","
// +color2.value
// +")";
// css.textContent= body.style.background + ";";
// }
// color1.addEventListener("input", setGradient)

// color2.addEventListener("input", setGradient)





















// var database = [
// {
// 	username: "andrei",
// 	password: "supersecret",
// },
// {
// 	username: "sally",
// 	password: "123",
// },
// {
// 	username: "ingrid",
// 	password: "777",
// }

// ];

// var newsFeed= [
// {
// 	username: "Bobby",
// 	timeline: "So tired from all that learning"
// },
// {
// 	username: "Sally",
// 	timeline: "Javascript is sooooo coool!"
// },
// {
// 	username: "Mitch",
// 	timeline: "Javascript is preeetyy cool!"
// }

// ];
// function isUserValid(username, password) {
// 	for(var i=0; i<database.length; i++) {
// 		if(database[i].username===username && database[i].password===password)
// 		{
// 			return true;
// 	}
// 	return false
// }

// var userNamePrompt = prompt("What's your username");
// var passwordPrompt= prompt("What's your password");

// function signIn(username, password) {
// 		if(isUserValid(username, password)) {
// 		console.log(newsFeed)
// 	}else {
// 		alert("Sorry, wrong username and password")
// 	}
// }
	
// 	signIn(userNamePrompt, passwordPrompt);
