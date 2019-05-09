import isDead from '../src/map/is-dead.js';
const test = QUnit.test;

QUnit.module('idDead');

test('User is dead', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    health: 0
  };
  const expected = true;
  //Act 
  // Call the function you're testing and set the result to a const
  const result = isDead(user);
  //Assert
  assert.equal(result, expected);
});

test('User is not dead', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const user = {
    health: 1
  };
  const expected = false;
  //Act 
  // Call the function you're testing and set the result to a const
  const result = isDead(user);
  //Assert
  assert.equal(result, expected);
});