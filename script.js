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
$("#create-imagery-input").keydown(function (e) {
   const key = e.which;
   console.log(key);

   //If the key pressed is backspace, counter -1.
   if (key === 8) {
      console.log("user pressed backspace");
      imageryCharsCount -= 1;
      if (imageryCharsCount < 0) {
         console.log("enter negative");
         imageryCharsCount = 0;
      }
   } else if (key === 16 || key === 20 || key === 9 || key === 18) {
      // shift, caps, tab was pressed
      console.log("doesn't count");
   } else {
      //Else, counter +1.
      console.log("user pressed another key");
      imageryCharsCount += 1;
   }

   console.log("Total inputted chars: ", imageryCharsCount);
   $("#create-char-count").html(imageryCharsCount);
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
