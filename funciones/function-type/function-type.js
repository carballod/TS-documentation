"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    //! myFunction = 10;
    //! console.log(myFunction);
    // myFunction = addNumber;
    // console.log(myFunction(1, 2));
    //? myFunction = greet;
    //? console.log(myFunction('Daniela'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
