const test = QUnit.test;

QUnit.module('createQuestLink');

function createQuestLink(quest) {
  const link = document.createElement('a');

  const searchParams = new URLSearchParams();
  searchParams.set('id', quest.id);

  link.classList.add('quest-link');
  link.textContent = quest.title;
  link.href = '/src/quest/?' + searchParams.toString();

  return link;
}

test('Create html link to quest page', (assert) => {
  //Arrange
  const quest = {
    id: 'rescue',
    title: 'Rescue the Princess'
  };
  const expected = '<a class="quest-link" href="/src/quest/?id=rescue">Rescue the Princess</a>';
  //Act 
  const result = createQuestLink(quest);
  //Assert
  assert.equal(result.outerHTML, expected);
});