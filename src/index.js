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

const MUGSHOT = ["https://imgix.ranker.com/user_node_img/50060/1001191352/original/b-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50060/1001191368/original/j-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50060/1001191376/original/j-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50068/1001347411/original/he-better-wipe-that-smile-off-his-face-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50060/1001191353/original/b-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191354/original/b-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191358/original/jjj-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001262406/original/he_s-not-smiling-now-photo-u2?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191367/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191369/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191355/original/b-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191374/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191357/original/the-face-of-florida-photo-u2?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191356/original/jjj-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191359/original/jjj-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191370/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191377/original/decisions-were-made-photo-u3?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191362/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191373/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191378/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50060/1001191363/original/j-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271204/original/n-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50064/1001271185/original/n-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50064/1001271195/original/n-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50064/1001271199/original/n-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50064/1001271179/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271203/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271197/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271196/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271178/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271201/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271192/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271183/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271182/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271198/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271181/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/107/2132605/original/sweet-tooth-u13?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271186/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271193/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271187/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271205/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271180/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271194/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50064/1001271200/original/n-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50063/1001257808/original/h-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50063/1001257823/original/h-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50063/1001257821/original/h-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50063/1001257816/original/h-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
 "https://imgix.ranker.com/user_node_img/50063/1001257822/original/h-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22",
 "https://imgix.ranker.com/user_node_img/50063/1001257827/original/h-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22"
 ]


const displayPane = document.getElementById("display-info");

const displayData = (data, date) => {
  clearDisplayPane();
  const h3 = document.createElement("h3")
  h3.textContent = date;
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
    let td3 = document.createElement("td");
    let btn = document.createElement("button")
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      displayChargesForm(d);
    })
    btn.textContent = "File Charges"
    td1.textContent = d.go_number;
    td2.textContent = d.crime_subcategory;
    td3.textContent = d.neighborhood;
    tr.append(td1, td2, btn)
    tableDisplay.append(tr)
  }

  return displayPane.append(tableDisplay);
}

function displayChargesForm(data) {
  clearDisplayPane();
  //
  // let imageURL = MUGSHOT[Math.random() * 50]
  // console.log(imageURL)

  displayPane.innerHTML = `
  <form class="" action="index.html" method="post">
    <div class="row">
      <img src="" alt="picture of random funny mugshot">
    </div>
    <div class="row form-row">
      <div class="form-group col-md-6">
        <label for="inputFirstName">First Name</label>
        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name">
      </div>
      <div class="form-group col-md-6">
        <label for="inputMiddleName">Last Name</label>
        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name">
      </div>
    </div>
    <div>
      Schedule Court Hearing: <input type="date" id="date-input" />
    </div>

    <button type="submit" class="btn btn-primary">Create Case File</button>
  </form>
  `;
  let image = document.getElementsByTagName("img")

}

function clearDisplayPane() {
  while(displayPane.firstChild) {
    displayPane.removeChild(displayPane.firstChild);
  }
}

const fetchCriminalInfo = document.getElementById("get-SPD-crimes")
fetchCriminalInfo.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log("Get Criminal button clicked");
  let date = document.getElementById("date-input").value;
  if (date === "") {
    date = new Date();
    let yesterday = date.getDate() - 1;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    date = year + '-' + month + '-' + yesterday + TIME_APPEND;
  } else {
    date = date + TIME_APPEND;
  }
  // console.log(date)

  const crimeType = document.querySelectorAll('[name="crime_category"]');
  let charge = ""
  for (let crime of crimeType) {
    if (crime.checked) {
      charge = crime.value;
    }
  }

  let thisURL = ""
  if (charge !== "") {
    thisURL = SPD_API_URL + DOV_URL + date + CRIME_URL + charge;
  } else {
    thisURL = SPD_API_URL + DOV_URL + date;
  }

  // console.log(thisURL);

  fetch(thisURL)
  .then(response => response.json())
  .then(data => displayData(data, date))
})
