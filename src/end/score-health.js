function scoreHealth(user) {
  if(user.health < 1) {
    return 'dead';
  }
  else if(user.health < 30) {
    return 'weak';
  }
  else if(user.health < 60) {
    return 'good';
  }
  else if(user.health <= 100) {
    return 'great';
  }
}

export default scoreHealth;