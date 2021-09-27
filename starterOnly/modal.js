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

  // Nom 
  const inputLastName = document.getElementById('last');
  const errorLastName = document.getElementById('lastError');
  
  if (inputLastName.value.length < 2) {
    errorLastName.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    // Styles
    errorLastName.style.color = 'red';
    errorLastName.style.fontSize = '9px';
    inputLastName.style.borderColor = 'red';
  } else {
    errorLastName.innerText = '';
    inputLastName.style.borderColor ='#ccc';
  }
  // Email
  const inputEmail = document.getElementById('email');
  const errorEmail = document.getElementById('errorEmail');
  //console.log(validateEmail('toto@titi.com'));
  //console.log(validateEmail('toto@'));
  //console.log(validateEmail('toto@t@iti.com'));
  
  if (validateEmail(inputEmail.value)) {
    errorEmail.innerText = '';
    inputEmail.style.borderColor ='#ccc';
    inputEmail.style.backgroundColor ='#fff';
    // CSS à faire

  } else {
    errorEmail.innerText = 'Veuillez entrer une adresse email valide.';
    // Styles
    errorEmail.style.color = 'red';
    errorEmail.style.fontSize = '9px';
    inputEmail.style.borderColor = 'red';
  }

  // Date de naissance
  const inputDate = document.getElementById('birthdate');
  const errorDate = document.getElementById('errorDate');
  if (validateDate(inputDate.value)){
    errorDate.innerText = '';
    inputDate.style.borderColor =''
  } else {
    errorDate.innerText = 'Merci de renseigner votre date de naissance';
    // Styles
    errorDate.style.color = 'red';
    errorDate.style.fontSize ='9px';
    inputDate.style.borderColor = 'red';
  }
}

document.getElementsByClassName('btn-submit')[0].onclick = function() {
  submitModal();
}
// regex validation email 
function validateEmail(email) {
  const regex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
//regex validation date de naissance
function validateDate(date) {
  const regex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
  return regex.test(date);
}
// Vérifications de l'acceptation des termes et conditions

/*
const inputCheckbox = document.getElementById('checkbox1');
const errorCheckbox = document.getElementById ('errorCheckbox');
if (validateCheckbox(inputCheckbox.value.checked = true)){
  
}
else{
  errorCheckbox.innerText = 'Veuillez accepter les termes et conditions';
}
*/

function validate() {
  if (document.getElementById('checkbox1').checked) {
      alert("checked");
  } else {
      alert("You didn't check it! Let me check it for you.");
  }
}





