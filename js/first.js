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

  // Sign up user and save to local storage
  function signUpUser() {
    const username = document.getElementById('signupUsername').value;
    if (!username) {
      alert("Please enter a username");
      return;
    }

  let countUsers = 0;
  
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

    // Store user in local storage
    localStorage.setItem(username, JSON.stringify({ username}));
    localStorage.setItem(`userID${countUsers}`, generateRandomId());
    alert("Sign up successful! You can now log in.");
    document.getElementById('signupUsername').value = '';
    backToMain();
    countUsers++;
  }

  // Login user by checking local storage
  function loginUser() {
    const username = document.getElementById('loginUsername').value;
    if (!username) {
      alert("Please enter your username");
      return;
    }

    // Check if user exists in local storage
    if (localStorage.getItem(username)) {
      alert("Login successful! Welcome, " + username);
      document.getElementById('loginUsername').value = '';
      // Redirect to another page or show a message as per requirement
    } else {
      alert("Username not found. Please sign up first.");
    }
  }