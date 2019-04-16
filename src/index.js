// document.addEventListener('DOMContentLoaded', () => {
//   const app = new App();
//   app.attachEventListeners();
//
//   app.adapter.fetchNotes().then(app.createNotes);
// });

const SPD_API_URL = "https://data.seattle.gov/resource/4fs7-3vj5.json"
const DOV_URL = "?reported_date=";
const TIME_APPEND = "T00:00:00.000";
const CRIME_URL = "&crime_subcategory=";

const displayPane = document.getElementById("display-info");

const displayData = (data) => {
  clearDisplayPane();
  const tableDisplay = document.createElement("table");
  const header = document.createElement("tr");
  header.innerHTML = `
  <tr>
    <th>Incident #</th>
    <th>neighborhood</th>
  </tr>`;
  tableDisplay.append(header);

  for (let d of data) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let btn = document.createElement("button")
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      displayChargesForm(d);
    })
    btn.textContent = "File Charges"
    td1.textContent = d.go_number;
    td2.textContent = d.neighborhood;
    tr.append(td1, td2, btn)
    tableDisplay.append(tr)
  }

  return displayPane.append(tableDisplay);
}

function displayChargesForm(data) {
  clearDisplayPane();
  
  console.log(data);
}

function clearDisplayPane() {
  while(displayPane.firstChild) {
    displayPane.removeChild(displayPane.firstChild);
  }
}

const fetchCriminalInfo = document.getElementById("get-SPD-crimes")
fetchCriminalInfo.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Get Criminal button clicked");
  const date = document.getElementById("date-input").value;
  const crimeType = document.querySelector('[name="crime_category"]:checked').value;

  let thisURL = SPD_API_URL + DOV_URL + date + TIME_APPEND + CRIME_URL + crimeType;
  console.log(thisURL);
  fetch(SPD_API_URL + DOV_URL + date + TIME_APPEND + CRIME_URL + crimeType)
  .then(response => response.json())
  .then(data => displayData(data))
})
