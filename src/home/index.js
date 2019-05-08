import makeUser from './make-user.js';
import api from '../services/api.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(userForm);
  const user = makeUser(formData);

  api.signUp(user);

  window.location = '../../src/map/';
});