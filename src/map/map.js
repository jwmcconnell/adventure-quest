import loadProfile from '../load-profile.js';
import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';

loadProfile();

const nav = document.getElementById('quests');

const quests = api.getQuests();

for(let i = 0; i < quests.length; i++) {
  let link = createQuestLink(quests[i]);
  nav.appendChild(link);
}
