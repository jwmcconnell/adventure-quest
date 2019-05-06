const test = QUnit.test;

QUnit.module('api');

const api = {
  storage: localStorage,
  signUp(user) {
    const json = JSON.stringify(user);
    api.storage.setItem('user', json);
  },
  getUser() {
    const json = api.storage.getItem('user');
    const user = JSON.parse(json);
    return user;
  }
};

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
    power: 10,
    gold: 100
  };
  //Act 
  // Call the function you're testing and set the result to a const
  api.signUp(expected);
  const result = api.getUser();
  //Assert
  assert.deepEqual(result, expected);
});