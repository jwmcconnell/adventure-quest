function scoreQuest(user, choice) {
  user.health += choice.health;
  user.gold += choice.gold;
  return user;
}

export default scoreQuest;