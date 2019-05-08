import quests from './quest-data.js';
import findById from '../find-by-id.js';

const api = {
  storage: localStorage,
  signUp(user) {
    const json = JSON.stringify(user);
    api.storage.setItem('user', json);
  },
  getUser() {
    const json = api.storage.getItem('user');
    const user = JSON.parse(json);
    return user;
  },
  getQuests() {
    return quests;
  },
  getQuest(id) {
    return findById(quests, id);
  }
};

export default api;