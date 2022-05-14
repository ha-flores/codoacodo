let text = document.getElementById('text');
let password = document.getElementById('password');
let btn = document.getElementById('submit');
let modal = document.getElementsByClassName('modal');
let modalCloseBtn = document.getElementsByClassName('modal__close-btn');
let modalParagraph = document.getElementsByClassName('modal__paragraph');

btn.addEventListener('click',(e) => {
/*   e.preventDefault(); */

  modal[0].classList.add("modal--show");

  if (text.value == "") {
    modalParagraph[0].innerText = "El usuario debe tener entre 5 y 10 caracteres.";
      e.preventDefault();
  } else if ((text.value).length > 10 ) {
    modalParagraph[0].innerText = "El usuario tiene demasiados caracteres.";
      e.preventDefault();
  } else if ((text.value).length < 5) {
    modalParagraph[0].innerText = "El usuario tiene pocos caracteres.";
      e.preventDefault();
  } else if (!((text.value).includes('@'))) {
    modalParagraph[0].innerText = "El usuario debe incluir al menos un @.";  
      e.preventDefault();  
  } else if (password.value == "" || (password.value).length > 10 || (password.value).length < 5) {
    modalParagraph[0].innerText = "Ingrese una contraseña válida.";
      e.preventDefault();
  }
});

modalCloseBtn[0].addEventListener('click',() => {
  modal[0].classList.remove("modal--show");
});

!(modal[0]).addEventListener('click',() => {
  modal[0].classList.remove("modal--show");
}); 
