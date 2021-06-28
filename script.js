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
   console.log("pressed key in text area");

   createImageryInputCharsCount += 1; /*This lets me add 1 to the variable 
   createImageryInputCharsCount++; also would add 1.
   */
   console.log("Total input chars: ", createImageryInputCharsCount);
   $("#create-char-count").html(createImageryInputCharsCount);
});

let editTopCharsCount = 0;
$("#edit-top-input").keypress(function () {
   console.log("pressed key in text area");

   editTopCharsCount += 1; /*This lets me add 1 to the variable 
   createImageryInputCharsCount++; also would add 1.
   */
   console.log("Total input chars: ", editTopCharsCount);
   $("#edit-top-char-count").html(editTopCharsCount);
});

let editBottomCharsCount = 0;
$("#edit-bottom-input").keypress(function () {
   console.log("pressed key in text area");

   editBottomCharsCount += 1; /*This lets me add 1 to the variable 
   createImageryInputCharsCount++; also would add 1.
   */
   console.log("Total input chars: ", editBottomCharsCount);
   $("#edit-bottom-char-count").html(editBottomCharsCount);
});
