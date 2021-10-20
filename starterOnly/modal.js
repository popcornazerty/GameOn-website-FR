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
const modalSuccess = document.querySelector(".modal-success");
// action de fermeture modal
const closeModalBtn = document.querySelectorAll(".close");
// test 




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", function() {
  
  launchModal();
}));
// Fermer modal event



/////////
// launch modal form

function launchModal() {
  modalbg.style.display = "block";
  document.body.style.overflow = 'hidden';
}

// Attache un événement aux éléments contenue dans closeModalBtn (toutes les classes .close)
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));


function closeModal() {
  modalbg.style.display = "none";
  modalSuccess.style.display = "none";
  document.body.style.overflow = 'visible';
}

// vider autofill background des input

//////////
// Valider la modal
function submitModal() {
  let validateForm = true;
  // Prénom
  const inputFirstName = document.getElementById('first');
  const errorFirstName = document.getElementById('firstError');
  if (inputFirstName.value.length < 2) {
    errorFirstName.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    // Styles
    errorFirstName.style.color = 'red';
    errorFirstName.style.fontSize = '9px';
    inputFirstName.style.borderColor = 'red';
    validateForm = false;
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
    validateForm = false;
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
    

  } else {
    errorEmail.innerText = 'Veuillez entrer une adresse email valide.';
    // Styles
    errorEmail.style.color = 'red';
    errorEmail.style.fontSize = '9px';
    inputEmail.style.borderColor = 'red';
    validateForm = false;
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
    validateForm = false;
  }
 

// Verification qu'au moins une ville est cochée si le nombre de tournois est > 1
/*
const nombreDeTournois = document.getElementById('quantity');
let isValid = false;
if (nombreDeTournois.value > 0) {
 const checkboxInput = document.getElementsByClassName('city');
 for (let checkbox of checkboxInput) {
   if (checkbox.checked) {
     isValid = true;
   }
 }
}

if (isValid) {// quantité > 0 ET au moins une ville de cocher
  // Pas d'erreur (formulaire valide)
  document.getElementById('btn-sub').disabled = false;
} else {
  // Erreur
  alert('Merci de selectionner une ville et de renseigner le nombre de tournois');
  document.getElementById('btn-sub').disabled = true;
}
*/




// verification valeurs numériques uniquement
//

const inputQuantity = document.getElementById('quantity');
const errorQuantity = document.getElementById('errorQuantity');
if (validateNumber(inputQuantity.value)){
  errorQuantity.innerText = '';
  inputQuantity.style.borderColor =''
} else {
  errorQuantity.innerText = 'Merci de renseigner des chiffres uniquement';
  // Styles
  errorQuantity.style.color = 'red';
  errorQuantity.style.fontSize ='9px';
  inputQuantity.style.borderColor = 'red';
  validateForm = false;
}


//regex validation quantité
function validateNumber(quantity) {
    
    alert(Number.isInteger(quantity))

}
 //OR
/*
 function validateNumber(quantity) {
  const regex = /^[\s\d]*$/;
  return regex.test(quantity);
  }
*/


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
  // changement couleur texte rouge si non acceptation conditions 
  const erreurUtilisation = document.getElementById("conditionUtilisation");
  if (document.getElementById('checkbox1').checked == false) {
    alert("Merci ce cocher la case \"J'ai lu et accepté les conditions d'utilisation.\"");
    erreurUtilisation.style.color = 'red';
    validateForm = false;
  } 
  if(validateForm) {
    // redirection
    closeModal();
    openModalSuccess();
    closeModalSuccess(); 
    document.getElementById('form-inscription').reset(); 
  }

}


function openModalSuccess() {
  const modalSuccess = document.getElementById('modal-success');
  modalSuccess.style.display = "block";
  document.body.style.overflow = 'hidden';
  
}

function closeModalSuccess() {
  const modalSuccessBtn = document.getElementById('modal-success-close');
  modalSuccessBtn.onclick = function() {
    const modalSuccess = document.getElementById('modal-success');
    modalSuccess.style.display = "none";
    console.log("close modal success");
    document.body.style.oberflow = 'visible';

  }
}


document.querySelector(".btn-submit").onclick = function() {
  submitModal();
};
