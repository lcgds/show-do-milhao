/*Definição de Questão Padrão*/
function Question(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}


/*Definição de perguntas*/
let q1 = new Question('Qual bicho transmite Doença de Chagas?', ['Abelha', 'Barata', 'Pulga', 'Barbeiro'], 4);

let q2 = new Question('Qual fruto é conhecido no Norte e Nordeste como jerimum?', ['Caju', 'Abóbora', 'Chuchu', 'Côco'], 2);

let q3 = new Question('Qual é o coletivo de cães?', ['Matilha', 'Rebanho', 'Alcateia', 'Manada'], 1);

let q4 = new Question('Qual é o triângulo que tem todos os lados diferentes?', ['Equilátero', 'Isóceles', 'Escaleno', 'Trapézio'], 3);

let q5 = new Question('Quem compôs o Hino da Independência?', ['Dom Pedo I', 'Manuel Bandeira', 'Castro Alvez', 'Carlos Gomes'], 1);

let q6 = new Question('Qual é o antônimo de malograr?', ['Perder', 'Fracassar', 'Conseguir', 'Desprezar'], 3);

let q7 = new Question('Em que país nasceu Carmem Miranda?', ['Brasil', 'Espanha', 'Portugal', 'Argentina'], 3);

let q8 = new Question('Qual foi o último Presidente do período da ditadura militar no Brasil', ['Costa e Silva', 'João Figueiredo', 'Ernesto Geisel', 'Emílio Médici'], 2);

let q9 = new Question('Seguindo a sequência do baralho qual carta vem depois do dez?', ['Rei', 'Valete', 'Nove', 'Ás'], 2);

let q10 = new Question('O adjetivo venoso está relacionado a:', ['Vela', 'Vento', 'Vênia', 'Veia'], 4);

let q11 = new Question('Qual nome se dá a purificação por meio da água?', ['Abolição', 'Abnegação', 'Ablução', 'Abrupção'], 3);

let q12 = new Question('Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', ['Monte Everest', 'Monte Carlo', 'Monte Fuji', 'Monte Branco'], 1);

let q13 = new Question('Em que parte do corpo se encontra a epiglote?', ['Estômago', 'Pâncreas', 'Rim', 'Boca'], 4);

let q14 = new Question('A compensação por perda é chamada de...', ['Déficit', 'Indenização', 'Indexação', 'Indébito'], 2);

let q15 = new Question('Em que dia nasceu e em que dia foi registrado o Presidente Lula?', ['6 e 27 de outubro', '8 e 27 de outubro', '9 e 26 de outubro', '7 e 23 de outubro'], 1);

/*Jogador e seus objetos: escolha e pontuação*/
let player = {
    choice: undefined,
    maxScore: 0,

    choose: function (alternative) {
        this.choice = alternative;

        visual.resetSelection();
        visual.switchSelection();
    }
}

let visual = {
    resetSelection: function () {
        let alternatives = document.getElementsByClassName('alternatives');
        for (let i = 0; i < alternatives.length; i++) {
            alternatives[i].classList.remove('bg-warning', 'bg-success', 'text-dark');
            alternatives[i].classList.add('bg-secondary', 'text-light');
        }
    },

    switchSelection: function () {
        switch (player.choice) {
            case 1:
                document.getElementById('documentA1').classList.add('bg-warning', 'text-dark');
                break;
            case 2:
                document.getElementById('documentA2').classList.add('bg-warning', 'text-dark');
                break;
            case 3:
                document.getElementById('documentA3').classList.add('bg-warning', 'text-dark');
                break;
            case 4:
                document.getElementById('documentA4').classList.add('bg-warning', 'text-dark');
                break;
        }
    },

    correctSelection: function (id) {
        if (document.getElementById(id).classList.contains('bg-warning') == true || document.getElementById(id).classList.contains('bg-secondary') == true) {
            document.getElementById(id).classList.remove('bg-secondary', 'bg-warning');
            document.getElementById(id).classList.add('bg-success');
        }
        if (document.getElementById(id).classList.contains('text-dark') == true) {
            document.getElementById(id).classList.remove('text-dark');
        }
        if (document.getElementById(id).classList.contains('text-light') == false) {
            document.getElementById(id).classList.add('text-light');
        }
    },

    checkSelection: function () {
        switch (game.Question[0].answer) {
            case 1:
                visual.correctSelection('documentA1');
                break;
            case 2:
                visual.correctSelection('documentA2');
                break;
            case 3:
                visual.correctSelection('documentA3');
                break;
            case 4:
                visual.correctSelection('documentA4');
                break;
        }
    },

    buttonSend: function () {
        document.getElementById('documentButton').innerHTML = 'RESPONDER';
        document.getElementById('documentButton').setAttribute('onclick', 'game.checkAnswer()');
    },

    buttonNext: function () {
        document.getElementById('documentButton').innerHTML = 'PRÓXIMA PERGUNTA';
        document.getElementById('documentButton').setAttribute('onclick', 'game.play()');
    }
}


/*Jogo e suas funções: início, jogada e correção*/
let game = {
    Question: undefined,
    Questions: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15],

    selectQuestion: function () {
        let x = Math.round(Math.random() * 14);
        console.log(x + 1);
        this.Question = this.Questions.slice(x, (x + 1));
    },

    postQuestion: function () {
        document.getElementById('documentQuestion').innerHTML = this.Question[0].question;

        document.getElementById('documentA1').innerHTML = this.Question[0].options[0];
        document.getElementById('documentA2').innerHTML = this.Question[0].options[1];
        document.getElementById('documentA3').innerHTML = this.Question[0].options[2];
        document.getElementById('documentA4').innerHTML = this.Question[0].options[3];
    },

    play: function () {
        this.selectQuestion();
        this.postQuestion();
        visual.resetSelection();
        visual.buttonSend();
    },

    checkAnswer: function () {
        if (player.choice == this.Question[0].answer) {
            player.maxScore++;
            document.getElementById('documentScore').innerHTML = player.maxScore + " / 15";
        }

        visual.checkSelection();
        visual.buttonNext();
    }

}