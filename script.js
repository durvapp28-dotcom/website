// ==============================
// FEEDBACK FORM
// ==============================

const feedbackForm = document.getElementById("feedbackForm");
const successMessage = document.getElementById("successMessage");

feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("Name").value;

    successMessage.textContent =
        "Thank you, " + name + "! Your feedback has been submitted successfully. ⭐";

    feedbackForm.reset();

});