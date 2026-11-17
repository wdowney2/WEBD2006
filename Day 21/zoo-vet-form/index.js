// Lesson 21 — Events: Form Validation
// Objective: Validate form input before processing, display field-level error
// messages using classList and textContent, and clear errors on resubmission.
//
// Starting point: your completed Lesson 20 zoo vet form.
// Today: add validation to the submit handler before displaying results.

const form = document.getElementById("booking-form");
const animalNameInput = document.getElementById("animal-name");
const speciesInput = document.getElementById("species");
const appointmentDateInput = document.getElementById("appointment-date");
const urgencyInput = document.getElementById("urgency");
const reasonInput = document.getElementById("reason");
const charCount = document.getElementById("char-count");
const summary = document.getElementById("summary");
const summaryContent = document.getElementById("summary-content");
const cancelBtn = document.getElementById("cancel-btn");
const historyList = document.getElementById("history-list");

// TODO: Select the four error <p> elements from the HTML
//       (animalNameError, speciesError, dateError, reasonError)

const animalNameError = document.getElementById("animal-name-error");
const speciesError = document.getElementById("species-error");
const dateError = document.getElementById("date-error");
const reasonError = document.getElementById("reason-error");

const bookings = [];

reasonInput.addEventListener("input", () => {
  const count = reasonInput.value.length;
  charCount.textContent = `${count} / 200 characters`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // CLASS NOTE: This prevents the page by reloading so much and just stops the page when you get the answer

  // TODO: Clear all error elements before re-checking.
  //       Select all elements with class "error" using querySelectorAll,
  const allErrors = document.querySelectorAll(".error");
  allErrors.forEach((element) => {
    element.textContent = "";
    element.classList.remove("visible");

    // CLASS NOTE: all of this does its going to do is grab all 4 errors in the html and remove the visible classes and sets it content to zero  

  });
  //       then forEach over them — set textContent to "" and remove "visible".


  const animalName = animalNameInput.value.trim();
  const species = speciesInput.value.trim();
  const appointmentDate = appointmentDateInput.value;
  const urgency = urgencyInput.value;
  const reason = reasonInput.value.trim();

  // TODO: Declare: let isValid = true;
  let isValid = true;

  // TODO: Check each field. For any failure:
  //         errorEl.textContent = "message";

  if (animalName === "") {
    //         errorEl.classList.add("visible");
    animalNameError.textContent = "Animal Name is requiered";
    animalNameError.classList.add("visible");
    isValid = false;
  }

  //       Checks to write:
  //         1. animalName is empty (trim === "")
  if (species === "") {
    speciesError.textContent = "Species is requiered";
    speciesError.classList.add("visible");
    isValid = false;
  }
  //         3. appointmentDate is missing OR not in the future

  if (appointmentDate === "") {
    dateError.textContent = "A date is Requiered";
    dateError.classList.add("visible");
    isValid = false;
  } else {
    //(use new Date() to compare — treat it as a tool for now)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // this sets the time to 12

    const selectedDate = new Date(appointmentDate);

    if (selectedDate <= today) {
      dateError.textContent = "Appointment Date must be in the Future.";
      dateError.classList.add("visible");
      isValid = false;
    }
  }


  //         4. reason is shorter than 20 characters
  if (reason.length > 20) {
    reasonError.textContent = "Minimum character length is 20.";
    reasonError.classList.add('visible');
    isValid = false;
  }
  // TODO: Only proceed below if isValid is still true.

  if (isValid) {


    summaryContent.innerHTML = `
    <p><strong>Animal:</strong> ${animalName}</p>
    <p><strong>Species:</strong> ${species}</p>
    <p><strong>Date:</strong> ${appointmentDate}</p>
    <p><strong>Urgency:</strong> ${urgency}</p>
    <p><strong>Reason:</strong> ${reason}</p>
  `;

    summary.classList.remove("hidden");

    const booking = { animalName, species, appointmentDate, urgency, reason };
    bookings.push(booking);
    updateHistory();
  }
});

function updateHistory() {
  historyList.innerHTML = bookings
    .map(
      (b, index) => `
      <div class="history-item">
        <strong>${index + 1}. ${b.animalName} (${b.species})</strong>
        <span class="urgency-tag">${b.urgency}</span>
        <p>Date: ${b.appointmentDate}</p>
        <p>${b.reason}</p>
      </div>
    `
    )
    .join("");
}


// ─── PRACTICE CHALLENGE ──────────────────────────────────────────────────────
// Add validation for the new field you added in Lesson 20's practice challenge
// (e.g. "Veterinarian Name").
//
// Steps:
//   1. Add an error <p> element next to that field in the HTML (class="error", with an id)
//   2. Select the error element in JS
//   3. Add a validation check for that field inside the submit handler
//      — if invalid, set the error's textContent and add the "visible" class,
//        and set isValid = false
//   4. Confirm the error clears correctly on the next submit attempt
//      (it should clear automatically since we're targeting all .error elements)
// ─────────────────────────────────────────────────────────────────────────────