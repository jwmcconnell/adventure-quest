import api from '../services/api.js';

const username = document.getElementById('username');
const userClass = document.getElementById('class');
const health = document.getElementById('health');
const power = document.getElementById('power');
const gold = document.getElementById('gold');

const user = api.getUser();

if(!user) {
  window.location = '../../';
}

username.textContent = user.username;
userClass.textContent = user.class;
health.textContent = user.health;
power.textContent = user.power;
gold.textContent = user.gold;