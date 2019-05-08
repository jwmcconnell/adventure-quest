import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';

loadProfile();


const title = document.getElementById('quest-title');
const description = document.getElementById('quest-description');
const image = document.getElementById('quest-img');
const choicesParent = document.getElementById('choices-parent');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

title.textContent = quest.title;
description.textContent = quest.description;
image.src = '../../assets/' + quest.image;

for(let i = 0; i < quest.choices.length; i++) {
  const choice = createChoice(quest.choices[i]);
  choicesParent.appendChild(choice);
}
