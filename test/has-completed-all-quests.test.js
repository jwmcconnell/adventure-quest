import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
const test = QUnit.test;

QUnit.module('hasCompletedAllQuests');

test('User has completed all quests', (assert) => {
  //Arrange
  const user = {
    completed: {
      one: true,
      two: true,
      three: true
    }
  };

  const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' }
  ];

  const expected = true;
  //Act 
  const result = hasCompletedAllQuests(quests, user);
  //Assert
  assert.equal(result, expected);
});

test('User has not completed all quests', (assert) => {
  //Arrange
  const user = {
    completed: {
      one: true,
      two: true,
    }
  };

  const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' }
  ];

  const expected = false;
  //Act 
  const result = hasCompletedAllQuests(quests, user);
  //Assert
  assert.equal(result, expected);
});