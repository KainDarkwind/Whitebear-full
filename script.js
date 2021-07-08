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
   const emailInputLength = $("#sign-up-email-input").val().length;
   const emailInput = $("#sign-up-email-input").val();

   console.log("The email entered is:", emailInput);

   //const trimmedEmail = emailInput.trim();
   //   const lowerCasedEmail = trimmedEmail.toLowerCase();

   if (emailInputLength === 0) {
      console.log("There is no email text entered.");
      $("#sign-up-email-error").html("Please enter your email address.");
      $("#sign-up-email-input").addClass("is-invalid");
   } else {
      console.log("The email is just right.");
      $("#sign-up-email-error").html("");
      $("#sign-up-email-input").removeClass("is-invalid");
   }
});

$("#lets-go").click(function (e) {
   const passwordInputLength = $("#sign-up-password-input").val().length;
   const passwordInput = $("#sign-up-password-input").val();
   const emailInput = $("#sign-up-email-input").val();

   console.log("The email entered is:", emailInput);

   const trimmedEmail = emailInput.trim();
   const lowerCasedEmail = trimmedEmail.toLowerCase();

   const delimiter = `@`;
   const indexOfLocalEmail = lowerCasedEmail.indexOf(delimiter);
   console.log(`The index of local email is ${indexOfLocalEmail}.`);
   const localEmail = lowerCasedEmail.slice(0, indexOfLocalEmail);
   console.log(`The value of local email is ${localEmail}.`);

   if (passwordInputLength === 0) {
      console.log("There is no password text entered.");
      $("#sign-up-password-error").html("Please create a password.");
      $("#sign-up-password-input").addClass("is-invalid");
   } else if (passwordInputLength < 9) {
      console.log("The password is too short.");
      $("#sign-up-password-error").html(
         "Your password must be at least 9 characters."
      );
      $("#sign-up-password-input").addClass("is-invalid");
   } else if (passwordInput.includes(localEmail) && indexOfLocalEmail >= 4) {
      console.log("The password cannot match email.");
      $("#sign-up-password-error").html(
         "All or part of your email address cannot be used in your password."
      );
      $("#sign-up-password-input").addClass("is-invalid");
   } else {
      console.log("The password is just right.");
      console.log("The user's email is", lowerCasedEmail);
      $("#sign-up-password-error").html("");
      $("#sign-up-password-input").removeClass("is-invalid");
   }
});
