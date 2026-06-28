const legalNoticeButton = document.getElementById("legalNoticeBtn");
const formContainer = document.getElementById("formContainer");

legalNoticeButton.addEventListener("click", function () {

formContainer.innerHTML = `
<h2>Legal Notice Form</h2>

<label>Advocate Name</label><br>
<input id="advocateName" type="text" placeholder="Enter Advocate Name">

<label>Client Name</label><br>
<input id="clientName" type="text" placeholder="Enter Client Name">

<label>Opposite Party Name</label><br>
<input id="oppositeParty" type="text" placeholder="Enter Opposite Party Name">

<label>Opposite Party Address</label><br>
<input id="partyAddress" type="text" placeholder="Enter Address">

<label>Subject</label><br>
<input id="subject" type="text" placeholder="Enter Subject">

<label>Facts of the Case</label><br>
<textarea id="facts" placeholder="Enter Facts"></textarea>

<label>Relief Sought</label><br>
<textarea id="relief" placeholder="Enter Relief"></textarea>

<button id="generateNoticeBtn">Generate Legal Notice</button>
`;

});