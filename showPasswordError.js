function showPasswordError() {
   const passwordInputLength = $("#sign-up-password-input").val().length;
   const passwordInput = $("#sign-up-password-input").val();
   const emailInput = $("#sign-up-email-input").val();
   const trimmedEmail = emailInput.trim();
   const lowerCasedEmail = trimmedEmail.toLowerCase();
   const normalizedPassword = passwordInput.toLowerCase().trim();

   /*const delimiter = `@`;
    const indexOfLocalEmail = lowerCasedEmail.indexOf(delimiter);
    console.log(`The index of local email is ${indexOfLocalEmail}.`);
    const localEmail = lowerCasedEmail.slice(0, indexOfLocalEmail);
    console.log(`The value of local email is ${localEmail}.`);*/

   const listOfEmailParts = lowerCasedEmail.split("@");
   // Split removes the item it is searching for, and places the other pieces into an array.  An empty string "" will return a split up list of each individual character.

   //console.log(listOfEmailParts);
   const localEmail = listOfEmailParts[0];

   const newMostInsecurePasswords = [...mostInsecurePasswords];
   const flatSecondMostInsecurePasswords = secondMostInsecurePasswords.flat();
   const initialUnacceptablePasswords = [
      ...newMostInsecurePasswords,
      ...flatSecondMostInsecurePasswords,
   ];

   //Right here I removed all of the duplicate passwords.
   const uniqueUnacceptablePasswords = [
      ...new Set(initialUnacceptablePasswords),
   ];

   /*const firstHolidays = allUniqHolidays.slice(0, allUniqHolidays.indexOf(2020));
 //This goes through the allUniqHolidays array from the beginning to the index of 2020, and takes everything prior to 2020, putting it in a variable called firstHolidays.
 console.log(`Here are the first holidays:`, firstHolidays);
 
 const secondHalfStartingHoliday = "Thanksgiving Day (November 28)";
 const secondHolidays = allUniqHolidays.slice(
    allUniqHolidays.indexOf(secondHalfStartingHoliday)
 );
 
 Remove skywalker
 Create a list prior to skywalker 
 Create a list after skywalker
 Concat those two lists
 
 Remove obama2016
 Create a list prior to obama2016 from the non-skywalker list
 Create a list after obama2016
 Concat those two lists
 
 Remove duplicates with Set
 
 */

   const firstRemainingUnacceptablePasswords =
      uniqueUnacceptablePasswords.slice(
         0,
         uniqueUnacceptablePasswords.indexOf("skywalker")
      );
   /*  console.log(
       "This is the first slice of passwords without skywalker",
       firstRemainingUnacceptablePasswords
    );
 */
   const secondRemainingUnacceptablePasswords =
      uniqueUnacceptablePasswords.slice(
         uniqueUnacceptablePasswords.indexOf("skywalker") + 1
      );
   /* console.log(
       "This is the second slice of passwords without skywalker",
       secondRemainingUnacceptablePasswords
    );*/

   const skywalkerlessUnacceptablePasswords = [
      ...firstRemainingUnacceptablePasswords,
      ...secondRemainingUnacceptablePasswords,
   ];

   const firstObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         0,
         skywalkerlessUnacceptablePasswords.indexOf("obama2016")
      );
   /*  console.log(
       "This is the first slice of passwords without obama",
       firstObamalessUnacceptablePasswords
    );*/

   const secondObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         skywalkerlessUnacceptablePasswords.indexOf("obama2016") + 1
      );
   /* console.log(
       "This is the second slice of passwords without obama",
       secondObamalessUnacceptablePasswords
    );*/

   const cleanedUnacceptablePasswords = [
      ...firstObamalessUnacceptablePasswords,
      ...secondObamalessUnacceptablePasswords,
   ];

   let booleanFreeUnacceptablePasswords = [];
   for (let i = 0; i < cleanedUnacceptablePasswords.length; i++) {
      const passwordInQuestion = cleanedUnacceptablePasswords[i];

      if (typeof passwordInQuestion !== "boolean") {
         booleanFreeUnacceptablePasswords =
            booleanFreeUnacceptablePasswords.concat([
               cleanedUnacceptablePasswords[i],
            ]);
         //if the password is not a boolean (true/false), we are sticking it into the array.
      } else {
         //else, skip boolean value
      }
   }
   let monoDataTypeUnacceptablePasswords = [];
   for (let i = 0; i < booleanFreeUnacceptablePasswords.length; i++) {
      const passwordInQuestion = booleanFreeUnacceptablePasswords[i];

      if (typeof passwordInQuestion === "number") {
         const stringPassword = String(passwordInQuestion);
         monoDataTypeUnacceptablePasswords =
            monoDataTypeUnacceptablePasswords.concat([stringPassword]);
         //If the password is a number, we turn it to a string and put it into the array.
      } else {
         monoDataTypeUnacceptablePasswords =
            monoDataTypeUnacceptablePasswords.concat([
               booleanFreeUnacceptablePasswords[i],
            ]);
         //If the password isn't a number, we leave it alone but put it into the array.
      }
   }

   //Use a for loop to reverse every string in your list and add them to a new list. Your list should contain both the forward and reverse versions of each password.

   //we run a for loop to go through the password list.
   let unacceptableAndReversedPasswords = [];
   for (let i = 0; i < monoDataTypeUnacceptablePasswords.length; i++) {
      const passwordInQuestion = monoDataTypeUnacceptablePasswords[i];
      //console.log("password in question is", passwordInQuestion);

      //For each item in the array, we are going to split it with a blank string "".  This will give us the item in an array of its parts, aka letters.

      const passwordLetters = passwordInQuestion.split("");
      //console.log("split password is", passwordLetters);

      /*for (let i = 0; i < listOfPasswords.length; i++) {
          const passwordInQuestion = listOfPasswords[i];
          const splitPassword = passwordInQuestion.split("");
          console.log("list of passwords is", listOfPasswords);
          console.log("password in question is", passwordInQuestion);
          console.log("split password is", splitPassword);
       }*/
      //We will then make a copy of that array of parts with the spread ... operator.  We want to keep the original list intact.

      const copyOfPasswordLetters = [...passwordLetters];
      //console.log("copy of password letters is", copyOfPasswordLetters);
      //We will then reverse the order of that array of parts with the .reverse() method.

      const reversedPasswordLetters = copyOfPasswordLetters.reverse();
      //console.log("reversed password letters are", reversedPasswordLetters);
      //We will then put that reversed order back together with the .join("") method.

      const reversedPasswords = reversedPasswordLetters.join("");
      // console.log("rejoined reversed passwords are", reversedPasswords);
      //We will then add that reversed string to the true final array.

      unacceptableAndReversedPasswords =
         unacceptableAndReversedPasswords.concat([
            monoDataTypeUnacceptablePasswords[i],
            reversedPasswords,
         ]);
   }

   console.log("the list so far is", unacceptableAndReversedPasswords);

   //Use a for loop to lowercase every string in your list.

   //we run a for loop to go through the password list.

   let unacceptableAndFormattedPasswords = [];
   for (let i = 0; i < unacceptableAndReversedPasswords.length; i++) {
      const passwordInQuestion = unacceptableAndReversedPasswords[i];
      //console.log("password in question is", passwordInQuestion);

      //For each item in the array, we are going to lowercase it with the
      const formattedPasswords = passwordInQuestion.toLowerCase().trim();

      //We will then add that reversed string to the true final array.
      unacceptableAndFormattedPasswords =
         unacceptableAndFormattedPasswords.concat([formattedPasswords]);
   }
   console.log(
      "Formatted and reversed passwords are",
      unacceptableAndFormattedPasswords
   );

   //Running set to remove any crafty palindrome passwords from the final list.
   const unacceptablePasswords = [
      ...new Set(unacceptableAndFormattedPasswords),
   ];

   if (passwordInputLength === 0) {
      console.log("There is no password text entered.");
      $("#sign-up-password-error").html("Please create a password.");
      $("#sign-up-password-error-addendum").html(
         "Must be at least 9 characters."
      );
      $("#sign-up-password-input").addClass("is-invalid");
   } else if (passwordInputLength < 9) {
      console.log("The password is too short.");
      $("#sign-up-password-error").html(
         "Your password must be at least 9 characters."
      );
      $("#sign-up-password-error-addendum").html("");
      $("#sign-up-password-input").addClass("is-invalid");
   } else if (
      normalizedPassword.includes(localEmail) &&
      localEmail.length >= 4
   ) {
      console.log("The password cannot match email.");
      $("#sign-up-password-error").html(
         "All or part of your email address cannot be used in your password."
      );
      $("#sign-up-password-error-addendum").html("");
      $("#sign-up-password-input").addClass("is-invalid");
   } else if (unacceptablePasswords.includes(normalizedPassword)) {
      console.log("The password cannot be lame.");
      $("#sign-up-password-error").html(
         `Your password contains a commonly used password, "${passwordInput}" and can be easily discovered by attackers. Please use something else.`
      );
      $("#sign-up-password-error-addendum").html("");
      $("#sign-up-password-input").addClass("is-invalid");
      console.log(
         "This is the final list of unacceptable passwords:",
         unacceptablePasswords
      );
   } else {
      console.log("The password is just right.");
      console.log("The user's email is", lowerCasedEmail);

      $("#sign-up-password-error").html("");
      $("#sign-up-password-error-addendum").html("");
      $("#sign-up-password-input").removeClass("is-invalid");
   }
}
