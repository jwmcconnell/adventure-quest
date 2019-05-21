function scoreGold(user) {
  if(user.gold < 50) {
    return 'poor';
  }
  else if(user.gold < 125) {
    return 'wealthy';
  }
  else {
    return 'rich';
  }
}

export default scoreGold;