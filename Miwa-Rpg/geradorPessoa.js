// geradorPessoa.js
const nomes = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Heloísa", "Igor", "Juliana",
    "Kleber", "Larissa", "Marcelo", "Natália", "Otávio", "Paula", "Ricardo", "Sabrina", "Tiago", "Ursula",
    "Vitor", "Wagner", "Xavier", "Yasmin", "Zeca", "Amanda", "Bernardo", "Cristina", "Diogo", "Elaine",
    "Fabio", "Gisele", "Hugo", "Ingrid", "Jorge", "Karen", "Lucas", "Marina", "Nicolas", "Olga",
    "Pedro", "Quésia", "Rafael", "Simone", "Tatiana", "Ulisses", "Valéria", "Wilson", "Xênia", "Yuri",
    "Zilda", "Alberto", "Bianca", "Caio", "Débora", "Elias", "Fátima", "Gilberto", "Helena", "Ismael", "Joana",
    "Artur", "Bárbara", "Clara", "Diego", "Eduarda", "Filipe", "Gustavo", "Hugo", "Isadora", "João",
    "Lara", "Manuel", "Nayara", "Otávia", "Priscila", "Roberto", "Sara", "Tomás", "Vanessa", "William",
    "Ximena", "Yara", "Zélia", "Alex", "Beatriz", "César", "Daniel", "Evelyn", "Fernando", "Giovanna", "Henrique",
    "Iara", "José", "Lia", "Mateus", "Natanael", "Otto", "Patrícia", "Renato", "Sofia", "Thiago", "Verônica",
    "Walter", "Xuxa", "Yasmim", "Zuleica", "Adriana", "Breno", "Camila", "David", "Eugênia", "Francisco", "Heloisa",
    "Ivan", "Janaína", "Leandro", "Maurício", "Neusa", "Orlando", "Paulo", "Raquel", "Sérgio", "Teresa", "Vicente",
    "Washington", "Xavier", "Yuri", "Zara", "Alessandra", "Bruno", "Clarice", "Davi", "Emanuel", "Fabiana", "Gustavo",
    "Heitor", "Isabel", "Julio", "Laura", "Miguel", "Nina", "Otávio", "Pedro", "Renata", "Samuel", "Tatiane", "Vinícius",
    "Wellington", "Ximena", "Yasmin", "Zoraide", "Alberto", "Bianca", "Cristina", "Diego", "Eduardo", "Fernanda", "Guilherme",
    "Hilda", "Igor", "Jaqueline", "Leandro", "Mariana", "Nelson", "Olga", "Paulo", "Rita", "Silvio", "Túlio", "Vânia", 
    "Xandão", "Ygor", "Zuleide"
];

const sobrenomes = [
    "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Ferreira", "Rodrigues", "Almeida", "Nascimento",
    "Lima", "Gomes", "Martins", "Barbosa", "Ribeiro", "Cardoso", "Teixeira", "Araujo", "Leite", "Cavalcanti",
    "Dias", "Rocha", "Borges", "Mendes", "Moura", "Ramos", "Campos", "Pinto", "Barros", "Vieira",
    "Freitas", "Carvalho", "Monteiro", "Andrade", "Moreira", "Correia", "Braga", "Batista", "Cunha", "Tavares",
    "Machado", "Figueiredo", "Fonseca", "Macedo", "Santiago", "Moraes", "Antunes", "Melo", "Reis", "Cruz",
    "Assis", "Neves", "Nogueira", "Castro", "Magalhães", "Queiroz", "Vieira", "Valente", "Salgado", "Domingues",
    "Rezende", "Brito", "Lacerda", "Dantas", "Teles", "Nóbrega", "Paes", "Lopes", "Luz", "Macedo",
    "Prado", "Lima", "Torres", "Simões", "Amaral", "Cruz", "Silveira", "Soares", "Alves", "Rosa",
    "Rego", "Azevedo", "Lemos", "Carmo", "Couto", "Macedo", "Cabral", "Miranda", "Siqueira", "Muniz",
    "Gusmão", "Quintana", "Ventura", "Coelho", "Santos", "Santos", "Pinto", "Leal", "Peixoto", "Farias",
    "Ribeiro", "Seabra", "Guerra", "Lemos", "Marques", "Mattos", "Mendonça", "Saraiva", "Ximenes",
    "Amorim", "Ferraz", "Pacheco", "Freire", "França", "Franco", "Soares", "Nogueira", "Macedo", "Mattos",
    "Macedo", "Moreira", "Silva", "Souza", "Reis", "Teixeira", "Oliveira", "Souza", "Azevedo", "Santos",
    "Santos", "Lopes", "Cunha", "Campos", "Costa", "Silva", "Santos", "Macedo", "Cavalcanti", "Viana",
    "Barbosa", "Cunha", "Dias", "Lima", "Ramos", "Cardoso", "Andrade", "Medeiros", "Nogueira", "Reis",
    "Moreira", "Gomes", "Pereira", "Silva", "Santos", "Campos", "Silva", "Souza", "Ferreira", "Nogueira",
    "Almeida", "Nascimento", "Mendes", "Moura", "Rezende", "Silva", "Souza", "Azevedo", "Barros", "Ribeiro"
];

const sexos = [
    "Masculino", "Feminino", "Outro", "Prefiro não dizer", "Não-binário", "Gênero fluido", "Agênero", "Bigênero",
    "Andrógino", "Gênero neutro", "Gênero queer", "Intergênero", "Pangênero", "Transmasculino", "Transfeminino",
    "Demi-menino", "Demi-menina", "Neutrois", "Apôrico", "Autogênero", "Cisgênero", "Cisfeminino", "Cis-masculino",
    "Transgênero", "Transfeminino", "Transmasculino", "Gênero-vago", "Poligênero", "Demiboy", "Demigirl",
    "Espécie neutra", "Intersex", "Quoi-gênero", "Gênero aberto", "Aliagênero", "Androgênero", "Antigênero",
    "Trans-neutro", "Trans-mulher", "Trans-homem", "Sem gênero", "Gray-gênero", "Libragênero", "Maverique",
    "Nanogênero", "Ningênero", "Aporagênero", "Condigênero", "Novigênero", "Stellagênero", "Vastigênero",
    "Fluidogênero", "Gendervague", "Inter-gênero", "Metagênero", "Neutragênero", "Omnigênero", "Xenogênero"
];

const signos = [
    "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio",
    "Aquário", "Peixes", "Ophiuchus", "Serpentário", "Aracnídeo", "Quetzal", "Hércules", "Cavaleiro",
    "Centauro", "Hidra", "Orion", "Fênix", "Cérbero", "Sagitta", "Vulpecula", "Auriga", "Perseu", "Gorgona",
    "Tritão", "Pegasus", "Draco", "Coroa do Norte", "Caçador", "Andrômeda", "Touro Dourado", "Aquário Estelar",
    "Peixes Celestes", "Leão Solar", "Águia Imperial", "Cisne Real", "Leopardo", "Fênix Majestosa",
    "Serpente Divina", "Grifo Celestial", "Lobo Estelar", "Urso Polar", "Dragão de Fogo", "Cervo",
    "Raposa Astuta", "Tigre Branco", "Leão Negro", "Búfalo Selvagem", "Javali", "Camaleão", "Golfinho Azul",
    "Cobra Verde", "Puma", "Elefante Sagrado", "Orca", "Leão das Neves"
];

const estados = [
    "SP", "RJ", "MG", "BA", "RS", "PR", "SC", "PE", "CE", "PA", "MA", "GO", "PB", "RN", "ES", "PI", "AL",
    "MT", "MS", "SE", "RO", "TO", "AC", "RR", "AP", "AM", "DF", "AC", "AL", "AP", "AM", "BA", "CE", "DF",
    "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
    "SP", "SE", "TO", "RS", "PR", "SC", "PE", "CE", "PA"
];

const cidades = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Porto Alegre", "Curitiba", "Florianópolis",
    "Recife", "Fortaleza", "Belém", "São Luís", "Goiânia", "João Pessoa", "Natal", "Vitória", "Teresina",
    "Maceió", "Cuiabá", "Campo Grande", "Aracaju", "Porto Velho", "Palmas", "Rio Branco", "Boa Vista",
    "Macapá", "Manaus", "Brasília", "Campinas", "Guarulhos", "Nova Iguaçu", "Osasco", "Santo André",
    "São Bernardo do Campo", "Sorocaba", "Uberlândia", "Contagem", "Ribeirão Preto", "Juiz de Fora", "Maringá",
    "São José dos Campos", "São José do Rio Preto", "Mogi das Cruzes", "Betim", "Caxias do Sul", "Pelotas",
    "Blumenau", "Londrina", "Joinville", "Niterói", "Petrópolis", "Volta Redonda", "Bauru", "Piracicaba",
    "Taubaté", "Franca", "Barueri", "Itapevi", "Itu", "Indaiatuba", "Bragança Paulista", "Jundiaí"
];

const coresFavoritas = [
    "Vermelho", "Azul", "Verde", "Amarelo", "Preto", "Branco", "Roxo", "Laranja", "Marrom", "Cinza",
    "Rosa", "Vinho", "Turquesa", "Lavanda", "Bege", "Dourado", "Prateado", "Anil", "Salmão", "Pêssego",
    "Esmeralda", "Coral", "Cáqui", "Magenta", "Cobre", "Champanhe", "Bronze", "Safira", "Lilás", "Ameixa",
    "Açafrão", "Oliva", "Ouro", "Marfim", "Ametista", "Marfim", "Mostarda", "Carvão", "Marfim", "Grafite",
    "Jade", "Topázio", "Opala", "Quartzo", "Âmbar", "Esmeralda", "Platina", "Granada", "Rubi", "Pérola",
    "Sodalita", "Onix", "Lápis-lazúli", "Quartzo rosa", "Cristal", "Jaspe", "Ametista", "Agata", "Obsidiana"
];

function gerarNome() {
    return `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`;
}

function gerarCPF() {
    return `${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 100)}`;
}

function gerarRG() {
    return `${Math.floor(Math.random() * 10000000)}-${Math.floor(Math.random() * 9)}`;
}

function gerarDataNascimento() {
    const ano = Math.floor(Math.random() * 30) + 1970;
    const mes = Math.floor(Math.random() * 12) + 1;
    const dia = Math.floor(Math.random() * 28) + 1;
    return `${dia}/${mes}/${ano}`;
}

function gerarEmail(nome) {
    return `${nome.split(" ").join(".").toLowerCase()}@exemplo.com`;
}

function gerarEndereco() {
    return {
        CEP: `${Math.floor(Math.random() * 90000) + 10000}-${Math.floor(Math.random() * 900) + 100}`,
        Endereco: `Rua ${nomes[Math.floor(Math.random() * nomes.length)]}`,
        Numero: Math.floor(Math.random() * 1000),
        Bairro: `Bairro ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`,
        Cidade: cidades[Math.floor(Math.random() * cidades.length)],
        Estado: estados[Math.floor(Math.random() * estados.length)]
    };
}

function gerarTelefones() {
    return `(${Math.floor(Math.random() * 90) + 10}) ${Math.floor(Math.random() * 90000) + 10000}-${Math.floor(Math.random() * 9000) + 1000}`;
}

function gerarCaracteristicasFisicas() {
    return {
        Altura: `${Math.floor(Math.random() * 50) + 150} cm`,
        Peso: `${Math.floor(Math.random() * 60) + 40} kg`,
        "Tipo Sanguíneo": ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"][Math.floor(Math.random() * 8)]
    };
}

function gerarPessoa() {
    const nome = gerarNome();
    return {
        Nome: nome,
        CPF: gerarCPF(),
        RG: gerarRG(),
        "Data de Nascimento": gerarDataNascimento(),
        Sexo: sexos[Math.floor(Math.random() * sexos.length)],
        Signo: signos[Math.floor(Math.random() * signos.length)],
        Filiação: `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`,
        Mãe: `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`,
        Pai: `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`,
        Online: Math.random() > 0.5 ? "Sim" : "Não",
        "E-Mail": gerarEmail(nome),
        Senha: Math.random().toString(36).slice(-8),
        Endereço: gerarEndereco(),
        Telefones: gerarTelefones(),
        "Características Físicas": gerarCaracteristicasFisicas(),
        "Cor Favorita": coresFavoritas[Math.floor(Math.random() * coresFavoritas.length)]
    };
}

module.exports = gerarPessoa;