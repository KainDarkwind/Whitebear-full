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
   console.log("pressed key in text area");
   console.log(e.which);
   //If the key is backspace, decrement
   const key = e.which;

   if (key === 8) {
      console.log("The user pressed backspace!");
      imageryCharsCount--;
      if (imageryCharsCount < 0) {
         console.log("You have entered negative territory");
         imageryCharsCount = 0;
      }
   } else if (key === 16 || key === 18) {
      console.log("This doesn't count");
   } else {
      console.log("The user pressed other key!");
      imageryCharsCount += 1;
      //If the key is anything else, increment.
   }

   /*This lets me add 1 to the variable 
   imageryCharsCount++; also would add 1.
   */
   console.log("Total input chars: ", imageryCharsCount);
   $("#create-char-count").html(imageryCharsCount);
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
