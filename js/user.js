// user.js - Enhanced Quiz Application with Score Validation and Detailed Tracking

let filteredQuestions = [];
let currentCategory = '';
let currentQuestionIndex = 0;
let currentLevel = '';
let timer;
let timeLeft;
let score = 0;
let allAnswersCorrect = true;
let userAnswers = []; // To store user answers for reporting

// Initialize User Dashboard
function initializeUserDashboard() {
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
        try {
            const currentUser = JSON.parse(currentUserStr);
            if (currentUser && currentUser.username && currentUser.NV) {
                document.getElementById('username').textContent = `Utilisateur: ${currentUser.username}`;
                updateNVButtons(currentUser);
                updateCategoryStatus(currentUser, currentUser.NV);
                checkAllCategoriesCompleted(currentUser);
            } else {
                alert("User data is incomplete. Please log out and log in again.");
                logoutUser();
            }
        } catch (e) {
            console.error("Error parsing currentUser JSON:", e);
        }
    } else {
        console.error("No current user found in local storage. Redirecting to login.");
        window.location.href = 'first.html';
    }
}

// Update Level Buttons
function updateNVButtons(user) {
    const NVs = ["A1", "A2", "B1", "B2", "C1", "C2"];
    NVs.forEach((NV, index) => {
        const button = document.getElementById(`NV_${NV}`);
        if (button) {
            if (index === 0 || NV === user.NV || index < NVs.indexOf(user.NV)) {
                button.classList.remove("level-locked");
                button.classList.add("level-unlocked", "level-completed");
                button.disabled = false;
                button.onclick = () => {
                    startLevel(NV);
                    updateCategoryStatus(user, NV);
                };
            } else {
                button.classList.remove("level-unlocked", "level-completed");
                button.classList.add("level-locked");
                button.disabled = true;
                button.onclick = () => alert("Ce niveau est verrouillé. Veuillez terminer le niveau précédent.");
            }
        } else {
            console.warn(`Button for level ${NV} not found.`);
        }
    });
}

// Start Level
function startLevel(level) {
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
        const currentUser = JSON.parse(currentUserStr);
        const NVs = ["A1", "A2", "B1", "B2", "C1", "C2"];
        const currentIndex = NVs.indexOf(currentUser.NV);
        const requestedIndex = NVs.indexOf(level);

        if (requestedIndex > currentIndex) {
            alert("Ce niveau est verrouillé. Veuillez terminer le niveau précédent.");
            return;
        }
    }

    currentLevel = level;
    currentCategory = '';
    currentQuestionIndex = 0;
    score = 0;
    allAnswersCorrect = true;
    userAnswers = []; // Reset answers for the new level

    // Increment the attempt count for the level
    incrementLevelAttempt(currentLevel);

    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('categorySelection').classList.remove('hidden');
    document.getElementById('levelSelected').textContent = `Niveau ${level}`;

    updateCategoryStatus(JSON.parse(currentUserStr), level);
}

// Increment Level Attempt Count
function incrementLevelAttempt(level) {
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
        let currentUser = JSON.parse(currentUserStr);
        if (!currentUser.levelAttempts) {
            currentUser.levelAttempts = {};
        }
        if (!currentUser.levelAttempts[level]) {
            currentUser.levelAttempts[level] = 0;
        }
        currentUser.levelAttempts[level] += 1;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
}

// Update Category Status
function updateCategoryStatus(user, level) {
    const categories = ["Grammaire", "Vocabulaire", "Compréhension"];
    categories.forEach((category) => {
        const categoryElement = document.getElementById(`category${category}`);
        if (categoryElement) {
            if (user.completedCategories && user.completedCategories[level] && user.completedCategories[level][category]) {
                categoryElement.textContent = "✔️";
                categoryElement.classList.remove("category-invalid");
                categoryElement.classList.add("category-valid");
            } else {
                categoryElement.textContent = "❌";
                categoryElement.classList.remove("category-valid");
                categoryElement.classList.add("category-invalid");
            }
        } else {
            console.warn(`Category element for ${category} not found.`);
        }
    });
}

// Choose Category
function chooseCategory() {
    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('categorySelection').classList.remove('hidden');
}

// Select Category
function selectCategory(category) {
    console.log(`Category selected: ${category}`);
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    allAnswersCorrect = true;
    userAnswers = []; // Reset user answers for this category

    document.getElementById('categorySelection').classList.add('hidden');
    document.getElementById('quizStart').classList.remove('hidden');
    document.getElementById('selectedCategory').textContent = `${currentCategory} - Niveau ${currentLevel}`;

    const currentUserStr = localStorage.getItem("currentUser");
    let currentUser;

    try {
        currentUser = JSON.parse(currentUserStr);
        console.log("Current user data for selecting category: ", currentUser);
    } catch (e) {
        console.error("Error parsing currentUser JSON while selecting category:", e);
        alert("Error reading user data. Please log out and log in again.");
        logoutUser();
        return;
    }

    if (currentUser && currentUser.NV) {
        filteredQuestions = questions.filter(
            question => question.categ &&
                (question.categ.toLowerCase() === currentCategory.toLowerCase() ||
                 (currentCategory.toLowerCase() === 'vocabulaire' && question.categ.toLowerCase() === 'vocab') ||
                 (currentCategory.toLowerCase() === 'compréhension' && question.categ.toLowerCase() === 'comp')) &&
                question.NV.toLowerCase() === currentLevel.toLowerCase()
        );
    } else {
        console.error("User NV level not found.");
    }

    if (filteredQuestions.length === 0) {
        alert("Aucune question disponible dans cette catégorie et niveau.");
        navigate('dashboard');
    }
}

// Start Quiz
function startQuiz() {
    document.getElementById('quizStart').classList.add('hidden');
    if (filteredQuestions.length > 0) {
        showQuestion();
    } else {
        console.error("No questions available to start quiz.");
    }
}

// Show Quiz Question with Timer
function showQuestion() {
    if (currentQuestionIndex < filteredQuestions.length) {
        document.getElementById('quizQuestion').classList.remove('hidden');
        const currentQuestion = filteredQuestions[currentQuestionIndex];
        document.getElementById('questionText').textContent = currentQuestion.question;
        document.getElementById('questionCount').textContent = `Question ${currentQuestionIndex + 1} sur ${filteredQuestions.length}`;

        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';

        ["option1", "option2", "option3", "option4"].forEach(option => {
            if (currentQuestion[option]) {
                const answerButton = document.createElement('button');
                answerButton.className = "bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition";
                answerButton.textContent = currentQuestion[option];
                answerButton.onclick = () => selectAnswer(currentQuestion, currentQuestion[option]);
                answersContainer.appendChild(answerButton);
            }
        });

        startTimer(60);
    } else {
        finishCategory();
    }
}

// Timer Logic
function startTimer(duration) {
    clearInterval(timer);
    timeLeft = duration;
    document.getElementById('timer').textContent = `Temps restant: ${timeLeft} secondes`;

    timer = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer').textContent = `Temps restant: ${timeLeft} secondes`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Temps écoulé!");
            allAnswersCorrect = false;
            userAnswers.push({ question: filteredQuestions[currentQuestionIndex].question, correct: false, answer: "Temps écoulé" });
            currentQuestionIndex++;
            showQuestion();
        }
    }, 1000);
}

// Handle Answer Selection
function selectAnswer(question, selectedAnswer) {
    clearInterval(timer);
    const isCorrect = (question.correctOption === selectedAnswer);
    userAnswers.push({
        question: question.question,
        correct: isCorrect,
        answer: selectedAnswer,
        correctAnswer: question.correctOption
    });

    if (isCorrect) {
        score += 1;
    } else {
        allAnswersCorrect = false;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        showQuestion();
    } else {
        finishCategory(JSON.parse(localStorage.getItem("currentUser")));
    }
}

// Finish Quiz Category
function finishCategory(user) {
    document.getElementById('quizQuestion').classList.add('hidden');

    if (!user.completedCategories) {
        user.completedCategories = {};
    }
    if (!user.completedCategories[currentLevel]) {
        user.completedCategories[currentLevel] = { "Grammaire": false, "Vocabulaire": false, "Compréhension": false };
    }

    // Only mark the category as completed if the user scored 10/10
    if (score === 10) {
        user.completedCategories[currentLevel][currentCategory] = true;
    } else {
        alert(`Score insuffisant (${score}/10). Vous devez obtenir un score de 10/10 pour valider la catégorie.`);
    }
    
    // Save Quiz Report Data
    if (!user.reports) {
        user.reports = {};
    }
    if (!user.reports[currentLevel]) {
        user.reports[currentLevel] = {};
    }
    user.reports[currentLevel][currentCategory] = {
        questions: userAnswers,
        score: score,
        level: currentLevel,
        attempts: user.levelAttempts ? user.levelAttempts[currentLevel] : 1
    };

    localStorage.setItem("currentUser", JSON.stringify(user));

    updateCategoryStatus(user, currentLevel);
    checkAllCategoriesCompleted(user);
}

// Check if All Categories are Completed and Unlock Next Level
function checkAllCategoriesCompleted(user) {
    if (user.completedCategories[currentLevel] && Object.values(user.completedCategories[currentLevel]).every(val => val) && user.NV !== "C2") {
        moveToNextLevel(user);
    }
}

// Move to Next Level
function moveToNextLevel(user) {
    const NVs = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const currentIndex = NVs.indexOf(user.NV);
    if (currentIndex < NVs.length - 1) {
        user.NV = NVs[currentIndex + 1];
        if (!user.completedCategories[user.NV]) {
            user.completedCategories[user.NV] = { "Grammaire": false, "Vocabulaire": false, "Compréhension": false };
        }
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Félicitations! Vous avez débloqué le niveau ${user.NV}`);
        updateNVButtons(user);
        startLevel(user.NV);
    } else {
        alert("Vous avez terminé tous les niveaux disponibles !");
    }
}

// Logout User
function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = 'first.html';
}