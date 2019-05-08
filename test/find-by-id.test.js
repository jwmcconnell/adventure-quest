import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

QUnit.module('findById');

function findById(items, id) {
  for(let i = 0; i < items.length; i++) {
    let item = items[i];
    if(item.id === id) {
      return item;
    }
  }
  return null;
}

test('Get an item based on its id', (assert) => {
  //Arrange
  const items = [{
    id: 'id1',
    description: 'item1'
  },
  {
    id: 'id2',
    description: 'item2'
  }];
  const expected = items[1];
  //Act 
  const result = findById(items, items[1].id);
  //Assert
  assert.equal(result, expected);
});