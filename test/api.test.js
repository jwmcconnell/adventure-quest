import api from '../src/services/api.js';
import quests from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
  sessionStorage.clear();
});

test('Round trip user data', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const expected = {
    username: 'Olaf',
    class: 'warrior',
    health: 100,
    gold: 100
  };
  //Act 
  // Call the function you're testing and set the result to a const
  api.saveUser(expected);
  const result = api.getUser();
  //Assert
  assert.deepEqual(result, expected);
});

test('Get quests from api', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const expected = quests;
  //Act 
  // Call the function you're testing and set the result to a const
  const result = api.getQuests();
  //Assert
  assert.deepEqual(result, expected);
});

test('Get quests by id', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const expected = quests[1];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = api.getQuest(expected.id);
  //Assert
  assert.deepEqual(result, expected);
});