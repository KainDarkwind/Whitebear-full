$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#save-edit-card").click(function () {
   $("#overlay-fail").toggleClass("d-flex d-none");
});

$("#sign-up").click(function () {
   $("#sign-up-card").toggleClass("d-none");
   $("#intro-card").toggleClass("d-none");
});

$("#delete-button").click(function () {
   $("#delete-card").toggleClass("d-none");
});

let imageryCharsCount = 0;
$("#create-imagery-input").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const text = e.target.value;
   console.log(`inputted: ${text}`);

   //check the length of the text

   const textLength = text.length;
   console.log(`The length is: ${textLength}`);

   if (textLength === 0) {
      console.log("no text entered");
      $("#save-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("too much entered");
      $("#save-card").addClass("disabled");
      $("#create-char-count").addClass("text-danger");
   } else if (textLength > 0 || textLength <= 240) {
      console.log("just right");
      $("#save-card").removeClass("disabled");
      $("#create-char-count").removeClass("text-danger");
   }

   //update the character counter on the page
   $("#create-char-count").html(textLength);
});

let answerCharsCount = 0;
$("#answer-input").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const text = e.target.value;
   console.log(`inputted: ${text}`);

   //check the length of the text

   const textLength = text.length;
   console.log(`The length is: ${textLength}`);

   if (textLength === 0) {
      console.log("no text entered");
      $("#next-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("too much entered");
      $("#next-card").addClass("disabled");
      $("#answer-char-count").addClass("text-danger");
   } else if (textLength > 0 || textLength <= 240) {
      console.log("just right");
      $("#next-card").removeClass("disabled");
      $("#answer-char-count").removeClass("text-danger");
   }

   //update the character counter on the page
   $("#answer-char-count").html(textLength);
});

let topCharsCount = 0;
let bottomCharsCount = 0;
$("#top-text-edit, #bottom-text-edit").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const topText = $("#top-text-edit").val();
   console.log(`inputted: ${topText}`);
   const bottomText = $("#bottom-text-edit").val();
   console.log(`inputted: ${bottomText}`);

   //check the length of the text

   const topTextLength = topText.length;
   console.log(`The top length is: ${topTextLength}`);

   const bottomTextLength = bottomText.length;
   console.log(`The bottom length is: ${bottomTextLength}`);

   if (topTextLength === 0 || bottomTextLength === 0) {
      console.log("form not complete");
      $("#save-edit-card").addClass("disabled");
   }

   if (topTextLength > 240) {
      console.log("too much top entered");
      $("#save-edit-card").addClass("disabled");
      $("#top-char-count").addClass("text-danger");
   }

   if (bottomTextLength > 240) {
      console.log("too much bottom entered");
      $("#save-edit-card").addClass("disabled");
      $("#bottom-char-count").addClass("text-danger");
   }

   //Everything is good
   if (
      topTextLength > 0 &&
      bottomTextLength > 0 &&
      topTextLength <= 240 &&
      bottomTextLength <= 240
   ) {
      console.log("just right");
      $("#save-edit-card").removeClass("disabled");
      $("#top-char-count").removeClass("text-danger");
      $("#bottom-char-count").removeClass("text-danger");
   }

   //update the character counter on the page
   $("#top-char-count").html(topTextLength);
   $("#bottom-char-count").html(bottomTextLength);
});

$("#lets-go").click(function (e) {
   console.log("Event", e);

   //check if email empty

   const emailInput = $("#sign-up-email").val();
   const trimmedEmailInput = emailInput.trim();
   const normalizedEmailInput = trimmedEmailInput.toLowerCase();
   const emailLength = normalizedEmailInput.length;
   const delimiter = "@";
   const indexOfLocal = normalizedEmailInput.indexOf(delimiter);
   const indexofDomain = normalizedEmailInput.lastIndexOf(delimiter);
   const localEmail = normalizedEmailInput.slice(0, indexOfLocal);
   const domainEmail = normalizedEmailInput.slice(0, indexofDomain);

   console.log(`email input: ${normalizedEmailInput}`);
   console.log(`email length: ${emailLength}`);
   console.log(`The local part is: ${localEmail}`);
   console.log(`The domain name is: ${domainEmail}`);

   if (emailLength === 0) {
      console.log("no email entered");
      //remove d-none from #email-warning,  add class 'is-invalid' to #sign-up-email
      $("#email-warning").removeClass("d-none");
      $("#email-warning").html("Please enter your email.");
      $("#sign-up-email").addClass("is-invalid");
   } else if (emailLength > 0) {
      console.log("email just right");
      $("#email-warning").addClass("d-none");
      $("#sign-up-email").removeClass("is-invalid");
   }

   //check if password empty

   const passwordInput = $("#sign-up-password").val();
   const passwordLength = passwordInput.length;
   console.log(`password inputted: ${passwordInput}`);
   emailToSearchFor = "localEmail";

   if (passwordLength === 0) {
      console.log("no password entered");
      //remove d-none from #no-email-warning  add class 'is-invalid' to #sign-up-email
      $("#password-warning").removeClass("d-none");
      $("#password-warning").html("Please create a password.");
      $("#sign-up-password").addClass("is-invalid");
   } else if (passwordLength < 9) {
      console.log("short password entered");
      $("#password-warning").removeClass("d-none");
      $("#password-warning").html(
         "Your password must be at least 9 characters."
      );
      $("#sign-up-password").addClass("is-invalid");
   } else if (passwordInput.includes(localEmail)) {
      console.log("password contains email");
      $("#password-warning").removeClass("d-none");
      $("#sign-up-password").addClass("is-invalid");
      $("#password-warning").html("Your password can't be shit.");
   } else if (passwordLength > 8) {
      console.log("just right password");
      $("#password-warning").addClass("d-none");
      $("#sign-up-password").removeClass("is-invalid");
   }

   // if (textLength === 0) {
   //    console.log("no bottom text entered");
   //    $("#save-edit-card").addClass("disabled");
   // } else if (textLength > 240) {
   //    console.log("too much bottom entered");
   //    $("#save-edit-card").addClass("disabled");
   //    $("#bottom-char-count").addClass("text-danger");
   // } else if (textLength > 0 || textLength <= 240) {
   //    console.log("just right");
   //    $("#save-edit-card").removeClass("disabled");
   //    $("#bottom-char-count").removeClass("text-danger");
   // }

   //check if password long enough
   // console.log(`The length is: ${textLength}`);
});

// $("#sign-up-email").keyup(function (e) {
//    console.log("Event", e);

//    //get the text from textarea

//    const text = e.target.value;
//    console.log(`inputted: ${text}`);

//    //check the length of the text

//    const textLength = text.length;
//    console.log(`The length is: ${textLength}`);

//    if (textLength === 0) {
//       console.log("email empty");
//    }
// });

// $("#sign-up-password").keyup(function (e) {
//    console.log("Event", e);

//    //get the text from textarea

//    const text = e.target.value;
//    console.log(`inputted: ${text}`);

//    //check the length of the text

//    const textLength = text.length;
//    console.log(`The length is: ${textLength}`);

//    if (textLength === 0) {
//       console.log("password empty");
//    } else if (textLength < 9) {
//       console.log("password short");
//    }
// });

// $("#lets-go").click(function () {
//    $("#sign-up-card").toggleClass("d-none");
//    $("#intro-card").toggleClass("d-none");
// });
