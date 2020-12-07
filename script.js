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

   //update the character counter on the page

   $("#create-char-count").html(textLength);
});

let createAnswerInputCharsCount = 0;
$("#create-answer-input").keypress(function () {
   createAnswerInputCharsCount += 1;

   console.log("add it", createAnswerInputCharsCount);
   $("#create-answer-char-count").html(createAnswerInputCharsCount);
});

let editTopInputCharsCount = 0;
$("#top-text-edit").keypress(function () {
   editTopInputCharsCount += 1;

   const maxChars = 240;
   console.log("add it", editTopInputCharsCount);
   $("#top-char-count").html(editTopInputCharsCount);
});

let editBottomInputCharsCount = 0;
$("#bottom-text-edit").keypress(function () {
   editBottomInputCharsCount += 1;

   const maxChars = 240;
   console.log("add it", editBottomInputCharsCount);
   $("#bottom-char-count").html(editBottomInputCharsCount);
});

// $("#lets-go").click(function () {
//    $("#sign-up-card").toggleClass("d-none");
//    $("#intro-card").toggleClass("d-none");
// });
