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

// let createAnswerInputCharsCount = 0;
// $("#create-answer-input").keypress(function () {
//    createAnswerInputCharsCount += 1;

//    console.log("add it", createAnswerInputCharsCount);
//    $("#create-answer-char-count").html(createAnswerInputCharsCount);
// });

// let editTopInputCharsCount = 0;
// $("#top-text-edit").keypress(function () {
//    editTopInputCharsCount += 1;

//    const maxChars = 240;
//    console.log("add it", editTopInputCharsCount);
//    $("#top-char-count").html(editTopInputCharsCount);
// });

let editBottomInputCharsCount = 0;
$("#bottom-text-edit").keypress(function () {
   editBottomInputCharsCount += 1;

   const maxChars = 240;
   console.log("add it", editBottomInputCharsCount);
   $("#bottom-char-count").html(editBottomInputCharsCount);
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

// $("#lets-go").click(function () {
//    $("#sign-up-card").toggleClass("d-none");
//    $("#intro-card").toggleClass("d-none");
// });
