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
  
  //function dyal ID

  function generateRandomId() {
    return '' + Date.now();
  }

  const nvCompte = document.getElementById("btnSignUP");
  const userName = document.getElementById("userName");
  const usersData = window.localStorage;
  let countUsers = 0;

  //fach ghaykliki 3la sign up

  nvCompte.addEventListener("click", function() {
    const userValue = userName.value; 
    usersData.setItem(`user${countUsers+1}`, userValue);
    usersData.setItem(`userID${countUsers+1}`, generateRandomId());
    displayquiz();
    countUsers++;
  });
  
  const userInterface = document.getElementById("userInterface"); 
  function displayquiz(){ 
    document.getElementById('signUP').classList.add('hidden');
    userInterface.style.display = "flex";
  }