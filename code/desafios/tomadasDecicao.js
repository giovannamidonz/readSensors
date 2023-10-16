// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
function entrada(acaoEscolhida){

  
  if(acaoEscolhida === "Fugir"){
    return nomePersonagem + " escolheu "+ acaoEscolhida+ "!";
  }else if(acaoEscolhida === "Atacar"){
    return nomePersonagem + " escolheu " + acaoEscolhida+"!";
  }else{
    return "Tente novamente";
  }
}

//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:

var resultado = entrada(acaoEscolhida);
print(resultado);