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
   const clickedAt = new Date(Date.now());
   const year = clickedAt.getFullYear();
   const month = clickedAt.getMonth();
   const day = clickedAt.getDate();

   // const hour = clickedAt.getHours();
   // const minutes = clickedAt.getMinutes();
   // const seconds = clickedAt.getSeconds();
   // const milliseconds = clickedAt.getMilliseconds();

   const formattedYear = String(year);
   const formattedMonth = String(month + 1);
   const formattedDay = String(day);
   const padding = `0`;

   //Possible options.  2 digit month, 2 digit day.  All good.
   // 1 digit month, 2 digit day.  Pad month
   // 2 digit month, 1 digit day.  Pad day.
   // 1 digit month, 1 digit day.  Pad both.

   if (formattedMonth.length !== 2 && formattedDay.length !== 2) {
      const createdAt =
         formattedYear + padding + formattedMonth + padding + formattedDay;
      console.log(`Created at`, createdAt);
   } else if (formattedMonth.length !== 2) {
      const createdAt = formattedYear + padding + formattedMonth + formattedDay;
      console.log(`Created at`, createdAt);
   } else if (formattedDay.length !== 2) {
      const createdAt = formattedYear + formattedMonth + padding + formattedDay;
      console.log(`Created at`, createdAt);
   } else {
      const createdAt = formattedYear + formattedMonth + formattedDay;
      console.log(`Created at`, createdAt);
   }
   // console log 'unacceptablePasswords'
   // this is made by concating most and secondMostInsecure passwords.
   //Remove obama2016 and skywalker

   // const spreadMostInsecurePasswords = [...mostInsecurePasswords];
   // // console.log(spreadMostInsecurePasswords);

   // const firstPassword = mostInsecurePasswords[0];
   // // console.log(`The first password in this array is ${firstPassword}.`);
   // const passwordsLength = mostInsecurePasswords.length;
   // // console.log(`The length of this array is ${passwordsLength}.`);

   const allBadPasswords = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );
   // console.log(
   //    `This should be a combined list of the two lists`,
   //    allBadPasswords
   // );

   const allFlatBadPasswords = allBadPasswords.flat();
   // console.log(`The flattened bad passwords are:`, allFlatBadPasswords);

   const allUniqBadPasswords = [...new Set(allFlatBadPasswords)];
   // console.log(
   //    `This should be only unique value bad passwords`,
   //    allUniqBadPasswords
   // );

   const firstBadPasswords = allUniqBadPasswords.slice(
      0,
      allUniqBadPasswords.indexOf("skywalker")
   );
   // console.log(`Here are the first passwords`, firstBadPasswords);

   const secondBadPasswords = allUniqBadPasswords.slice(
      allUniqBadPasswords.indexOf("skywalker") + 1,
      allUniqBadPasswords.indexOf("obama2016")
   );
   // console.log(`Here are the second set of passwords`, secondBadPasswords);

   const thirdBadPasswords = allUniqBadPasswords.slice(
      allUniqBadPasswords.indexOf("obama2016") + 1
   );
   // console.log(`Here are the third set of passwords`, thirdBadPasswords);

   const allCleanedBadPasswords = firstBadPasswords.concat(
      secondBadPasswords,
      thirdBadPasswords
   );

   //get rid of true and false
   let removedBooleanBadPasswords = [];
   for (let i = 0; i < allCleanedBadPasswords.length; i++) {
      //This returns elements in allCleanedBadPasswords on separate lines.

      const cleanBadPassword = allCleanedBadPasswords[i];
      // console.log(`This returns a bad password`, cleanBadPassword);
      const cleanBadPasswordType = typeof cleanBadPassword;
      // console.log(`This is the element type`, cleanBadPasswordType);

      if (cleanBadPasswordType !== "boolean") {
         removedBooleanBadPasswords = removedBooleanBadPasswords.concat([
            cleanBadPassword,
         ]);
      }
   } //Returns a list with true and false removed called removedbooleanBadPasswords.

   //turn number values into string values.
   let normalizedBadPasswords = [];
   for (let i = 0; i < removedBooleanBadPasswords.length; i++) {
      //This returns elements in removedBooleanBadPasswords on separate lines.

      const stringBadPassword = String(removedBooleanBadPasswords[i]);
      const lowerCasedBadPassword = stringBadPassword.toLowerCase();

      normalizedBadPasswords = normalizedBadPasswords.concat([
         lowerCasedBadPassword,
      ]);
   }
   //This produces an array of normalized bad passwords, ready to be reversed called normalizedBadPasswords.

   let penultimateList = [];
   let unacceptablePasswords = [];
   //make the final list include reversed password values.
   for (let i = 0; i < normalizedBadPasswords.length; i++) {
      const normalizedBadPassword = normalizedBadPasswords[i];
      const splitBadPassword = normalizedBadPassword.split("");
      const copyOfSplitBadPassword = [...splitBadPassword]; //Makes copy that can be reversed without adjusting original.
      const reverseSplitBadPassword = copyOfSplitBadPassword.reverse();
      const reverseSplitBadPasswordWhole = [reverseSplitBadPassword.join("")]; //reversed passwords put back together

      penultimateList = penultimateList.concat(reverseSplitBadPasswordWhole); //reversed passwords put back into an array.

      unacceptablePasswords = penultimateList.concat(normalizedBadPasswords); //reversed and regular arrays joined into a single one.
   }

   console.log(`These are unacceptable passwords:`, unacceptablePasswords);

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

   const passwordTyped = $("#sign-up-password").val();
   const stringPassword = String(passwordTyped);
   const passwordInput = stringPassword.toLowerCase();
   const passwordLength = passwordInput.length;

   console.log(`password input: ${passwordInput}`);
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
      $("#password-warning").html(
         "All or part of your email address cannot be used in your password."
      );
   } else if (unacceptablePasswords.includes(passwordInput)) {
      console.log("password contains insecure password");
      $("#password-warning").removeClass("d-none");
      $("#sign-up-password").addClass("is-invalid");
      $("#password-warning").html(
         `Your password contains a commonly used password, ${passwordInput} and can be easily discovered by attackers. Please use something else.`
      );
   } else if (passwordLength > 8) {
      console.log("just right password");
      $("#password-warning").addClass("d-none");
      $("#sign-up-password").removeClass("is-invalid");
   }
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
