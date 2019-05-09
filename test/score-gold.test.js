const test = QUnit.test;

QUnit.module('scoreGold');

function scoreGold(user) {
  if(user.gold < 50) {
    return 'poor';
  }
  else if(user.gold < 125) {
    return 'wealthy';
  }
  else {
    return 'rich';
  }
}

test('user is poor', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    gold: 49
  };
  const expected = 'poor';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreGold(user);
  //Assert
  assert.deepEqual(result, expected);
});

test('user is wealthy', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    gold: 120
  };
  const expected = 'wealthy';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreGold(user);
  //Assert
  assert.deepEqual(result, expected);
});

test('user is rich', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    gold: 150
  };
  const expected = 'rich';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreGold(user);
  //Assert
  assert.deepEqual(result, expected);
});