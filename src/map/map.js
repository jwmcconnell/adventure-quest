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
health.textContent = 'Health: ' + user.health;
power.textContent = 'Power: ' + user.power;
gold.textContent = 'Gold: ' + user.gold;