(() => {

    const error = (message:string):never => {

        throw new Error(message)
    }

    error('auxilio!')

})()


// la funcion never nunca retorna un valor
// es usada para cuando la funcion lanza un error y no retorna nada
// o cuando la funcion tiene un bucle infinito
// y no retorna nada
// suele terminar con un error