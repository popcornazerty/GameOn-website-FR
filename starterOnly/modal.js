function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modal
function closeModal() {
  console.log('ICI');
  modalbg.style.display = "none";
}

// Fermer la modal (event)
document.getElementsByClassName('close')[0].onclick = function() {
  closeModal();
};

// Valider la modal
function submitModal() {
  // Prénom
  const inputFirstName = document.getElementById('first');
  const errorFirstName = document.getElementById('firstError');
  if (inputFirstName.value.length < 2) {
    errorFirstName.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    // Styles
    errorFirstName.style.color = 'red';
    errorFirstName.style.fontSize = '9px';
    inputFirstName.style.borderColor = 'red';
  } else {
    errorFirstName.innerText = '';
    inputFirstName.style.borderColor ='#ccc';
  }

  // Nom ... à faire

  // Email
  const inputEmail = document.getElementById('email');
  const errorEmail = document.getElementById('emailError');
  //console.log(validateEmail('toto@titi.com'));
  //console.log(validateEmail('toto@'));
  //console.log(validateEmail('toto@t@iti.com'));
  
  if (validateEmail(inputEmail.value)) {
    errorEmail.innerText = '';
    // CSS à faire

  } else {
    errorEmail.innerText = 'Veuillez entrer une adresse email valide';
    // CSS à faire
  }

  // Date de naissance
  const inputDate = document.getElementById('birthdate');
  const errorDate = document.getElementById('errorDate');
  if (validateDate(inputDate.value)){
    errorDate.innerText = 'valide';
  } else {
    errorDate.innerText = 'Vous devez entrer votre date de naissance au format DD/MM/YYYY';
  }
}

document.getElementsByClassName('btn-submit')[0].onclick = function() {
  submitModal();
}

function validateEmail(email) {
  const regex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateDate(date) {
  const regex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
  return regex.test(date);
}