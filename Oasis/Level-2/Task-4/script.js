document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); 
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('signupSuccess').style.display = 'block';
});
