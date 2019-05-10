import loadProfile from '../load-profile.js';
import scoreHealth from './score-health.js';
import scoreGold from './score-gold.js';
import isDead from '../map/is-dead.js';
import api from '../services/api.js';
import goldDictionary from './gold-dictionary.js';
import healthDictionary from './health-dictionary.js';

loadProfile();

const resultMessage = document.getElementById('game-result');

const user = api.getUser();
const isDeadStatus = isDead(user);
const healthScore = scoreHealth(user);
const goldScore = scoreGold(user);

let healthMessage = null;
let goldMessage = null;

if(isDeadStatus) {
  goldMessage = goldDictionary.dead[goldScore];
} else {
  goldMessage = goldDictionary.alive[goldScore];
}

healthMessage = healthDictionary[healthScore];

resultMessage.textContent = healthMessage + ' ' + goldMessage;