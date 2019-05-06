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

export default makeUser;