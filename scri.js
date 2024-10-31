let currentQuestion = 0;

// Perguntas para o quiz
const quizQuestions = [
    {
        question: "O etanol é utilizado principalmente como:",
        answers: [
            { text: "Combustível", correct: true },
            { text: "Conservante", correct: false }
        ]
    },
    {
        question: "Qual dos seguintes produtos é gerado na fermentação anaeróbica?",
        answers: [
            { text: "Ácido Láctico", correct: true },
            { text: "Ácido Acético", correct: false }
        ]
    },
    {
        question: "Qual é a principal fonte de açúcar para a fermentação?",
        answers: [
            { text: "Amido", correct: false },
            { text: "Glicose", correct: true }
        ]
    },
    {
        question: "A fermentação é um processo:",
        answers: [
            { text: "Aeróbico", correct: false },
            { text: "Anaeróbico", correct: true }
        ]
    }
];

// Função para mostrar a tela correta
function showScreen(screenId) {
    // Oculta todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    // Mostra a tela desejada
    document.getElementById(screenId).classList.remove('hidden');
    document.getElementById(screenId).classList.add('active');
    // Oculta o feedback do quiz
    document.getElementById('feedback').classList.add('hidden');
    // Reinicia o quiz se a tela de uso for aberta
    if (screenId === 'usage') {
        currentQuestion = 0;
        showQuizQuestion();
    }
}

// Função para mostrar mais informações na definição
function showMore(type) {
    const moreDef = document.getElementById('moreDef');
    if (type === 'def') {
        moreDef.classList.toggle('hidden');
    }
}

// Função para mostrar informações sobre substâncias
function toggleInfo(infoId) {
    const info = document.getElementById(infoId);
    info.classList.toggle('hidden');
}

// Função para mostrar informações sobre reações
function showReaction(type) {
    const reactionInfo = document.getElementById('reactionInfo');
    if (type === 'aerobic') {
        reactionInfo.textContent = 'Na fermentação aeróbica, o oxigênio é utilizado para produzir energia.';
    } else {
        reactionInfo.textContent = 'Na fermentação anaeróbica, a energia é produzida sem a presença de oxigênio.';
    }
}

// Função para mostrar produtos da fermentação
function showProducts() {
    const products = ['Etanol', 'Ácido Láctico', 'Dióxido de Carbono'];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    document.getElementById('productResult').textContent = `Produto: ${randomProduct}`;
}

// Função para iniciar o quiz
function startQuiz() {
    document.getElementById('quiz').classList.remove('hidden');
    showQuizQuestion();
}

// Função para mostrar a pergunta do quiz
function showQuizQuestion() {
    const questionElement = document.getElementById('quizQuestion');
    const currentQuizQuestion = quizQuestions[currentQuestion];
    questionElement.textContent = currentQuizQuestion.question;
    // Atualiza os botões de resposta
    const buttons = document.querySelectorAll('#quiz button');
    buttons[0].textContent = currentQuizQuestion.answers[0].text;
    buttons[1].textContent = currentQuizQuestion.answers[1].text;
}

// Função para verificar a resposta do quiz
function checkAnswer(answer) {
    const feedback = document.getElementById('feedback');
    const isCorrect = quizQuestions[currentQuestion].answers.find(a => a.correct && a.text === answer);
    if (isCorrect) {
        feedback.textContent = 'Correto!';
    } else {
        feedback.textContent = 'Incorreto.';
    }
    feedback.classList.remove('hidden');

    // Avança para a próxima pergunta ou finaliza o quiz
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        setTimeout(showQuizQuestion, 1000);
    } else {
        setTimeout(() => {
            feedback.textContent = 'Quiz finalizado!';
            currentQuestion = 0; // Reinicia o quiz
        }, 1000);
    }
}
