const legalNoticeButton = document.getElementById("legalNoticeBtn");
const formContainer = document.getElementById("formContainer");

legalNoticeButton.addEventListener("click", function () {

formContainer.innerHTML = `
<h2>Legal Notice Form</h2>

<label>Advocate Name</label><br>
<input type="text" placeholder="Enter Advocate Name"><br>

<label>Client Name</label><br>
<input type="text" placeholder="Enter Client Name"><br>

<label>Opposite Party Name</label><br>
<input type="text" placeholder="Enter Opposite Party Name"><br>

<label>Opposite Party Address</label><br>
<input type="text" placeholder="Enter Address"><br>

<label>Subject</label><br>
<input type="text" placeholder="Enter Subject"><br>

<label>Facts of the Case</label><br>
<textarea placeholder="Enter Facts"></textarea><br>

<label>Relief Sought</label><br>
<textarea placeholder="Enter Relief"></textarea><br>

<button id="generateNoticeBtn">Generate Legal Notice</button>
`;

});