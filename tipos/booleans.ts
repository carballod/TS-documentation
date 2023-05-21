// tsc
//tsc --init
//tsc -watch ESTE

(() => {
    let isSuperman:boolean= true;
    let isBatman:boolean = false;
    isSuperman = (isBatman) ? true : false;

    console.log({isSuperman});
})();