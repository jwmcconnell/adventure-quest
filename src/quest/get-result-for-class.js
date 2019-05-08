import findById from '../find-by-id.js';

function getResultForClass(user, results) {
  let result = findById(results, user.class);
  if(!result) {
    result = findById(results, 'any');
  }
  return result;
}

export default getResultForClass;
