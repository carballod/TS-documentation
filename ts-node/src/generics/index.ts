import { getPokemon } from "./get-pokemon";

getPokemon(4)
    .then( pokemon => console.log(pokemon.abilities[0].ability.name))
    .catch( err => console.log(err))
    .finally( () => console.log('Fin de getPokemon') );