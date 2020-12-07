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

let editTopCharsCount = 0;
$("#top-text-edit").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const text = e.target.value;
   console.log(`inputted: ${text}`);

   //check the length of the text

   const textLength = text.length;
   console.log(`The length is: ${textLength}`);

   if (textLength === 0) {
      console.log("no top text entered");
      $("#save-edit-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("too much top entered");
      $("#save-edit-card").addClass("disabled");
      $("#top-char-count").addClass("text-danger");
   } else if (textLength > 0 || textLength <= 240) {
      console.log("just right");
      $("#save-edit-card").removeClass("disabled");
      $("#top-char-count").removeClass("text-danger");
   }

   //update the character counter on the page
   $("#top-char-count").html(textLength);
});

let editBottomCharsCount = 0;
$("#bottom-text-edit").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const text = e.target.value;
   console.log(`inputted: ${text}`);

   //check the length of the text

   const textLength = text.length;
   console.log(`The length is: ${textLength}`);

   if (textLength === 0) {
      console.log("no bottom text entered");
      $("#save-edit-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("too much bottom entered");
      $("#save-edit-card").addClass("disabled");
      $("#bottom-char-count").addClass("text-danger");
   } else if (textLength > 0 || textLength <= 240) {
      console.log("just right");
      $("#save-edit-card").removeClass("disabled");
      $("#bottom-char-count").removeClass("text-danger");
   }

   //update the character counter on the page
   $("#bottom-char-count").html(textLength);
});

$("#lets-go").click(function (e) {
   console.log("Event", e);

   //check if email empty

   const emailInput = $("#sign-up-email").val();
   const emailLength = emailInput.length;
   console.log(`email inputted: ${emailInput}`);

   if (emailLength === 0) {
      console.log("no email entered");
      //remove d-none from #no-email-warning  add class 'is-invalid' to #sign-up-email
      $("#no-email-warning").removeClass("d-none");
      $("#sign-up-email").addClass("is-invalid");
   } else if (emailLength > 0) {
      console.log("just right email");
      $("#no-email-warning").addClass("d-none");
      $("#sign-up-email").removeClass("is-invalid");
   }

   //check if password empty

   const passwordInput = $("#sign-up-password").val();
   const passwordLength = passwordInput.length;
   console.log(`password inputted: ${passwordInput}`);

   if (passwordLength === 0) {
      console.log("no password entered");
      //remove d-none from #no-email-warning  add class 'is-invalid' to #sign-up-email
      $("#no-password-warning").removeClass("d-none");
      $("#sign-up-password").addClass("is-invalid");
   } else if (passwordLength < 9) {
      console.log("short password entered");
      $("#short-password-warning").removeClass("d-none");
      $("#no-password-warning").addClass("d-none");
      $("#sign-up-password").addClass("is-invalid");
   } else if (passwordLength > 8) {
      console.log("just right password");
      $("#short-password-warning").addClass("d-none");
      $("#no-password-warning").addClass("d-none");
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

$("#sign-up-email").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const text = e.target.value;
   console.log(`inputted: ${text}`);

   //check the length of the text

   const textLength = text.length;
   console.log(`The length is: ${textLength}`);

   if (textLength === 0) {
      console.log("email empty");
   }
});

$("#sign-up-password").keyup(function (e) {
   console.log("Event", e);

   //get the text from textarea

   const text = e.target.value;
   console.log(`inputted: ${text}`);

   //check the length of the text

   const textLength = text.length;
   console.log(`The length is: ${textLength}`);

   if (textLength === 0) {
      console.log("password empty");
   } else if (textLength < 9) {
      console.log("password short");
   }
});

// $("#lets-go").click(function () {
//    $("#sign-up-card").toggleClass("d-none");
//    $("#intro-card").toggleClass("d-none");
// });
