// user.js

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

// Update Level Buttons and Track Level Progress
function updateNVButtons(user) {
    const NVs = ["A1", "A2", "B1", "B2", "C1", "C2"];
    NVs.forEach((NV, index) => {
        const button = document.getElementById(`NV_${NV}`);
        if (button) {
            if (index === 0 || NV === user.NV || index < NVs.indexOf(user.NV)) {
                if (index > 0) {
                    const previousLevel = NVs[index - 1];
                    const completedCategories = user.completedCategories[previousLevel] || {
                        "Grammaire": false,
                        "Vocabulaire": false,
                        "Compréhension": false
                    };
                    const allCompleted = Object.values(completedCategories).every(status => status === true);
                    if (!allCompleted) {
                        button.classList.remove("level-unlocked");
                        button.classList.add("level-locked");
                        button.disabled = true;
                        button.onclick = () => alert("Ce niveau est verrouillé. Veuillez terminer le niveau précédent.");
                        return;
                    }
                }
                button.classList.remove("level-locked");
                button.classList.add("level-unlocked");
                button.disabled = false;
                button.onclick = () => {
                    startLevel(NV);
                    updateCategoryStatus(user, NV);
                };
            } else {
                button.classList.remove("level-unlocked");
                button.classList.add("level-locked");
                button.disabled = true;
                button.onclick = () => alert("Ce niveau est verrouillé. Veuillez terminer le niveau précédent.");
            }
        }
    });
}

// Move to Next Level with Progress Reset
function moveToNextLevel(user) {
    const NVs = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const currentIndex = NVs.indexOf(user.NV);
    if (currentIndex < NVs.length - 1) {
        const nextLevel = NVs[currentIndex + 1];
        user.NV = nextLevel;
        user.completedCategories[nextLevel] = {
            "Grammaire": false,
            "Vocabulaire": false,
            "Compréhension": false
        };
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem(user.username, JSON.stringify(user));
        updateNVButtons(user);
        updateCategoryStatus(user, nextLevel);
        alert(`Félicitations! Vous avez débloqué le niveau ${nextLevel}.`);
    }
}

// Check if All Categories are Completed and Unlock Next Level
function checkAllCategoriesCompleted(user) {
    const categories = ["Grammaire", "Vocabulaire", "Compréhension"];
    const completedCategories = user.completedCategories[currentLevel] || {};

    // Only move to the next level if all categories are completed
    const allCategoriesCompleted = categories.every(cat => completedCategories[cat] === true);
    if (allCategoriesCompleted) {
        moveToNextLevel(user);
    }

    // Save the user data to ensure persistence
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem(user.username, JSON.stringify(user));
}

// Start Level
function startLevel(level) {
    console.log(`Starting level: ${level}`);
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
    userAnswers = [];

    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('categorySelection').classList.remove('hidden');
    document.getElementById('levelSelected').textContent = `Niveau ${level}`;

    updateCategoryStatus(JSON.parse(currentUserStr), level);
}

// Update Category Status - Ensure data in the UI matches localStorage
function updateCategoryStatus(user, level) {
    const categories = ["Grammaire", "Vocabulaire", "Compréhension"];
    const completedCategories = user.completedCategories[level] || {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
    };

    categories.forEach((category) => {
        const categoryElement = document.getElementById(`category${category}`);
        if (categoryElement) {
            if (completedCategories[category]) {
                // Set category as completed (✔️)
                categoryElement.textContent = "✔️";
                categoryElement.classList.remove("category-invalid");
                categoryElement.classList.add("category-valid");
            } else {
                // Set category as not completed (❌)
                categoryElement.textContent = "❌";
                categoryElement.classList.remove("category-valid");
                categoryElement.classList.add("category-invalid");
            }
        } else {
            console.error(`Category element for ${category} not found.`);
        }
    });

    // Debug output to verify completed categories
    console.log(`Updated category status for level ${level}:`, completedCategories);
}

// Select Category and Start Quiz
function selectCategory(category) {
    console.log(`Category selected: ${category}`);
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    allAnswersCorrect = true;
    userAnswers = [];

    const currentUserStr = localStorage.getItem("currentUser");
    let currentUser;

    try {
        currentUser = JSON.parse(currentUserStr);
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

        if (filteredQuestions.length > 0) {
            document.getElementById('categorySelection').classList.add('hidden');
            startQuiz();
        } else {
            alert("Aucune question disponible dans cette catégorie et niveau.");
        }
    } else {
        console.error("User NV level not found.");
    }
}

// Start Quiz
function startQuiz() {
    document.getElementById('quizStart').classList.add('hidden');
    document.getElementById('quizQuestion').classList.remove('hidden');
    showQuestion();
}

// Show Quiz Question with Timer
function showQuestion() {
    if (currentQuestionIndex < filteredQuestions.length) {
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
        finishCategory(JSON.parse(localStorage.getItem("currentUser")));
    }
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
        score += 10;
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

// Finish Quiz Category - Updated to ensure localStorage sync and UI update
function finishCategory(user) {
    document.getElementById('quizQuestion').classList.add('hidden');

    if (!user.completedCategories) {
        user.completedCategories = {};
    }
    if (!user.completedCategories[currentLevel]) {
        user.completedCategories[currentLevel] = { "Grammaire": false, "Vocabulaire": false, "Compréhension": false };
    }

    if (score === filteredQuestions.length * 10) {
        user.completedCategories[currentLevel][currentCategory] = true;
        alert(`Félicitations! Vous avez complété la catégorie: ${currentCategory} avec succès!`);
    } else {
        alert(`Score insuffisant (${score}/${filteredQuestions.length * 10}). Vous devez obtenir un score de 10/10 pour valider la catégorie.`);
    }

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

    // Save user progress to ensure it persists
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem(user.username, JSON.stringify(user));

    // Re-fetch the user data to ensure synchronization
    const updatedUser = JSON.parse(localStorage.getItem("currentUser")); // Re-fetch to ensure sync
    console.log('Re-fetched updated user after finishing category:', updatedUser);

    // Update the UI to reflect changes
    updateCategoryStatus(updatedUser, currentLevel);
    updateNVButtons(updatedUser);
    checkAllCategoriesCompleted(updatedUser);
}

// Start Timer
function startTimer(duration) {
    timeLeft = duration;
    document.getElementById('timer').textContent = `Temps restant: ${timeLeft} secondes`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Temps restant: ${timeLeft} secondes`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Temps écoulé!");
            selectAnswer(filteredQuestions[currentQuestionIndex], "");
        }
    }, 1000);
}

// Log Out User
function logoutUser() {
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
        const currentUser = JSON.parse(currentUserStr);
        localStorage.removeItem(currentUser.username);
    }
    localStorage.removeItem("currentUser");
    window.location.href = 'first.html';
}
