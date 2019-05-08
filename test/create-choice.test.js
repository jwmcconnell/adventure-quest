const test = QUnit.test;

QUnit.module('createChoice');

function createChoice(choice) {
  const label = document.createElement('label');
  label.textContent = choice.description;

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'quest-choices';
  input.setAttribute('required', true);
  input.value = choice.id;

  label.appendChild(input);

  return label;
}

test('Create html span to represent completed quest', (assert) => {
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