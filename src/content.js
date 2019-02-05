
function clickHandler(e) {
  let el = e.target.parentElement;
  let link = el.querySelector('a.search-result__result-link').href;
  let name = el.querySelector('.actor-name').innerText;
  let job = el.querySelector('.subline-level-1').innerText;
  let location = el.querySelector('.subline-level-2').innerText;

  let msg = {
    type: 'addPerson',
    data: {
      link,
      name,
      job,
      location,
    },
  };
  chrome.runtime.sendMessage(msg);

  e.target.parentElement.removeChild(e.target);
}

function exportResult() {
  console.log('export');
}

let searchItems = document.querySelectorAll('.search-result--person');
searchItems.forEach(el => {
  let bt = document.createElement('button');
  bt.innerText = 'Add';
  el.appendChild(bt);
  bt.addEventListener('click', clickHandler);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('message from popup', request);
  if (request === "export") {
    exportResult();
  }
});
