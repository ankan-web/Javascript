// const person = {
//     firstName: "Elon",
//     lastname: "Musk",
//     age: "55",

//     address:{
//         street:"Tesla Road",
//         city:"Austin",
//         state:"Texas",
//         zip:"78701",
//         country:"USA"
//     }
// }
// adding new property 
// person.company = "Tesla";
// //deleteing property
// delete person.age;

// console.log(typeof(person));
// console.log(person);

// console.log(person.age); //access properties by dot method from an obbject
// person.firstName = "Ankan";
// console.log(person['firstName']); //access properties by bracket method from an object

//accessing nested object properties
// console.log(person.address.city);
// console.log(person.address.state);
// console.log(person.address.country);


// //chcking if a property exists in an object
// console.log("age" in person);

// for(let prop in person){
//     console.log(prop +  " : " + person[prop]);
// }

// const person = new Object();

// person.firstName = "Elon";
// person.lastname = "Musk";
// person.age = 55;

// console.log(person);


const person = new Object({
    firstName: "Elon",
    lastname : "Musk",
    age : 55
})

console.log(person);