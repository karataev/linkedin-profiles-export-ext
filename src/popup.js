

document.addEventListener('DOMContentLoaded', () => {

  let bg = chrome.extension.getBackgroundPage().api;
  let people = bg.getPeople();

  let tableEl = document.getElementById('people-table');
  let tableHeader = `<tr><th>Name</th><th>Job</th><th>Location</th></tr>`;
  let peopleContent = people.map(item => {
    return `<tr><td>${item.name}</td><td>${item.job}</td><td>${item.location}</td></tr>`;
  })
    .join('');
  tableEl.innerHTML = `${tableHeader}${peopleContent}`;

  document.getElementById('export-bt').addEventListener('click', e => {
    let rows = people.map(item => {
      return `${item.link},${item.name},${item.job},${item.location}`;
    });
    let csvContent = "data:text/csv;charset=utf-8," + rows.join("\n");
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "people.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
  });

  document.getElementById('clear-bt').addEventListener('click', e => {
    bg.clearPeople();
    tableEl.innerHTML = '';
  })

});

