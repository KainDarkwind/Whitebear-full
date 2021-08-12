function getPasswordError(password, email) {
   const normalizedPassword = password.toLowerCase().trim();
   const passwordInputLength = normalizedPassword.length;
   const listOfEmailParts = email.split("@");
   // Split removes the item it is searching for, and places the other pieces into an array.  An empty string "" will return a split up list of each individual character.

   const localEmail = listOfEmailParts[0];
   const unacceptablePasswords = getUnacceptablePasswords();

   if (passwordInputLength === 0) {
      console.log("There is no password text entered.");
      return "Please create a password.";
   } else if (passwordInputLength < 9) {
      console.log("The password is too short.");

      return "Your password must be at least 9 characters.";
   } else if (
      normalizedPassword.includes(localEmail) &&
      localEmail.length >= 4
   ) {
      console.log("The password cannot match email.");

      return "All or part of your email address cannot be used in your password.";
   } else if (unacceptablePasswords.includes(normalizedPassword)) {
      console.log("The password cannot be lame.");
      console.log(
         "This is the final list of unacceptable passwords:",
         unacceptablePasswords
      );
      return `Your password contains a commonly used password, "${password}" and can be easily discovered by attackers. Please use something else.`;
   } else {
      console.log("The password is just right.");
      console.log("The user's email is", email);
      return "";
   }
}

function getUnacceptablePasswords() {
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

   const firstRemainingUnacceptablePasswords =
      uniqueUnacceptablePasswords.slice(
         0,
         uniqueUnacceptablePasswords.indexOf("skywalker")
      );

   const secondRemainingUnacceptablePasswords =
      uniqueUnacceptablePasswords.slice(
         uniqueUnacceptablePasswords.indexOf("skywalker") + 1
      );

   const skywalkerlessUnacceptablePasswords = [
      ...firstRemainingUnacceptablePasswords,
      ...secondRemainingUnacceptablePasswords,
   ];

   const firstObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         0,
         skywalkerlessUnacceptablePasswords.indexOf("obama2016")
      );

   const secondObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         skywalkerlessUnacceptablePasswords.indexOf("obama2016") + 1
      );

   const cleanedUnacceptablePasswords = [
      ...firstObamalessUnacceptablePasswords,
      ...secondObamalessUnacceptablePasswords,
   ];

   let booleanFreePasswords = [];
   cleanedUnacceptablePasswords.forEach((passwordInQuestion) => {
      if (typeof passwordInQuestion !== "boolean") {
         booleanFreePasswords = booleanFreePasswords.concat(passwordInQuestion); //if the password is not a boolean (true/false), we are sticking it into the array.
      }
   });

   let stringedPasswords = [];
   booleanFreePasswords.forEach((passwordInQuestion) => {
      if (typeof passwordInQuestion === "number") {
         const stringPassword = String(passwordInQuestion);
         stringedPasswords = stringedPasswords.concat(stringPassword); //If the password is a number, we turn it to a string and put it into the array.
      } else {
         stringedPasswords = stringedPasswords.concat(passwordInQuestion); //If the password isn't a number, we leave it alone but put it into the array.
      }
   });

   let mirroredPasswords = [];
   stringedPasswords.forEach((passwordInQuestion) => {
      const passwordLetters = passwordInQuestion.split(""); //splitting at a blank string splits the string into an array of its parts.
      const copyOfPasswordLetters = [...passwordLetters]; //We will then make a copy of that array of parts with the spread ... operator.  We want to keep the original list intact.
      const reversedPasswordLetters = copyOfPasswordLetters.reverse(); //this switches the order of the array.

      const reversedPasswords = reversedPasswordLetters.join(""); //this puts the letters, now reversed, back into a string from the array.

      mirroredPasswords = mirroredPasswords.concat(
         stringedPasswords,
         reversedPasswords
      ); //We will then add that reversed string plus the non-reversed to the true final array.
   });

   let normalizedPasswords = [];
   mirroredPasswords.forEach((passwordInQuestion) => {
      //For each item in the array, we are going to lowercase it with:
      lowerTrimmedPassword = passwordInQuestion.toLowerCase().trim();
      normalizedPasswords = normalizedPasswords.concat(lowerTrimmedPassword);
   });
   const unacceptablePasswords = [...new Set(normalizedPasswords)]; //Running set to remove any crafty palindrome passwords from the final list.

   return unacceptablePasswords;
}
