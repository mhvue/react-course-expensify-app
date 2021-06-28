//OBJECT DESTRUCTURING 

// const person = {
//     //name: "Mai",
//     age: 26,
//     location: {
//         city: "Wisconsin",
//         temp: 99
//     }
// }
// const {name: firstName = "Anonymous", age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         //name: "Penguin",
//     }
// };

// const {name: publisherName = "Self-published"} = book.publisher
// //console.log(name)
// console.log(publisherName)

//ARRAY 
// const address = [
//     "1299 S. Juniper Street",
//     "Milwaukee",
//     "Wisconsin",
//     "53211"
// ];
// //arrays matched up by items in the array (way it is in order in the array)
// //const [, city, state] = address; //here we are skipping the first item, but still need ,. anything after that we don't want, we can just not include 

// const [, city, state = "New York"] = address;
// console.log(`you are in ${city} ${state}`);

const item = [
    "hot coffee",
    "iced coffee",
    "$2.00",
    "$2.50",
    "$2.75"
];

const [, coffeeIce, , Mcost] = item;

console.log(`A medium ${coffeeIce} is ${Mcost}`)
console.log(`A medium hot coffee is 2.50`)