const test = QUnit.test;

QUnit.module('hasCompletedAllQuests');

function hasCompletedAllQuests(quests, user) {
  for(let i = 0; i < quests.length; i++) {
    let quest = quests[i];
    if(!user.completed[quest.id]) {
      return false;
    }
  }
  return true;
}

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