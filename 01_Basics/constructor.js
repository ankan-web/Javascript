function Person(first,last){
this.firstName = first,
this.lastName = last
}

const person1 = new Person("ankan" , "mondal");
const person2 = new Person("tony" , "stark");
person1.age = 52;
console.log(person1);

person2.greet = function(){
    console.log("Hello" + this.firstName);
}
person2.greet();