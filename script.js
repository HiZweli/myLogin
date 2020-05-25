const users = {Username:'znj@gmail.com' , Password:'12345'};
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

// Here we are going to target our hyperlink
const proceed = document.querySelector('#proceed');
// Here we are going to target our button
const button = document.querySelector('.button');

button.addEventListener('click', function(){
  const emailcontent = emailInput.value;
  const passcontent = passwordInput.value;
  if (emailcontent !== users.Username) {
     event.preventDefault();
    alert('Incorrect password');
  }else if (passcontent !== users.Password) {
     alert('Incorrect password');
     event.preventDefault();
  }else {
    alert('You In');
  }
});
