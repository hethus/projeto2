const prompt = require("prompt-sync")();

//projeto jokenpô

//LEMBRANDO QUE É APENAS UM JOGO E TUDO QUE ESTA ESCRITO NÃO REFLETE O QUE ACREDITO, É SOMENTE A PERSONALIDADE DO APLICADOR DIGITAL DA PROVA!

let rodadas = 0;
let rodadas2 = 0;
const escolha = ["pedra", "papel", "tesoura"];
let jogador = 0;
let nome = "";
let continuar = "";
let pergunta = "";

//pontos:

let pontoJog = 0;
let pontoPc = 0;

// começo:

console.clear();

console.log();
console.log("BEM-VINDO!");
console.log();
console.log(
  "Aqui damos vida ao maior sonho de todo jogador profissional e amador do jogo mais difícil e tenebroso da humanidade: O SUPREMO JOKENPÔ!"
);
console.log();
console.log(
  "Acha que pode desafiar nossos guerreiros? HAHAHAHA, acho que não, mas você esta livre para tentar! Vamos lá!"
);

console.log();
console.log(`Lembre-se quando for escolher a sua jogada:

  0 será pedra
  1 será papel
  2 será tesoura
  
  SEU BOBÃO!`);
console.log();

nome = prompt(
  "Qual é o nome do desafiante, no caso, qual o seu nome fracote? "
);
console.log();

//pergunta para mudar de rota, a rota normal é o que o projeto pedia, o campeonato é a modificação que EU quis fazer :)

do {
  pergunta = prompt("Qual sera o modo? (normal/campeonato): ").toLowerCase();
} while (pergunta != "normal" && pergunta != "campeonato");

//projeto normal da Blue:

if (pergunta == "normal") {
  console.log();

  //do while para repetir rodadas se o jogador quiser:
  do {
    let numero = 0;

    //salvar valor de rodadas:

    //

    rodadas = +prompt("Digite a quantidade de rodadas que irá jogar: ");

    while (isNaN(rodadas) || rodadas == "") {
      console.log();
      console.log(
        "Então.... não entendi o que você disse, PODE REPETIR? LEMBRE-SE, TEM QUE SER UM NUMERO..."
      );
      console.log();

      rodadas = +prompt("Digite a quantidade de rodadas que irá jogar: ");
    }

    // for para repetir a quantidade de rodadas que o jogador escreveu:

    for (; numero < rodadas; ) {
      const computador = Math.floor(Math.random() * escolha.length);

      console.log();
      console.log(`${numero + 1}ª rodada!`);
      console.log();

      //jogador:

      jogador = prompt(
        `Qual será a sua jogada, ${nome}? (0-pedra, 1-papel 2-tesoura): `
      );

      jogador = parseInt(jogador); // <-transforma em numero (pq estava retornando errado com o +prompt) e depois verifica:

      if (isNaN(jogador) || jogador > escolha.length - 1 || jogador === " ") {
        console.log();
        console.log(
          "Bom, acho que o frangote não entendeu direito, ENTÃO IREI REPETIR, preste atenção!"
        );
        continue;
      }

      //historinha:

      console.log();
      console.log();
      console.log("Que sequência incrível de golpes!");
      console.log();
      console.log(
        "O jogador consegue levantar a sua mão e em meio ao suor escorrendo do seu rosto, usa toda sua força no punho, lançando-o em direção ao centro do ringue!"
      );
      console.log();
      console.log(
        "O FORMIDÁVEL OPONENTE por sua vez, estava com um sorriso no rosto e sem abrir os olhos manda o punho para o centro do ringue!"
      );
      console.log();
      console.log("O resultado foi.....");

      //calcular quem ganha ou perde:

      if (escolha[computador] === escolha[0]) {
        if (escolha[jogador] === escolha[0]) {
          console.log();
          console.log();
          console.log("----------- EMPATE!");
        } else if (escolha[jogador] === escolha[1]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} VENCEU!!!`);

          pontoJog++;
        } else if (escolha[jogador] === escolha[2]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} PERDEU!!`);

          pontoPc++;
        }
      } else if (escolha[computador] === escolha[1]) {
        if (escolha[jogador] === escolha[0]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} PERDEU!!`);

          pontoPc++;
        } else if (escolha[jogador] === escolha[1]) {
          console.log();
          console.log();
          console.log("----------- EMPATE!");
        } else if (escolha[jogador] === escolha[2]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} VENCEU!!!`);

          pontoJog++;
        }
      } else if (escolha[computador] === escolha[2]) {
        if (escolha[jogador] === escolha[0]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} VENCEU!!!`);

          pontoJog++;
        } else if (escolha[jogador] === escolha[1]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} PERDEU!!`);

          pontoPc++;
        } else if (escolha[jogador] === escolha[2]) {
          console.log();
          console.log();
          console.log("----------- EMPATE!");
        }
      }

      //mostra resultados:

      console.log();
      console.log();
      console.log(
        `o elemento escolhido pelo FORMIDÁVEL OPONENTE foi: ${escolha[computador]}`
      );
      console.log();
      console.log(`o elemento escolhido pelo(a) ${nome} foi: ${jogador}`);
      console.log();

      numero++;
    }

    // termina o loop de cima e ja calcula quem vai ganhar:

    console.log();
    console.log("--------------------------------------------");
    console.log();

    console.log(
      "IREMOS CALCULAR QUEM VENCEU A PARTIDA!!!! aperte enter para ver o resultado!"
    );
    prompt();

    if (pontoJog > pontoPc) {
      console.log(
        `Parabéns ${nome}, você ganhou! seu score foi de ${pontoJog} e o score do FORMIDÁVEL OPONENTE foi ${pontoPc}`
      );
    } else if (pontoJog < pontoPc) {
      console.log(
        `Infelizmente você perdeu ${nome}, o seu score foi de ${pontoJog} e o score do FORMIDÁVEL OPONENTE foi ${pontoPc}`
      );
    } else if (pontoJog == pontoPc) {
      console.log(
        `Você ${nome} e o FORMIDÁVEL OPONENTE empataram nos pontos, o score foi de ${pontoJog}`
      );
    }

    // pergunta ao jogador se vai querer continuar jogando:

    console.log();
    console.log("--------------------------------------------");
    console.log();
    console.log(
      "EAE FRANGOTE, gostou do nossa competição pro-player de jokenpô???? espero que sim."
    );
    console.log(
      "NÃO, isso não foi uma pergunta para você responder, foi uma pergunta retórica!!"
    );
    console.log();
    console.log(`bom, você jogou ${rodadas} e venceu ${pontoJog} delas...`);
    console.log("nada mal, pelo menos entendeu como aqui funciona!");
    console.log();
    console.log("E agora?? o que fazer? deseja continuar jogando? (s/n)");

    continuar = prompt().toLowerCase();

    rodadas2 = rodadas + rodadas2;

    // verificar se a informação é valida:

    while (continuar != "s" && continuar != "n") {
      console.log();
      console.log(
        `Bom, acredito que o jogador(a) ${nome} não vai continuar jogando, MAS EU PRECISO DE UMA RESPOSTA QUE FAÇA SENTIDO!`
      );
      console.log(
        `E AGORA ${nome}???? O QUE FAZER?? DESEJA CONTINUAR JOGANDO? (s/n)`
      );

      continuar = prompt().toLowerCase();

      console.log();
    }
  } while (continuar == "s"); // <- reinicia o loop se o jogador quiser

  // finalização do jogo se o jogador tiver escrito "n":

  console.log();
  console.log("--------------------------------------------");
  console.log();
  console.log("termino do programa! estatística: ");
  console.log();
  console.log(`rodadas jogadas: ${rodadas2}`);
  console.log(`rodadas ganhas: ${pontoJog}`);
  console.log(`rodadas perdidas: ${pontoPc}`);
} else if (pergunta == "campeonato") {
  // <- modo que eu achei mais legal hehehe

  // cria inimigos para enfrentar:

  const inimigos = [
    "Kesan",
    "Damar",
    "Anso",
    "PINTÃO",
    "Linris",
    "Dodrah",
    "Vomito",
    "Pedro",
    "José",
    "MARIA",
    "Juseberto Americano Das Dores 'ai'",
    "SILVA (representante de todos os silvas!)",
    "Leonor",
    "Carolina",
    "Francisca",
    "Lumi-lumi",
    "ANA",
    "Cachorrão!",
    "Jogador de Lol",
    "Um cara QUALQUER!",
    "Um otaku na area",
    "frederico",
    "Zacarias",
    "Afonso",
    "Katarina",
    "Beatriz",
    "Tomas",
    "Miguel",
    "Martim",
    "Helena",
    "Laura",
    "O MATEMÁTICO!",
    "Theo",
    "Um ALIENÍGENA!",
    "!leirbaG",
    "Samuel",
    "JUAN!",
    "Sophia [sorria :)]",
    "Valentina",
  ];

  // historia:

  console.log();
  console.log(
    "Bem vindo então ao campeonato oficial de Jokenpô, espero que não morra tão rápido!"
  );
  console.log();
  console.log(
    `Deixa eu te dizer uma coisa ${nome}, aqui os jogadores não tem como sair sem perder HAHAHAHA`
  );
  console.log(`E mais uma coisa, os jogos não irão parar!!!!!`);
  console.log();

  do {
    // <- do while para verificar que a escolha é valida!

    continuar = prompt(
      "Qual a dificuldade escolhida? (facil, medio ou dificil): "
    ).toLowerCase();
  } while (
    continuar != "facil" &&
    continuar != "medio" &&
    continuar != "dificil"
  );

  // variavel de vida do inimigo e do jogador:

  let vidaPc = 0;
  let vidaJog = 0;

  while (true) {
    // while que sempre ira repetir ate a vida do usuario chegar a 0 ou ele ganhar de todo mundo!

    // escolhe um inimigo aleatorio:

    let inimigo = Math.floor(Math.random() * inimigos.length);
    let escolhido = "";
    escolhido = inimigos[inimigo];

    // sistema de "dificuldade" (se escolher o modo facil, quando mais longe chegar, mais facil é :3):

    if (continuar == "facil") {
      vidaPc = Math.floor(2 * (1.25 * (rodadas + 1)));
      vidaJog = Math.floor(3 * (1.25 * (rodadas + 1)));
    } else if (continuar == "medio") {
      vidaPc = Math.floor(3 * (1.25 * (rodadas + 1)));
      vidaJog = Math.floor(3 * (1.25 * (rodadas + 1)));
    } else if (continuar == "dificil") {
      vidaPc = Math.floor(3 * (1.25 * (rodadas + 1)));
      vidaJog = Math.floor(2 * (1.25 * (rodadas + 1)));
    }

    // pequena historia:

    console.log();
    console.log();
    console.log(
      "Se prepare, seu inimigo já foi decidido, você enfrentará O(A) SUPERRRRRR:"
    );
    console.log(`${escolhido}`);
    console.log();
    console.log(`vamos começar então!`);
    console.log();

    //while que continua rodando ate ou o usuario ou o inimigo escolhido ganhar:

    while (vidaJog != 0 && vidaPc != 0) {
      // escolha aleatoria do pc:

      const computador = Math.floor(Math.random() * escolha.length);

      console.log();
      console.log("Vida jogador: ", vidaJog);
      console.log(`Vida do(a) inimigo(a) ${escolhido}: `, vidaPc);
      console.log();

      // jogador:

      jogador = prompt(
        `Qual será a sua jogada, ${nome}? (0-pedra, 1-papel 2-tesoura): `
      );

      if (isNaN(jogador) || jogador > escolha.length || jogador === " ") {
        // <-teste
        console.log();
        console.log("VOCÊ É BURRO???? PRESTA ATENÇÃO");
        console.log();
      }

      jogador = parseInt(jogador);

      // verificar quem ganha a rodada:

      if (escolha[computador] === escolha[0]) {
        if (escolha[jogador] === escolha[0]) {
          console.log();
          console.log();
          console.log("----------- EMPATE!");
        } else if (escolha[jogador] === escolha[1]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} VENCEU!!!`);

          vidaPc--;
        } else if (escolha[jogador] === escolha[2]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} PERDEU!!`);

          vidaJog--;
        }
      } else if (escolha[computador] === escolha[1]) {
        if (escolha[jogador] === escolha[0]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} PERDEU!!`);

          vidaJog--;
        } else if (escolha[jogador] === escolha[1]) {
          console.log();
          console.log();
          console.log("----------- EMPATE!");
        } else if (escolha[jogador] === escolha[2]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} VENCEU!!!`);

          vidaPc--;
        }
      } else if (escolha[computador] === escolha[2]) {
        if (escolha[jogador] === escolha[0]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} VENCEU!!!`);

          vidaPc--;
        } else if (escolha[jogador] === escolha[1]) {
          console.log();
          console.log();
          console.log(`----------- ${nome} PERDEU!!`);

          vidaJog--;
        } else if (escolha[jogador] === escolha[2]) {
          console.log();
          console.log();
          console.log("----------- EMPATE!");
        }
      }

      //finaliza a rodada e mostra o resultado que esta la em cima (desse jeito o jogador sabe quanta vida ele tem na primeira rodada):

      console.log();
      console.log(`Depois dessa rodada incrível, temos o seguinte resultado:`);
    }

    // verificação

    if (vidaJog == 0) {
      // acaba o jogo:
      console.log();
      console.log(
        `Sinto muito ${nome}, não poderá mais jogar hoje, seu rosto e espirito estão destruídos...`
      );
      console.log(`Você derrotou ao todo ${rodadas} inimigos!`);
      break;
    } else if (vidaPc == 0) {
      // jogador ganha do inimigo e reinicia o ciclo:
      rodadas++;

      console.log();
      console.log(`PARABÉNS, você ${nome}, derrotou ${rodadas} inimigo(s)!`);
      console.log();
      console.log(
        "--------------------------------------------------------------------------------------------"
      );
      console.log();
      console.clear;
    }

    inimigos.splice(inimigo, 1); // tira o inimigo derrotado!

    if (inimigos == 0) {
      // easter egg!
      console.log();
      console.log(`............`);
      console.log("que?.....");
      console.log();
      console.log(`${rodadas}.... inimigos....`);
      console.log(
        `CARAMBA!!! VOCÊ DERROTOU TODOS OS ${rodadas} INIMIGOS QUE TEMOS NO CAMPEONATO!!!!! ${nome}, VOCÊ É UM MONSTRO`
      );
      console.log(
        `DEPOIS DESSA EU VOU TERMINAR O JOGO POR CAUSA QUE ESTOU COM MEDO DO QUE VOCÊ PODE FAZER COMIGO...`
      );
      break;
    }
  }
}