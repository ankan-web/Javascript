function myFunction(num){
    console.log("hello");
    num++;
    if(num <= 10){
        myFunction(num);
    }
}
let num = 1;
myFunction(num);