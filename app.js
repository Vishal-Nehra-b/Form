let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fullName = document.getElementById('name').value;
    let mobileNumber = document.getElementById('mobile').value;
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value;
    console.log(fullName, mobileNumber, email, password);
    alert('your record has been sumited');
});