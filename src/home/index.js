import makeUser from './make-user.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(userForm);
  const user = makeUser(formData);
  console.log(user);
});