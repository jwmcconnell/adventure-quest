import getResultForClass from '../src/quest/get-result-for-class.js';

const test = QUnit.test;

QUnit.module('getResultForClass');

test('Get the appropriate result for the user class', (assert) => {
  //Arrange
  const user = {
    username: 'olaf',
    class: 'warrior',
    health: 100,
    gold: 100
  };

  const results = [{
    id: 'warrior',
    health: -30,
    gold: 50
  },
  {
    id: 'any',
    health: -30,
    gold: 50
  }];

  const expected = {
    id: 'warrior',
    health: -30,
    gold: 50
  };

  //Act 
  const result = getResultForClass(user, results);
  //Assert
  assert.deepEqual(result, expected);
});

test('Get the general result for class not matching', (assert) => {
  //Arrange
  const user = {
    username: 'olaf',
    class: 'wizard',
    health: 100,
    gold: 100
  };

  const results = [{
    id: 'warrior',
    health: -30,
    gold: 50
  },
  {
    id: 'any',
    health: -30,
    gold: 50
  }];

  const expected = {
    id: 'any',
    health: -30,
    gold: 50
  };

  //Act 
  const result = getResultForClass(user, results);
  //Assert
  assert.deepEqual(result, expected);
});

