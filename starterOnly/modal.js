function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

document.getElementById('editNav').addEventListener("click", editNav);
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalSuccess = document.querySelector(".modal-success");
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
// Fermeture modale de fin
modalSuccess.addEventListener('click', function() {
  closeModal();
});

function closeModal() {
  modalbg.style.display = "none";
  modalSuccess.style.display = "none";
  document.body.style.overflow = 'visible';
}



//Submission du formulaire 
document.getElementById('btn-sub').addEventListener('click', function() {
  
  const prenom = document.getElementById("firstName");
  const nom = document.getElementById("lastName");
  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const inputEmail = document.getElementById('email');
  const errorEmail = document.getElementById('errorEmail');
  const inputDate = document.getElementById('birthdate');
  const errorDate = document.getElementById('errorDate');
  const inputQuantity = document.getElementById('quantity');
  const errorQuantity = document.getElementById('errorQuantity');
  const ville = document.getElementsByClassName("city");
  const errorCity = document.getElementById("errorCity");
  const usageCondition = document.getElementById('checkbox1');
  const errorCondition = document.getElementById('errorCheckbox');


// si les conditions suivantes sont remplies, sinon renvoie du message d'erreur associé 
  if (
      validateName(prenom, errorFirstName, "Merci de renseigner un prenom supérieur à deux caractères") === true &&
      validateName(nom, errorLastName, "Merci de renseigner un nom supérieur à deux caractères") === true &&
      validateEmail(inputEmail, errorEmail, 'Veuillez entrer une adresse email valide.') &&
      validateBirth(inputDate, errorDate, 'Merci de renseigner votre date de naissance') &&
      validateQuantity(inputQuantity, errorQuantity, 'Merci de renseigner des chiffres uniquement') &&
      validateCity(ville, errorCity, 'Merci de selectionner une ville et de renseigner le nombre de tournois') &&
      validateCondition(usageCondition, errorCondition, 'merci d\'accepter les conditions d\'utilisation')) {
      // Formulaire valide
      // Ferme la modale inscription 
      const closeModal = document.getElementById('bground1');
      closeModal.style.display = 'none';
      // Ouvre la modale confirmation
      openModalSuccess();

  } else {
      // le champ associé est valide
      
  }

});

function validateName(name, domNode, errorMessage) {
  if (name.value === "" || name.value.length < 2) {
      name.style.border = "3px solid red";
      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
      return false;
  } else {
      name.style.border = 'none';
      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
      return true;
  }
}




// Email
function validateEmail(email, domNode, errorMessage) {
  if (regexEmail(email.value) == false) {
      // Lire l'api classList
      email.style.border = "3px solid red";
      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
      return false;

  } else {
      email.style.border = 'none';
      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
      return true;

  }
}

// regex validation email 
function regexEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



//regex validation date de naissance
function validateDate(date) {
  const regex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
  return regex.test(date);
}

function validateBirth(date, domNode, errorMessage) {
  if (validateDate(date.value) === false) {
      date.style.border = "3px solid red";
      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
      return false;
  } else {
      date.style.border = 'none';
      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
      return true;
  }
}



// verification valeurs numériques uniquement
//


function validateQuantity(quantity, domNode, errorMessage) {
  quantity.value = parseInt(quantity.value);
  if (quantity.value > 0) {
      quantity.style.border = 'none';
      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
      return true;
  } else {

      console.log("else");
      quantity.style.border = "3px solid red";
      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
      return false;
  }
}
// Verification si une ville est bien selectionnée, sinon renvoie message d'erreur
function validateCity(city, domNode, errorMessage) {
  let isValid = false;
  for (let c of city) {
      if (c.checked) {
          isValid = true;
      }
  }

  if (isValid) {

      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
  } else {

      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
  }

  return isValid;
}


// Checkbox Validation 
function validateCondition(usageCondition, domNode, errorMessage) {
  let checked = true;
  if (usageCondition.checked) {
      usageCondition.style.border = 'none';
      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
      return true;

  } else {
      usageCondition.style.border = "3px solid red";
      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
      //conditionUtilisation.style.color = 'red';
      return false;

  }
}


////////
function openModalSuccess() {
  const modalSuccess = document.getElementById('modal-success');
  modalSuccess.style.display = "block";
  document.body.style.overflow = 'hidden';

}
