import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('createQuestLink');

test('Create html link to quest page', (assert) => {
  //Arrange
  const quest = {
    id: 'rescue',
    title: 'Rescue the Princess'
  };
  const expected = '<a class="quest" href="/src/quest/?id=rescue">Rescue the Princess</a>';
  //Act 
  const result = createQuestLink(quest);
  //Assert
  assert.equal(result.outerHTML, expected);
});