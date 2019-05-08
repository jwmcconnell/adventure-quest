import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('createCompletedQuest');

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