document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-quiz');
    const nextButton = document.getElementById('next-question');
    const restartButton = document.getElementById('restart-quiz');
    const questionContainer = document.getElementById('question-section');
    const questionElement = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answers-container');
    const resultContainer = document.getElementById('result-section');
    const scoreMessage = document.getElementById('final-score');
    const levelDescription = document.getElementById('level-description');
    const questionStatus = document.getElementById('question-status');

    let shuffledQuestions, currentQuestionIndex;
    let score = 0;

    const questions = [
        {
            question: "Quel est l'équivalent de l'expression 'avoir faim' en anglais ?",
            answers: [
                { text: "To be hungry", correct: true },
                { text: "To be thirsty", correct: false },
                { text: "To be tired", correct: false },
                { text: "To be happy", correct: false }
            ]
        },
        {
            question: "Complétez la phrase : Je suis allé ____ cinéma hier soir.",
            answers: [
                { text: "à la", correct: false },
                { text: "au", correct: true },
                { text: "aux", correct: false },
                { text: "de", correct: false }
            ]
        },
        {
            question: "Quel est le féminin de 'acteur' ?",
            answers: [
                { text: "Acteur", correct: false },
                { text: "Actrice", correct: true },
                { text: "Acteuse", correct: false },
                { text: "Actreuse", correct: false }
            ]
        },
        {
            question: "Quelle phrase est correcte ?",
            answers: [
                { text: "Nous allons à la plage.", correct: true },
                { text: "Nous va à la plage.", correct: false },
                { text: "Nous allent à la plage.", correct: false },
                { text: "Nous allons au plage.", correct: false }
            ]
        },
        {
            question: "Quel pronom convient pour remplacer 'les enfants' ?",
            answers: [
                { text: "Elle", correct: false },
                { text: "Ils", correct: true },
                { text: "Il", correct: false },
                { text: "Elles", correct: false }
            ]
        },
        {
            question: "Quel est l'antonyme de 'facile' ?",
            answers: [
                { text: "Simple", correct: false },
                { text: "Difficile", correct: true },
                { text: "Rapide", correct: false },
                { text: "Lent", correct: false }
            ]
        },
        {
            question: "Quel est l'imparfait du verbe 'manger' à la première personne du singulier ?",
            answers: [
                { text: "Je mangerai", correct: false },
                { text: "Je mangeais", correct: true },
                { text: "Je mangera", correct: false },
                { text: "Je mange", correct: false }
            ]
        },
        {
            question: "Que signifie l'expression 'mettre la table' ?",
            answers: [
                { text: "Préparer la table pour un repas", correct: true },
                { text: "Nettoyer la table", correct: false },
                { text: "Déplacer la table", correct: false },
                { text: "Réparer la table", correct: false }
            ]
        },
        {
            question: "Quel est le passé composé du verbe 'finir' pour 'ils' ?",
            answers: [
                { text: "Ils finirent", correct: false },
                { text: "Ils finissaient", correct: false },
                { text: "Ils ont fini", correct: true },
                { text: "Ils ont finis", correct: false }
            ]
        },
        {
            question: "Quel mot est un adverbe ?",
            answers: [
                { text: "Rapide", correct: false },
                { text: "Rapidement", correct: true },
                { text: "Rapiement", correct: false },
                { text: "Rapider", correct: false }
            ]
        }
    ];

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    restartButton.addEventListener('click', restartQuiz);

    function startQuiz() {
        startButton.parentElement.classList.add('hidden');
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        score = 0;
        questionContainer.classList.remove('hidden');
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        questionStatus.innerText = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
        const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5); // Shuffle the answers before displaying
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('answer-button');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        nextButton.classList.add('hidden');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        setStatusClass(selectedButton, correct);
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
            button.disabled = true;
        });
        if (correct) {
            score++;
        }
        nextButton.classList.remove('hidden');
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('incorrect');
    }

    function showResults() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreMessage.innerText = `Votre score est de ${score} sur ${questions.length}`;
        let level = '';
        if (score <= 3) {
            level = 'Niveau A1';
        } else if (score <= 6) {
            level = 'Niveau B1';
        } else if (score <= 8) {
            level = 'Niveau B2';
        } else {
            level = 'Niveau C1';
        }
        levelDescription.innerText = `Votre niveau estimé est : ${level}`;
    }

    function restartQuiz() {
        resultContainer.classList.add('hidden');
        startButton.parentElement.classList.remove('hidden');
    }
});
