// Backend Database
const DB_CASES_URL = "http://localhost:3000/cases"
const DB_EVENTS_URL = "http://localhost:3000/events"

// Seattle.gov SPD police report API
const SPD_API_URL = "https://data.seattle.gov/resource/4fs7-3vj5.json"
const DOV_URL = "?reported_date=";
const TIME_APPEND = "T00:00:00.000";
const CRIME_URL = "&crime_subcategory=";

// Establish date info
const MONTH = ["January", "February", "March", "April", "May", "June", "July",
               "August", "September", "October", "November", "December"];
const DAY_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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

// -----------------------------------------------------------------
// Get case file from database
// -----------------------------------------------------------------
const searchCaseForm = document.getElementById("searchCaseForm");
searchCaseForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  let searchCaseNumber = searchCaseForm[0].value;
  fetch(DB_CASES_URL + `/${searchCaseNumber}`)
  .then(response => response.json())
  .then(info => displayCaseFile(info))
})

// -----------------------------------------------------------------
// Display case file from database
// -----------------------------------------------------------------
function displayCaseFile(info) {
  clearDisplayPane();

  // create case image div
  let divCaseImage = document.createElement("div");
  divCaseImage.setAttribute("class", "col-md-4");
  let pic = document.createElement("img")
  pic.src = info.imageurl;
  pic.setAttribute("class", "img img-thumbnail");
  divCaseImage.append(pic);

  // display case info
  let divCaseInfo = document.createElement("div");
  divCaseInfo.setAttribute("class", "col-md-8");
  let seattlevh1 = document.createElement("h1");
  seattlevh1.textContent = `City of Seattle vs. ${info.firstname} ${info.lastname}`
  let caseNo = document.createElement("h3");
  caseNo.textContent = `Case #${info.id}`;
  let caseCharge = document.createElement("h3");
  caseCharge.textContent = `Charged with ${info.crime}`

  // grab and display court date
  let crtDate = info.courtdate.split("-");
  let cdStr = `${MONTH[parseInt(crtDate[1] - 1)]} ${crtDate[2].substr(0,2)}, ${crtDate[0]}`;
  let caseDate = document.createElement("h3");
  caseDate.textContent = `Next court date: ${cdStr}`;
  divCaseInfo.append(seattlevh1, caseNo, caseCharge, caseDate);

  // display any previous case events
  let eventsText = info.events;
  let docketHeader = document.createElement("h3");
  docketHeader.textContent = "Docket Information:";
  let docketSeparater1 = document.createElement("hr");
  let eventsUl = document.createElement("ul");
  for (let evt of eventsText) {
    let li = document.createElement("li");
    li.textContent = evt.content;
    eventsUl.append(li);
  }
  let docketSeparater2 = document.createElement("hr");
  divCaseInfo.append(docketHeader, docketSeparater1, eventsUl, docketSeparater2);

  // create case event form
  let eventForm = document.createElement("form");
  eventForm.id = "addEvent";
  let labelCaseEvent = document.createElement("label");
  labelCaseEvent.textContent = "Add Case Event";
  let inputCaseEvent = document.createElement("input");
  inputCaseEvent.type = "text";
  let br1 = document.createElement("br")
  let eventBtn = document.createElement("button");
  eventBtn.textContent = "Submit";
  eventBtn.type = "submit";
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = document.createElement("li");
    item.textContent = inputCaseEvent.value;
    eventsUl.append(item);
    let caseEvent = {case_id: info.id, content: inputCaseEvent.value}
    fetch(DB_EVENTS_URL, {
      method: "POST",
      headers: { 'Content-Type' : 'application/json',
                  Accept: 'application/json'},
      body: JSON.stringify(caseEvent)
    })
    .then(response => response.json())
    inputCaseEvent.value="";
  })
  eventForm.append(labelCaseEvent, inputCaseEvent, br1, eventBtn);
  divCaseInfo.append(eventForm);

  // append info to display pane
  displayPane.append(divCaseImage, divCaseInfo);
}

// -----------------------------------------------------------------
// Create a Criminal from SPD website
// -----------------------------------------------------------------
const displayPane = document.getElementById("display-info");

const displayData = (data, date) => {
  clearDisplayPane();
  let thisDate = date.split("-")
  let thisYear = thisDate[0];
  let thisMonth = thisDate[1] - 1;
  let thisDay = thisDate[2].substr(0,2);
  thisDate = MONTH[thisMonth] + " " + thisDay + ", " + thisYear;
  const h3 = document.createElement("h3")
  // console.log(thisDate)
  h3.textContent = `Crimes committed on ${thisDate}`;
  const tableDisplay = document.createElement("table");
  tableDisplay.setAttribute("class", "table table-dark table-bordered");
  const header = document.createElement("tr");
  header.innerHTML = `
  <tr>
    <th>Incident #</th>
    <th>Crime</th>
    <th>Neighborhood</th>
    <th>File Charges?</th>
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
    tr.append(td1, td2, td3, btn)
    tableDisplay.append(tr)
  }

  return displayPane.append(h3, tableDisplay);
}

function displayChargesForm(data) {
  clearDisplayPane();

  let br1 = document.createElement("br");
  let br2 = document.createElement("br");
  let br3 = document.createElement("br");
  let br4 = document.createElement("br");
  let br5 = document.createElement("br");
  let br6 = document.createElement("br");
  let br7 = document.createElement("br");

  // column for image
  let divCFimg = document.createElement("div");
  divCFimg.setAttribute("class", "col-md-6");

  // create image
  let randomNumber = Math.floor(Math.random() * 50);
  let imageURL = MUGSHOT[randomNumber];
  let image = document.createElement("img");
  image.src = imageURL;
  image.setAttribute("class", "img-thumbnail")
  divCFimg.append(image);
  displayPane.append(divCFimg);

  // column for form
  let divCFform = document.createElement("div");
  divCFform.setAttribute("class", "col-md-6");

  // create form
  let chargeForm = document.createElement("form");
  let labelFirstName = document.createElement("label");
  labelFirstName.textContent = "First Name";
  let inputFirstName = document.createElement("input");
  inputFirstName.type = "text"
  inputFirstName.id = "inputFirstName"

  let labelLastName = document.createElement("label");
  labelLastName.textContent = "Last Name";
  let inputLastName = document.createElement("input")
  inputLastName.type = "text"
  inputLastName.id = "inputLastName"

  let labelCourtDate = document.createElement("label");
  labelCourtDate.textContent = "Schedule Court Appearance";
  let calendar = document.createElement("input");
  calendar.type = "date";

  let createFileBtn = document.createElement("button");
  createFileBtn.type = "submit"
  createFileBtn.textContent = "Create Case File";

  let dispGoNum = document.createElement("label");
  dispGoNum.textContent = `Seattle Police Report # ${data.go_number}`

  let dispCharge = document.createElement("label");
  dispCharge.textContent = `Crime: ${data.crime_subcategory}`;

  let dispNeighborhood = document.createElement("label");
  dispNeighborhood.textContent = `In ${data.neighborhood} of Seattle`;

  let dispOccDate = document.createElement("label");
  dispOccDate.textContent = `Date crime committed: ${data.occ_datetime}`;

  chargeForm.append(
    labelFirstName,
    inputFirstName,
    br1,
    labelLastName,
    inputLastName,
    br2,
    labelCourtDate,
    calendar,
    br3,
    dispGoNum,
    br4,
    dispCharge,
    br5,
    dispNeighborhood,
    br6,
    dispOccDate,
    br7,
    createFileBtn);

  divCFform.append(chargeForm);
  displayPane.append(divCFform);

  chargeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let c = new Case();
    c.imageurl = imageURL;
    c.firstname = inputFirstName.value;
    c.lastname = inputLastName.value;
    c.courtdate = calendar.value;
    c.gonumber = data.go_number;
    c.crime = data.crime_subcategory;
    c.neighborhood = data.neighborhood;
    c.dov = data.occ_datetime;
    // console.log(c);
    fetch("http://localhost:3000/cases", {
      method: "POST",
      headers: { 'Content-Type' : 'application/json',
                  Accept: 'application/json'},
      body: JSON.stringify(c)
    })
    .then(response => response.json())
    displayNewCaseFile(c)
  })
}

function displayNewCaseFile(c) {
  clearDisplayPane();

  fetch("http://localhost:3000/cases")
  .then(response => response.json())
  .then(cases => {
    let caseNum = cases.length + 1;
    let dateSplit = c.courtdate.split("-");
    let month = MONTH[parseInt(dateSplit[1])-1];
    console.log(month)
    debugger
    let dateStr = `${month} ${dateSplit[2]}, ${dateSplit[0]}`
    console.log(dateStr)
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="row">
      <div class="col-md-4">
        <img class="img img-thumbnail" src="${c.imageurl}" alt="profile pic of ${c.firstname} ${c.lastname}">
      </div>

      <div class="col-md-8">
        <h1>City of Seattle vs. ${c.firstname} ${c.lastname}</h1>
        <h3>Case #${caseNum}</h3>
        <h3>Charged with ${c.crime}</h3>
        <h3>Next court appearance scheduled for ${dateStr}</h3>
      </div>
    </div>
    `
    displayPane.append(div);
  })
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

  fetch(thisURL)
  .then(response => response.json())
  .then(data => displayData(data, date))
})

class Case {
  constructor (imageurl, firstname, lastname, courtdate, gonumber, crime, neighborhood, dov){
    this.imageurl = imageurl;
    this.firstname = firstname;
    this.lastname = lastname;
    this.courtdate = courtdate;
    this.gonumber = gonumber;
    this.crime = crime;
    this.neighborhood = neighborhood;
    this.dov = dov;
    Case.all.push(this);
  }

  update({courtDate, events}) {
    this.courtDate = courtDate;
    this.events = events;
  }
}

Case.all = []
