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
  