"use strict";
(() => {
    let myCustomVariable = 'Daniela';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1, 2]
    };
    console.log(myCustomVariable);
})();
