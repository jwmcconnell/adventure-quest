const test = QUnit.test;

QUnit.module('scoreQuest');

function scoreQuest(user, choice) {
  user.health += choice.health;
  user.gold += choice.gold;
  return user;
}

test('Score quest based on user choice', (assert) => {
  //Arrange
  const user = {
    username: 'olaf',
    class: 'warrior',
    health: 100,
    gold: 100
  };

  const choice = {
    health: -30,
    gold: 50
  };

  const expected = {
    username: 'olaf',
    class: 'warrior',
    health: 70,
    gold: 150
  };

  //Act 
  const result = scoreQuest(user, choice);
  //Assert
  assert.deepEqual(result, expected);
});