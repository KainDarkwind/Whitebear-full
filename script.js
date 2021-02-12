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

//Testing the commit

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

$("#lets-go").click(function (e) {
   console.log("Event", e);
   const emailInput = $("#sign-up-email-input").val();
   console.log(emailInput);
   const email = emailInput.trim().toLowerCase();
   const password = $("#sign-up-password-input").val();
   //check if email empty

   const passwordError = getPasswordError(password, email); //returns a string
   console.log(passwordError);
   if (passwordError !== "") {
      const element = "#sign-up-password";
      const message = passwordError;
      showError(element, message);
   } else {
      const element = "#sign-up-password";
      const message = passwordError;
      hideError(element, message);
   }

   const emailError = getEmailError(email);
   console.log(emailError);
   if (emailError !== "") {
      const element = "#sign-up-email";
      const message = emailError;
      showError(element, message);
   } else {
      const element = "#sign-up-email";
      const message = emailError;
      hideError(element, message);
   }

   if (emailError === "" && passwordError === "") {
      const clickedAt = new Date(Date.now());
      const year = clickedAt.getFullYear();
      const month = clickedAt.getMonth();
      const day = clickedAt.getDate();

      // const hour = clickedAt.getHours();
      // const minutes = clickedAt.getMinutes();
      // const seconds = clickedAt.getSeconds();
      const milliseconds = clickedAt.getMilliseconds();

      const formattedYear = String(year);
      const formattedMonth = String(month + 1);
      let formattedDay = String(day);
      let formattedMilliseconds = String(milliseconds);
      // formattedDay = `9`; //uncomment for testing purposes

      const createdAt =
         formattedYear +
         padLeft(formattedMonth, 2, "0") +
         padLeft(formattedDay, 2, "0");

      const randomIdInt = getRandomInt(0, 999);
      const formattedRandomIdInt = String(randomIdInt);

      const id =
         padLeft(formattedRandomIdInt, 3, "0") +
         padLeft(formattedMilliseconds, 3, "0");

      const userProps = [email, password, createdAt, id];
      console.log(userProps);
   }

   //if EmailError or PasswordError do not trigger, then create userProps.  Can I create a condition within those errors on a success that the if statement here checks for?

   //check if password empty
});

function showError(element, message) {
   $(`${element}-input`).addClass("is-invalid");
   $(`${element}-error`).html(message);
}

function hideError(element, message) {
   $(`${element}-input`).removeClass("is-invalid");
   $(`${element}-error`).html(message);
}

//TODO:  showPasswordError > const passwordError = getPasswordError(password, email);, showEmailError > getEmailError()
// showError(element, errorMessage), will work for both email and password
/*
getPasswordError():  This function will check the password input and return a string.  (Empty string if no error)
getEmailError(): This function will check the email input and return a string.
showError(element, errorMessage): This function will display the message for any element given.
hideError(element, errorMessage): This function hides the message for any element given. 

if there are no errors (ie, if the strings are blank), then you will console.log the userProps.




*/

// function padLeft(str) {
//    const padding = `0`;
//    if (str.length === 1) {
//       return padding + str;
//    } else {
//       return str;
//    }
// }

function padLeft(num, width, char) {
   const numAsStr = String(num);
   let padding = "";
   for (let i = 0; i < width; i++) {
      padding += char;
   }

   const concattedStr = padding + numAsStr;

   if (numAsStr.length >= width) {
      return numAsStr;
   }
   const slicedStr = concattedStr.slice(-width);
   return slicedStr;
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max + 1 - min) + min); //max is normally exclusive, min is inclusive, so +1 allows you to include the max.
}

const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

console.log(user.email);

// function getEmail() {
//    //get the user's email from the input with jQuery

//    return email;
// }

// function getPassword() {
//    //get the user's password from the input with jQuery

//    return password;
// }

// function getCreatedAt() {
//    //generate createdAt number
//    return CreatedAt;
// }

// function getId() {
//    // generate id string
//    return id;
// }
