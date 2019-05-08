import loadProfile from '../load-profile.js';
import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';

loadProfile();

const nav = document.getElementById('quests');

const quests = api.getQuests();
const user = api.getUser();

for(let i = 0; i < quests.length; i++) {
  let link = null;
  if(user.completed[quests[i].id]) {
    link = createCompletedQuest(quests[i]);
  } else {
    link = createQuestLink(quests[i]);
  }
  nav.appendChild(link);
}
