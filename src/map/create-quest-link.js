function createQuestLink(quest) {
  const link = document.createElement('a');

  const searchParams = new URLSearchParams();
  searchParams.set('id', quest.id);

  link.classList.add('quest');
  link.textContent = quest.title;
  link.href = '/src/quest/?' + searchParams.toString();
  link.style.top = quest.map.top;
  link.style.left = quest.map.left;

  return link;
}

export default createQuestLink;