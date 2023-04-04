{
    //Hoisting Examples
    console.log(a); // undefined
    console.log(b); // uncaught ReferenceError
    console.log(c); // uncaught ReferenceError

    var a = 1;
    let b = 2;
    let c = 3;

    console.log(a); //1
    console.log(b); //2
    console.log(c); //3
}