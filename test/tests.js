const test = QUnit.test;

QUnit.module('makeUser');

function makeUser(formData) {
  const user = {
    username: formData.get('username'),
    class: formData.get('class'),
    health: 100,
    power: 10,
    gold: 100
  };
  return user;
}

test('Create user from signup page data', (assert) => {
  //Arrange
  // Set up your parameters and expectations
  const formData = new FormData();
  formData.set('username', 'Olaf');
  formData.set('class', 'warrior');
  const expected = {
    username: 'Olaf',
    class: 'warrior',
    health: 100,
    power: 10,
    gold: 100
  };
  //Act 
  // Call the function you're testing and set the result to a const
  const result = makeUser(formData);
  //Assert
  assert.deepEqual(result, expected);
});