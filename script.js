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
let createImageryInputCharsCount = 0;
$("#create-imagery-input").keypress(function () {
   createImageryInputCharsCount += 1;

   const maxChars = 240;
   console.log("add it", createImageryInputCharsCount);
   $("#create-char-count").html(createImageryInputCharsCount);
});

let createAnswerInputCharsCount = 0;
$("#create-answer-input").keypress(function () {
   createAnswerInputCharsCount += 1;

   const maxChars = 240;
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
