
const palavra = gets();

function combinandoNomesPokemons(palavra){
  const palavraPokemon = palavra + "saur";
  return palavraPokemon;
}


var palavraGerada = combinandoNomesPokemons(palavra);

print(palavraGerada);