import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';
import findById from '../find-by-id.js';
import scoreQuest from './score-quest.js';
import getResultForClass from './get-result-for-class.js';

loadProfile();

const title = document.getElementById('quest-title');
const description = document.getElementById('quest-description');
const image = document.getElementById('quest-img');
const choicesParent = document.getElementById('choices-parent');
const form = document.getElementById('quest-form');
const resultDisplay = document.getElementById('quest-result');
const toMapButton = document.getElementById('to-map');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

let user = api.getUser();

title.textContent = quest.title;
description.textContent = quest.description;
image.src = '../../assets/' + quest.image;

for(let i = 0; i < quest.choices.length; i++) {
  const choice = createChoice(quest.choices[i]);
  choicesParent.appendChild(choice);
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const choiceId = formData.get('quest-choice');
  const choiceData = findById(quest.choices, choiceId);
  const result = getResultForClass(user, choiceData.results);

  user = scoreQuest(user, result, quest);
  api.saveUser(user);
  loadProfile();

  resultDisplay.textContent = result.text;
  resultDisplay.classList.remove('hidden');
  toMapButton.classList.remove('hidden');
  form.classList.add('hidden');
  description.classList.add('hidden');
});