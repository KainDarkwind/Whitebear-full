$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#save-edit-card").click(function () {
   $("#overlay-fail").toggleClass("d-flex d-none");
});

/*$("#sign-up").click(function () {
   $("#sign-up-card").toggleClass("d-none");
   $("#intro-card").toggleClass("d-none");
});*/
//Commented out for testing purposes.  Also switched d-none on these elements.

$("#delete-button").click(function () {
   $("#delete-card").toggleClass("d-none");
});

$("#create-imagery-input").keyup(function (e) {
   console.log("Event", e);

   const text = e.target.value;
   const textLength = text.length;
   if (textLength === 0) {
      console.log("There is no text entered.");
      $("#save-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#save-card").addClass("disabled");
      $("#create-char-count").removeClass("text-muted");
      $("#create-char-count").addClass("text-danger");
   } else {
      console.log("Just right.");
      $("#save-card").removeClass("disabled");
      $("#create-char-count").addClass("text-muted");
      $("#create-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#create-char-count").html(textLength);
});

$("#answer-input").keyup(function (e) {
   console.log("Event", e);

   const text = e.target.value;
   const textLength = text.length;
   if (textLength === 0) {
      console.log("There is no text entered.");
      $("#next-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#next-card").addClass("disabled");
      $("#answer-char-count").removeClass("text-muted");
      $("#answer-char-count").addClass("text-danger");
   } else {
      console.log("Just right.");
      $("#next-card").removeClass("disabled");
      $("#answer-char-count").addClass("text-muted");
      $("#answer-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#answer-char-count").html(textLength);
});

$("#edit-top-input").keyup(function (e) {
   console.log("Event", e);
   console.log("Bottom value", $("#edit-bottom-input").val().length);

   const text = e.target.value;
   const textLength = text.length;
   const textLengthBottom = $("#edit-bottom-input").val().length;

   if (textLength === 0 || textLengthBottom === 0) {
      console.log("There is no text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-top-char-count").addClass("text-muted");
      $("#edit-top-char-count").removeClass("text-danger");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-top-char-count").removeClass("text-muted");
      $("#edit-top-char-count").addClass("text-danger");
   } else if (textLengthBottom > 240) {
      console.log("There is too much text entered in top.");
      $("#save-edit-card").addClass("disabled");
   } else {
      console.log("Just right.");
      $("#save-edit-card").removeClass("disabled");
      $("#edit-top-char-count").addClass("text-muted");
      $("#edit-top-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#edit-top-char-count").html(textLength);
});

$("#edit-bottom-input").keyup(function (e) {
   console.log("Event", e);

   const text = e.target.value;
   const textLength = text.length;
   const textLengthTop = $("#edit-top-input").val().length;

   if (textLength === 0 || textLengthTop === 0) {
      console.log("There is no text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-top-char-count").addClass("text-muted");
      $("#edit-top-char-count").removeClass("text-danger");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-bottom-char-count").removeClass("text-muted");
      $("#edit-bottom-char-count").addClass("text-danger");
   } else if (textLengthTop > 240) {
      console.log("There is too much text entered in top.");
      $("#save-edit-card").addClass("disabled");
   } else {
      console.log("Just right.");
      $("#save-edit-card").removeClass("disabled");
      $("#edit-bottom-char-count").addClass("text-muted");
      $("#edit-bottom-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#edit-bottom-char-count").html(textLength);
});

$("#lets-go").click(function (e) {
   const emailInput = $("#sign-up-email-input").val();
   const email = emailInput.trim().toLowerCase();
   const password = $("#sign-up-password-input").val();

   const emailError = getEmailError(email);

   if (emailError !== "") {
      const element = "#sign-up-email";
      const errorMessage = emailError;
      showErrorMessage(element, errorMessage);
   } else {
      const element = "#sign-up-email";
      const errorMessage = emailError;
      hideErrorMessage(element, errorMessage);
      //Else hide any error messages/styling.
   }

   const passwordError = getPasswordError(password, email);
   console.log("Currently, passwordError is returning this:", passwordError);

   if (passwordError !== "") {
      const element = "#sign-up-password";
      const errorMessage = passwordError;
      showErrorMessage(element, errorMessage);
   } else {
      const element = "#sign-up-password";
      const errorMessage = passwordError;
      hideErrorMessage(element, errorMessage);
      //Else hide any error messages/styling.
   }
   //If password error is not "",

   showCreatedAt();
});

function showErrorMessage(element, errorMessage) {
   //style and show error message.
   $(`${element}-input`).addClass("is-invalid");
   $(`${element}-error`).html(errorMessage);
}

function hideErrorMessage(element, errorMessage) {
   //Else hide any error messages/styling.
   $(`${element}-input`).removeClass("is-invalid");
   $(`${element}-error`).html(errorMessage);
}

function showCreatedAt() {
   const clickedAt = new Date(Date.now()); //This produces a date at the very moment the function runs.
   const year = clickedAt.getFullYear();
   const month = clickedAt.getMonth();
   const day = clickedAt.getDate();
   const formattedYear = String(year);
   let formattedMonth = String(month + 1);
   let formattedDay = String(day);

   //If the formatted length is less than 2, we will concat a 0 to the left of the string.  Else we leave it.

   if (formattedMonth.length < 2) {
      console.log("The month needs padding");
      //formattedMonth = "0" + formattedMonth;
      formattedMonth = padLeft(formattedMonth, 2, "0");
   }

   if (formattedDay.length < 2) {
      console.log("The day needs padding");
      //formattedDay = 0 + formattedDay;
      formattedDay = padLeft(formattedMonth, 2, "0");
   }

   createdAt = formattedYear + formattedMonth + formattedDay;
   console.log(createdAt);
}

function padLeft(element, paddingAmount, paddingType) {
   //if element length is less than padding number,
   if (element.length < paddingAmount) {
      const paddedNumber = paddingType + element;
      //add padding equal to difference and return result as a string.
      console.log("the padded element is", paddedNumber);
      return paddedNumber;
   } else {
      const paddedNumber = element;
      console.log("the unpadded element is", paddedNumber);
      return paddedNumber;

      //if element length is equal to or greater than padding number, return element as a string.
   }
}
