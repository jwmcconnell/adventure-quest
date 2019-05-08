import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

QUnit.module('createChoice');

test('Create html label and input for a quest choice', (assert) => {
  //Arrange
  const choice = {
    id: 'fight',
    description: 'Charge him at first site'
  };
  const expected = '<label>Charge him at first site<input type="radio" name="quest-choices" required="true" value="fight"></label>';
  //Act 
  const result = createChoice(choice);
  //Assert
  assert.equal(result.outerHTML, expected);
});