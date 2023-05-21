(() => {

    const fullName = (firstName: string, ...restArgs:string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');

    console.log(superman);
    


})()

//? Un parametro rest es un arreglo que contiene el resto de parametros enviados como argumentos a la funcion