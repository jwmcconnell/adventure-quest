function isDead(user) {
  if(user.health <= 0) {
    return true;
  }

  return false;
}

export default isDead;