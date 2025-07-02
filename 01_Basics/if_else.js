// metro ticketing practice set 

let gender = 'female';
let age = 3;
let discount;
if(age <= 5){
    discount = 100;
}else if(gender == 'female'){
    discount = 50;
}else if(age <= 8){
    discount = 50;
}else if(age >= 65){
    discount = 30;
}else{
    discount = 0;
}

console.log(discount);
