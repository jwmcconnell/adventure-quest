function scoreQuest(user, choice, quest) {
  user.health += choice.health;
  user.gold += choice.gold;
  user.completed[quest.id] = true;
  return user;
}

export default scoreQuest;