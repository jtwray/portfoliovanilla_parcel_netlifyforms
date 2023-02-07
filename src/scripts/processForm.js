const processForm = (form) => {
  const reachoutFormSubmissionData = new FormData(form);
  reachoutFormSubmissionData.append("form-name", "reachout");
  fetch("/", {
    method: "POST",
    body: reachoutFormSubmissionData
  })
    .then(() => {
      form.innerHTML = `<div class="form--success"> Message Delivered! I'll follow up with you asap. You should see a confirmation come through your inbox pretty soon.</div>`;
    })
    .catch((error) => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    });
};

const reachout = document.querySelector(".reachout");
if (reachout) {
  reachout.addEventListener("submit", (e) => {
    e.preventDefault();
    processForm(reachout);
  });
}
