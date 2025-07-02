function display(result){
    console.log(result)
}

function add(num1 , nums2 , myCallback){
    let result = num1 + nums2;
    myCallback(result);
}

add(90,20,display);//when passing a function as argument dont need to use ()
