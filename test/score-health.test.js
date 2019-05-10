import scoreHealth from '../src/end/score-health.js';
const test = QUnit.test;

QUnit.module('scoreHealth');

test('user is dead', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    health: 0
  };
  const expected = 'dead';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreHealth(user);
  //Assert
  assert.deepEqual(result, expected);
});

test('user is in good health', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    health: 29
  };
  const expected = 'weak';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreHealth(user);
  //Assert
  assert.deepEqual(result, expected);
});

test('user is in good health', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    health: 55
  };
  const expected = 'good';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreHealth(user);
  //Assert
  assert.deepEqual(result, expected);
});

test('user is in great health', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    health: 100
  };
  const expected = 'great';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = scoreHealth(user);
  //Assert
  assert.deepEqual(result, expected);
});

