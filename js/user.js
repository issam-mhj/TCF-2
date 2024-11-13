document.addEventListener("DOMContentLoaded", async () => {
    // Fetch questions from tests.js file
    try {
        console.log("Fetching questions...");
        const response = await fetch('tests.js');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        
        // Extract the questions array from the fetched text
        const questionsFunction = new Function(text + '; return questions;');
        const questions = questionsFunction();

        if (Array.isArray(questions)) {
            console.log("Questions successfully fetched:", questions);

            // Save questions to be used later
            window.fetchedQuestions = questions;

            // Proceed with the rest of the initialization
            const currentUser = localStorage.getItem("currentUser");
            if (currentUser) {
                const user = JSON.parse(localStorage.getItem(currentUser));
                document.getElementById('username').textContent = `Utilisateur: ${user.username}`;
                updateNVButtons(user);
                updateCategoryStatus(user);
            }
        } else {
            console.error("No questions array found in fetched content.");
        }
    } catch (error) {
        console.error("Failed to fetch questions:", error);
    }
});

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

let currentCategory = '';
let currentQuestionIndex = 0;
let filteredQuestions = [];

function chooseCategory() {
    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('categorySelection').classList.remove('hidden');
}

function selectCategory(category) {
    console.log("Category selected:", category);
    currentCategory = category;
    currentQuestionIndex = 0;
    document.getElementById('categorySelection').classList.add('hidden');

    // Filter questions based on selected category
    filteredQuestions = window.fetchedQuestions.filter(
        question => question.categ && question.categ.toLowerCase() === currentCategory.toLowerCase()
    );

    console.log("Filtered questions:", filteredQuestions);

    if (filteredQuestions.length > 0) {
        showQuestion();
    } else {
        alert("Aucune question disponible dans cette catégorie. Veuillez vérifier avec l'administrateur.");
        navigate('dashboard');
    }
}

function showQuestion() {
    console.log("Displaying question at index:", currentQuestionIndex);
    document.getElementById('quizQuestion').classList.remove('hidden');
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    
    if (!currentQuestion) {
        console.error("No current question found.");
        return;
    }

    document.getElementById('questionText').textContent = currentQuestion.question;
    document.getElementById('questionCount').textContent = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    ["option1", "option2", "option3", "option4"].forEach(option => {
        if (currentQuestion[option]) {
            answersContainer.innerHTML += `
                <button onclick="selectAnswer('${currentQuestion.correctOption}', '${currentQuestion[option]}')" 
                class="bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition">
                    ${currentQuestion[option]}
                </button>
            `;
        }
    });
}

function selectAnswer(correctAnswer, selectedAnswer) {
    console.log(`Answer selected: ${selectedAnswer}, Correct answer: ${correctAnswer}`);
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        let user = JSON.parse(localStorage.getItem(currentUser));

        if (correctAnswer === selectedAnswer) {
            console.log("Correct answer selected.");
            user.score++;
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

function finishCategory(user) {
    console.log("Category quiz finished for:", currentCategory);
    document.getElementById('quizQuestion').classList.add('hidden');
    user.completedCategories[currentCategory] = true;
    localStorage.setItem(user.username, JSON.stringify(user));
    updateCategoryStatus(user);
    alert(`Quiz terminé pour ${currentCategory}!`);
    navigate('dashboard');
}

function navigate(section) {
    console.log("Navigating to section:", section);
    document.getElementById('welcomeCard').classList.remove('hidden');
    document.getElementById('categorySelection').classList.add('hidden');
    document.getElementById('quizQuestion').classList.add('hidden');
}

function logoutUser() {
    console.log("User logged out.");
    localStorage.removeItem("currentUser");
    window.location.href = 'first.html';
}
