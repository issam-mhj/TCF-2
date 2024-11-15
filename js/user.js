// Declare filteredQuestions as a global variable so it can be accessed by multiple functions
let filteredQuestions = [];
let currentCategory = '';
let currentQuestionIndex = 0;

// Initialize User Dashboard
function initializeUserDashboard() {
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
        try {
            const currentUser = JSON.parse(currentUserStr);
            console.log("Current User: ", currentUser);
            if (currentUser && currentUser.username && currentUser.NV) {
                document.getElementById('username').textContent = `Utilisateur: ${currentUser.username}`;
                updateNVButtons(currentUser);
                updateCategoryStatus(currentUser);
            } else {
                console.error("User NV level not found or incomplete user data.");
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
        const button = document.getElementById(`NV${NV}`);
        if (index === 0 || (user.NV === NVs[index - 1] && user.completedCategories[user.NV])) {
            button.classList.remove("level-locked");
            button.classList.add("level-unlocked");
            button.disabled = false;
        } else {
            button.classList.remove("level-unlocked");
            button.classList.add("level-locked");
            button.disabled = true;
        }
    });
}

// Update Category Status
function updateCategoryStatus(user) {
    const categories = ["Grammaire", "Vocabulaire", "Compréhension"];
    categories.forEach((category) => {
        const categoryElement = document.getElementById(`category${category}`);
        if (user.completedCategories[category]) {
            categoryElement.textContent = "✔️";
            categoryElement.classList.remove("category-invalid");
            categoryElement.classList.add("category-valid");
        } else {
            categoryElement.textContent = "❌";
            categoryElement.classList.remove("category-valid");
            categoryElement.classList.add("category-invalid");
        }
    });
}

// Choose Category
function chooseCategory() {
    console.log("Choosing category...");
    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('categorySelection').classList.remove('hidden');
}

// Select Category
function selectCategory(category) {
    console.log(`Category selected: ${category}`);
    currentCategory = category;
    currentQuestionIndex = 0;
    document.getElementById('categorySelection').classList.add('hidden');
    document.getElementById('quizStart').classList.remove('hidden');
    document.getElementById('selectedCategory').textContent = currentCategory;

    // Retrieve current user and filter questions based on selected category and user's NV level
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
            question => question.categ && question.categ.toLowerCase() === currentCategory.toLowerCase() && question.NV === currentUser.NV
        );
        console.log("Filtered questions: ", filteredQuestions);
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
    console.log("Starting quiz...");
    document.getElementById('quizStart').classList.add('hidden');
    if (filteredQuestions.length > 0) {
        showQuestion();
    } else {
        console.error("No questions available to start quiz.");
    }
}

// Show Quiz Question
function showQuestion() {
    console.log("Showing question...");
    if (currentQuestionIndex < filteredQuestions.length) {
        document.getElementById('quizQuestion').classList.remove('hidden');
        const currentQuestion = filteredQuestions[currentQuestionIndex];
        console.log("Current Question: ", currentQuestion);

        document.getElementById('questionText').textContent = currentQuestion.question;
        document.getElementById('questionCount').textContent = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;

        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';

        ["option1", "option2", "option3", "option4"].forEach(option => {
            if (currentQuestion[option]) {
                const answerButton = document.createElement('button');
                answerButton.className = "bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition";
                answerButton.textContent = currentQuestion[option];
                answerButton.onclick = () => selectAnswer(currentQuestion.correctOption, currentQuestion[option]);
                answersContainer.appendChild(answerButton);
            }
        });
    } else {
        console.error("No more questions available.");
        showResults();
    }
}

// Handle Answer Selection
function selectAnswer(correctAnswer, selectedAnswer) {
    console.log(`Answer selected: ${selectedAnswer}, Correct answer: ${correctAnswer}`);
    const currentUserStr = localStorage.getItem("currentUser");
    if (currentUserStr) {
        let user = JSON.parse(currentUserStr);

        if (correctAnswer === selectedAnswer) {
            user.score++;
            console.log("Correct answer selected. Score: ", user.score);
        } else {
            console.log("Incorrect answer selected.");
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < filteredQuestions.length) {
            showQuestion();
        } else {
            finishCategory(user);
        }
    }
}

// Finish Quiz Category
function finishCategory(user) {
    console.log("Finishing category quiz...");
    document.getElementById('quizQuestion').classList.add('hidden');
    user.completedCategories[currentCategory] = true;
    localStorage.setItem(user.username, JSON.stringify(user));
    updateCategoryStatus(user);
    alert(`Quiz terminé pour ${currentCategory}!`);
    navigate('dashboard');
}

// Navigate Between Sections
function navigate(section) {
    console.log(`Navigating to section: ${section}`);
    document.getElementById('welcomeCard').classList.remove('hidden');
    document.getElementById('categorySelection').classList.add('hidden');
    document.getElementById('quizQuestion').classList.add('hidden');
    document.getElementById('quizStart').classList.add('hidden');
}

// Logout User
function logoutUser() {
    console.log("User logged out.");
    localStorage.removeItem("currentUser");
    window.location.href = 'first.html';
}
