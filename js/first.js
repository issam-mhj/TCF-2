// Show and hide sections
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

// Generate unique ID
function generateRandomId() {
  return '' + Date.now();
}

  // Sign up user and save to local storage
  function signUpUser() {
    const username = document.getElementById('signupUsername').value;
    if (!username) {
      alert("Please enter a username");
      return;
    }
  }

// Sign up user and save to local storage
function signUpUser() {
  const username = document.getElementById('signupUsername').value;
  if (!username) {
      alert("Please enter a username");
      return;
  }

  // Check if user already exists
  if (localStorage.getItem(username)) {
      alert("Username already exists. Please choose a different one.");
      return;
  }

  // Store user in local storage with initial data
  const user = {
      username: username,
      NV: "A1", // Default level for new users
      score: 0,
      completedCategories: {
          "Grammaire": false,
          "Vocabulaire": false,
          "Compréhension": false
      }
  };

  // Store user data as a JSON string
  localStorage.setItem(username, JSON.stringify(user));
  // Set current user for session
  localStorage.setItem("currentUser", JSON.stringify(user));
  alert("Sign up successful! You can now log in.");
  document.getElementById('signupUsername').value = '';
  window.location.href = 'user.html'; // Redirect directly after sign up
}

// Login user by checking local storage
function loginUser() {
  const username = document.getElementById('loginUsername').value;
  if (!username) {
      alert("Please enter your username");
      return;
  }

  // Check if user exists in local storage
  const userStr = localStorage.getItem(username);
  if (userStr) {
      alert("Login successful! Welcome, " + username);

      // Parse user data and store as "currentUser" for the session
      localStorage.setItem("currentUser", userStr);

      // Redirect to user.html
      window.location.href = 'user.html';
  } else {
      alert("Username not found. Please sign up first.");
  }
}
