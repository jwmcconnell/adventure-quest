const test = QUnit.test;

QUnit.module('createCompletedQuest');

function createCompletedQuest(quest) {
  const span = document.createElement('span');

  span.classList.add('quest');
  span.classList.add('completed');
  span.textContent = quest.title;

  return span;
}

test('Create html span to represent completed quest', (assert) => {
  //Arrange
  const quest = {
    id: 'rescue',
    title: 'Rescue the Princess'
  };
  const expected = '<span class="quest completed">Rescue the Princess</span>';
  //Act 
  const result = createCompletedQuest(quest);
  //Assert
  assert.equal(result.outerHTML, expected);
});