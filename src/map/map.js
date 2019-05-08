import api from '../services/api.js';

const username = document.getElementById('username');
const userClass = document.getElementById('class');
const health = document.getElementById('health');
const gold = document.getElementById('gold');

const user = api.getUser();

if(!user) {
  window.location = '../../';
}

username.textContent = user.username;
userClass.textContent = user.class;
health.textContent = 'Health: ' + user.health;
gold.textContent = 'Gold: ' + user.gold;