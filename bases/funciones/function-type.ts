(() => {

    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `The world is saved!`;

    let myFunction: () => string;

    //! myFunction = 10;
    //! console.log(myFunction);
    
    // myFunction = addNumber;
    // console.log(myFunction(1, 2));

    //? myFunction = greet;
    //? console.log(myFunction('Daniela'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})()