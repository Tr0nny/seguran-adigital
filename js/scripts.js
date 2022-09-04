// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Você recebeu um e-mail com um link de um site desconhecido, o que você faz?',
    answers: [
      {
        answer: 'pesquiso para ver se o site é seguro e verifico o e-mail',
        correct: true,
      },
      {
        answer: 'clico no link para descobrir o que é',
        correct: false,
      },
      {
        answer: 'mando para alguém sem ver o que é',
        correct: false,
      },
      {
        answer: 'pergunto para o remetente se é seguro',
        correct: false,
      },
    ],
  },
  {
    question: 'você recebeu uma mensagem de um conhecido pedindo dinheiro, o que você faz?',
    answers: [
      {
        answer: 'mando o dinheiro para ajudar.',
        correct: false,
      },
      {
        answer: 'faço uma ligação de voz ou video para verificar se é realmente ele.',
        correct: true,
      },
      {
        answer: 'paço meus dados para ele',
        correct: false,
      },
      {
        answer: 'peço o nome dele para ter certeza.',
        correct: false,
      },
    ],
  },
  {
    question: 'Você entrou num site para fazer compras online, mas precisa verificar se o site é verdadeiro.:',
    answers: [
      {
        answer: 'verifico o link em cima da página',
        correct: true,
      },
      {
        answer: 'não preciso verificar pois estava no google',
        correct: false,
      },
      {
        answer: 'mando meus dados e se der certo é porque é verdadeiro.',
        correct: false,
      },
      {
        answer: 'N.D.A',
        correct: false,
      },
    ],
  },
  {
    question: 'Você quer baixar um programa:',
    answers: [
      {
        answer: 'baixo no site verdadeiro',
        correct: true,
      },
      {
        answer: 'entro em um link desconhecido',
        correct: false,
      },
      {
        answer: 'instalo um programa pirata',
        correct: false,
      },
      {
        answer: 'N.D.A',
        correct: false,
      },
    ],
  },
  {
    question: 'Um número estranho me ligou dizendo que é do banco:',
    answers: [
      {
        answer: 'Passo meus dados sem problemas pois é o banco.',
        correct: false,
      },
      {
        answer: 'não preciso verificar e faço o que eles pedem.',
        correct: false,
      },
      {
        answer: 'adiciono o contato e passo minhas informações',
        correct: false,
      },
      {
        answer: 'N.D.A',
        correct: true,
      },
    ],
  },
  {
    question: 'qual das opções aumentam a segurança do meu aparelho?',
    answers: [
      {
        answer: 'atualizar o software e o firewall',
        correct: true,
      },
      {
        answer: 'utilizar o software desatualizado',
        correct: false,
      },
      {
        answer: 'atualizar somente o firewall',
        correct: false,
      },
      {
        answer: 'N.D.A',
        correct: false,
      },
    ],
  },
  {
    question: 'recebi uma noticia, mas não tem fontes:',
    answers: [
      {
        answer: 'envio para o máximo de pessoas para ficarem informadas.',
        correct: false,
      },
      {
        answer: 'pesquiso antes para ver se a noticia é verdadeira',
        correct: true,
      },
      {
        answer: 'envio para poucas pessoas pois se for falsa, poucos ficarão sabendo',
        correct: false,
      },
      {
        answer: 'N.D.A',
        correct: false,
      },
    ],
  },
  {
    question: 'Você fez um projeto mas precisa utilizar uma imagem:',
    answers: [
      {
        answer: 'escolho uma imagem qualquer do Google',
        correct: false,
      },
      {
        answer: 'copio uma imagem de um site',
        correct: false,
      },
      {
        answer: 'Busco uma imgagem sem copyright ou crio uma original.',
        correct: true,
      },
      {
        answer: 'N.D.A',
        correct: false,
      },
    ],
  },
  {
    question: 'qual é a melhor opção para ter minhas contas seguras',
    answers: [
      {
        answer: 'usar a mesma senha em tudo para não me esquecer',
        correct: false,
      },
      {
        answer: 'usar senhas simples',
        correct: false,
      },
      {
        answer: 'mandar minhas senhas para outras pessoas caso precise lembrar',
        correct: false,
      },
      {
        answer: 'criar senhas fortes e trocar de tempo em tempo, anotar em um lugar fisico para lembrar sem risco',
        correct: true,
      },
    ],
  },
  {
    question: '',
    answers: [
      {
        answer: 'verifico o link em cima da página',
        correct: true,
      },
      {
        answer: 'não preciso verificar pois estava no google',
        correct: false,
      },
      {
        answer: 'mando meus dados e se der certo é porque é verdadeiro.',
        correct: false,
      },
      {
        answer: 'N.D.A',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
