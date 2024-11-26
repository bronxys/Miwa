// iainverno.js

const interpretarEntrada = (entrada, bancoDeDados) => {
    let resposta = ""
    const keywords = entrada.split(" ")

        if (keywords.includes("inverno")) {
            if (keywords.includes("que") && keywords.includes("dia")) {
                resposta += `📅 O inverno ocorre de ${bancoDeDados.inverno.data}. `
            } else if (keywords.includes("significado")) {
                resposta += `❄️ O inverno ${bancoDeDados.inverno.significado}. `
                resposta += `As tradições incluem: ${bancoDeDados.inverno.tradicoes.join(", ")}. `
            } else if (keywords.includes("curiosidades")) {
                resposta += `🎉 Curiosidades sobre o inverno: ${bancoDeDados.inverno.curiosidades.join(", ")}. `
            } else if (keywords.includes("fatos") && keywords.includes("interessantes")) {
                bancoDeDados.inverno.fatos_interessantes.forEach((fato) => {
                    resposta += `📖 ${fato.titulo}: ${fato.descricao}. `
                })
                } else if (keywords.includes("pra que") || keywords.includes("serve") || keywords.includes("funcão") || keywords.includes("importância")) {
            resposta += `🌍 O inverno é importante para a regeneração da natureza, ajuda a manter o ciclo de vida das plantas e é essencial para alguns ecossistemas, além de ser uma época de celebrações e festividades. `
            } else if (keywords.includes("festival") && keywords.includes("famoso")) {
    resposta += `🎉 Festivais de inverno famosos incluem: ${bancoDeDados.inverno.festivais.join(", ")}. `
    } else if (keywords.includes("por que") && keywords.includes("dias") && keywords.includes("curtos")) {
    resposta += `🌞 ${bancoDeDados.inverno.astronomia} `
} else if (keywords.includes("comida") && (keywords.includes("tipica") || keywords.includes("típica"))) {
    resposta += `🍲 Comidas típicas de inverno em diferentes países incluem: ${bancoDeDados.inverno.comidas_tipicas.join(", ")}. `
} else if (keywords.includes("origem") && keywords.includes("termo")) {
    resposta += `📜 A origem do termo 'inverno': ${bancoDeDados.inverno.etimologia} `
} else if (keywords.includes("animal") && keywords.includes("inverno") && (keywords.includes("sobrevivem") || keywords.includes("adaptacao"))) {
    resposta += `🐾 Adaptações dos animais ao inverno incluem: ${bancoDeDados.inverno.adaptacao_animais.join(", ")}. `
    } else if (keywords.includes("voce") && keywords.includes("gosta") && keywords.includes("inverno")) {
    const respostaAleatoria = bancoDeDados.inverno.gosto_inverno[Math.floor(Math.random() * bancoDeDados.inverno.gosto_inverno.length)];
    resposta += `🤖 ${respostaAleatoria} `
} else if (keywords.includes("quando") && keywords.includes("proximo") && keywords.includes("inverno")) {
    resposta += `📅 ${bancoDeDados.inverno.proximo_inverno} `
} else if (keywords.includes("quando") && keywords.includes("acaba") && keywords.includes("inverno")) {
    resposta += `📅 ${bancoDeDados.inverno.fim_inverno} `
            } else if (keywords.includes("oque") && keywords.includes("inverno")) {
    const descricaoAleatoria = bancoDeDados.inverno.descricao[Math.floor(Math.random() * bancoDeDados.inverno.descricao.length)];
    resposta += `❄️ ${descricaoAleatoria} `
            } else if (keywords.includes("o que") && keywords.includes("inverno")) {
    const dscjshfk = bancoDeDados.inverno.descricao[Math.floor(Math.random() * bancoDeDados.inverno.descricao.length)];
    resposta += `❄️ ${dscjshfk} `
            } else if (keywords.includes("frase") || keywords.includes("reflexão")) {
            resposta += `💬 Uma reflexão sobre o inverno: "${bancoDeDados.inverno.frases[Math.floor(Math.random() * bancoDeDados.inverno.frases.length)]}". `
        } else if (keywords.includes("tradição") || keywords.includes("costume")) {
            resposta += `🎉 Algumas tradições do inverno incluem: ${bancoDeDados.inverno.tradicoes.join(", ")}. `
        } else if (keywords.includes("o que") || keywords.includes("feito") || keywords.includes("atividades")) {
            resposta += `❄️ Durante o inverno, as atividades incluem: ${bancoDeDados.inverno.atividades.join(", ")}. `
        } else if (keywords.includes("inverno") && keywords.includes("frio")) {
            resposta += `🧊 Sim, o inverno é geralmente associado ao frio, e as temperaturas podem variar bastante dependendo da região. `
            } else if (keywords.includes("esportes")) {
                resposta += `⛷️ Os esportes populares de inverno incluem: ${bancoDeDados.inverno.esportes.join(", ")}. `
            } else if (keywords.includes("cultura")) {
                resposta += `🎊 Na cultura de inverno, temos festivais como: ${bancoDeDados.inverno.cultura.festivais.join(", ")}. `
                resposta += `Comidas típicas: ${bancoDeDados.inverno.cultura.comidas.join(", ")}. `
                resposta += `Músicas associadas ao inverno: ${bancoDeDados.inverno.cultura.músicas.join(", ")}. `
} else if (keywords.includes("frase") || keywords.includes("reflexão")) {
                resposta += `💬 Uma reflexão sobre o inverno: "${bancoDeDados.inverno.frases[Math.floor(Math.random() * bancoDeDados.inverno.frases.length)]}". `
            } else if (keywords.includes("animais")) {
                resposta += `🐾 Animais típicos do inverno: ${bancoDeDados.inverno.animais.join(", ")}. `
            } else if (keywords.includes("plantas")) {
                resposta += `🌱 Plantas que sobrevivem ao inverno: ${bancoDeDados.inverno.plantas.join(", ")}. `
            } else if (keywords.includes("vestuário")) {
                resposta += `🧥 Vestuário recomendado para o inverno: ${bancoDeDados.inverno.vestuário.join(", ")}. `
                } else if (keywords.includes("inverno") && keywords.includes("calor")) {
    resposta += `🌡️ ${bancoDeDados.inverno.calor_no_inverno} `
} else if (keywords.includes("palavra") && keywords.includes("inverno") && (keywords.includes("surgiu") || keywords.includes("origem"))) {
    resposta += `📜 ${bancoDeDados.inverno.origem_palavra} `
            } else {
                resposta += "👋 Como posso ajudar? Você gostaria de saber mais sobre o inverno?"
            }
    }

    if (!resposta) {
        resposta = "Desculpe, não consegui entender sua pergunta."
    }

    return resposta
}

module.exports = { interpretarEntrada }