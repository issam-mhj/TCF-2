let users = JSON.parse(localStorage.getItem("users")) || [];

function showLogin() {
  document.getElementById('logOrSign').classList.add('hidden');
  document.getElementById('signUP').classList.add('hidden');
  document.getElementById('signIN').classList.remove('hidden');
}

function showSignUp() {
  document.getElementById('logOrSign').classList.add('hidden');
  document.getElementById('signIN').classList.add('hidden');
  document.getElementById('signUP').classList.remove('hidden');
}

function backToMain() {
  document.getElementById('signIN').classList.add('hidden');
  document.getElementById('signUP').classList.add('hidden');
  document.getElementById('logOrSign').classList.remove('hidden');
}

function generateRandomId() {
  return '' + Date.now();
}

function saveUsers(usersArray) {
  localStorage.setItem("users", JSON.stringify(usersArray));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function updateUser(updatedUser) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex(u => u.username === updatedUser.username);
  if (index !== -1) {
    users[index] = updatedUser;
    saveUsers(users);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  }
}

function signUpUser() {
  const username = document.getElementById('signupUsername').value.trim();
  if (!username) {
    alert("Please enter a username");
    return;
  }

  if (users.some(user => user.username === username)) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  const newUser = {
    userNum: users.length + 1,
    username: username,
   reports: {
  A1: {},
  A2: {},
  B1: {},
  B2: {},
  C1: {},
  C2: {}
},
    NV: "A1",
    completedCategories: {
      "A1": {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
      },
      "A2": {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
      },
      "B1": {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
      },
      "B2": {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
      },
      "C1": {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
      },
      "C2": {
        "Grammaire": false,
        "Vocabulaire": false,
        "Compréhension": false
      }
    },
    scores: [],
    quizAttempts: [],
    questionHistory: {
      A1: [], A2: [], B1: [], B2: [], C1: [], C2: []
    },
    scoreInLevel: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 },
    attemptsByLevel: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
  };

  users.push(newUser);
  saveUsers(users);
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  alert("Sign up successful! Welcome to the quiz.");
  window.location.href = 'user.html';
}

function loginUser() {
  const username = document.getElementById('loginUsername').value.trim();
  if (!username) {
    alert("Please enter your username");
    return;
  }

  const user = users.find(user => user.username === username);
  if (user) {
    alert("Login successful! Welcome, " + username);

    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = 'user.html';
  } else {
    alert("Username not found. Please sign up first.");
  }
}

function goAdminPage(){
  window.location.href = 'loginadmin.html';
}