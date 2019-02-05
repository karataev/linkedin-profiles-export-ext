
(function() {
  let people = [];

  chrome.runtime.onMessage.addListener(msg => {
    if (msg.type === 'addPerson') {
      people.push(msg.data);
    }
  });

  function getPeople() {
    return people;
  }

  function clearPeople() {
    people = [];
  }

  window.api = {
    getPeople,
    clearPeople,
  };
})();
