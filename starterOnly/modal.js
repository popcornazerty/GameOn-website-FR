function editNav() {
  const x = document.getElementById("myTopnav");
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
/*
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
*/
//TEST PRENOM

/*
const nameValue = document.getElementById("first").value;


function validateForm(){
/*
    if( validateName(nameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.') === true &&  validateSurname(surnameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.') === true){
    
         // Affichage message formulaire valide
    
    }


alert("test")
validateName(nameValue, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');

}


const inputFirstName = document.getElementById('first');
function validateName(first, message){

   if(first === "" || first.length < 2){
    
    errorFirstName.style.color = 'red';
    errorFirstName.style.fontSize = '9px';
    inputFirstName.style.borderColor = 'red';
       return message;
        
   }else{
    inputFirstName.innerText = '';
      inputFirstName.style.borderColor ='#ccc';
       return true;
       
   
   }

}
*/



document.getElementById('btn-sub').addEventListener('click',function(){
//Prénom
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

  if(
    validateName(prenom, errorFirstName, "Merci de renseigner un prenom supérieur à deux caractères") === true
    && validateName(nom, errorLastName, "Merci de renseigner un nom supérieur à deux caractères") === true
    && validateEmail(inputEmail, errorEmail, 'Veuillez entrer une adresse email valide.')
    && validateBirth(inputDate, errorDate, 'Merci de renseigner votre date de naissance')
    && validateQuantity(inputQuantity, errorQuantity, 'Merci de renseigner des chiffres uniquement')
    && validateCity(ville, errorCity, 'Merci de selectionner une ville et de renseigner le nombre de tournois')
    ) {
    // Formulaire valide
    // Ferme la modale inscription 
    const closeModal = document.getElementById('bground1');
    closeModal.style.display = 'none';
    // Ouvre la modale confirmation
    openModalSuccess();

  } else {
    // Erreur dans le formulaire
    alert('Merci de remplir l\'intégralité du formulaire');
  }

});

function validateName(name, domNode, errorMessage) {
  if( name.value === "" || name.value.length < 2) {
      // Lire l'api classList
      name.style.border = "3px solid red";
      domNode.classList.add("errorMessage");
      domNode.innerText = errorMessage;
      return false;
    }  else {
      name.style.border = 'none';
      domNode.classList.remove("errorMessage");
      domNode.innerText = '';
      return true;
    } 
}





// Email



function validateEmail(email, domNode, errorMessage) {
  if(regexEmail(email.value) == false) {
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
  const regex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


//date de naissance
//regex validation date de naissance
function validateDate(date) {
  const regex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
  return regex.test(date);
}

function validateBirth(date, domNode, errorMessage) {
  if(validateDate(date.value) === false) {
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

//verification villes 
/*
let isValid = false;

if (isValid) {
  document.getElementById('btn-sub').disabled = false;
} else {
  document.getElementById('btn-sub').disabled = true;
  errorclick.innerText = 'Merci de cocher au moins une ville';
  errorclick.style.color = 'red';
  errorclick.style.fontSize ='9px';
  //alert('Merci de selectionner une ville et de renseigner le nombre de tournois');
}
*/

// verification valeurs numériques uniquement
//


function validateQuantity(quantity, domNode, errorMessage) {
  quantity.value = parseInt(quantity.value);
  if (quantity.value > 0) {
    console.log("if");
  quantity.style.border = 'none';
  domNode.classList.remove("errorMessage");
  domNode.innerText = '';
  return true; }
  else {

    console.log("else");
    quantity.style.border = "3px solid red";
    domNode.classList.add("errorMessage");
    domNode.innerText = errorMessage;
    return false;
  }
}

function validateCity(city, domNode, errorMessage) {
  let isValid = false;
  for (let c of city) {
    if (c.checked) {
      isValid = true;
    }
  }

  if(isValid) {
    
    domNode.classList.remove("errorMessage");
    domNode.innerText = '';
  } else {
    
    domNode.classList.add("errorMessage");
    domNode.innerText = errorMessage;
  }

  return isValid;
}





////////
function openModalSuccess() {
  const modalSuccess = document.getElementById('modal-success');
  modalSuccess.style.display = "block";
  document.body.style.overflow = 'hidden';
  
}

/*function closeModalSuccess() {
  const modalSuccessBtn = document.getElementById('modal-success-close');
  modalSuccessBtn.onclick = function() {
    const modalSuccess = document.getElementById('modal-success');
    modalSuccess.style.display = "none";
    console.log("close modal success");
    document.body.style.oberflow = 'visible';

  }
}*/

