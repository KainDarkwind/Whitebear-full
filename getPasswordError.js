function getPasswordError(password, email) {
   console.log("hi from show password error");

   const stringPassword = String(password);
   const passwordInput = stringPassword.toLowerCase();
   const passwordLength = passwordInput.length;
   const unacceptablePasswords = getUnacceptablePasswords();

   const emailParts = email.split("@");
   const localEmailPart = emailParts[0];

   console.log(`password input: ${passwordInput}`);

   if (passwordLength === 0) {
      console.log("no password entered");

      return "Please create a password.";
   } else if (passwordLength < 9) {
      console.log("short password entered");

      return "Your password must be at least 9 characters.";
   } else if (passwordInput.includes(localEmailPart)) {
      console.log("password contains email");

      return "All or part of your email address cannot be used in your password.";
   } else if (unacceptablePasswords.includes(passwordInput)) {
      console.log("password contains insecure password");
      console.log(`These are unacceptable passwords:`, unacceptablePasswords);

      return `Your password contains a commonly used password, ${passwordInput} and can be easily discovered by attackers. Please use something else.`;
   } else if (passwordLength > 8) {
      console.log("just right password");

      return "";
   }
}

function getUnacceptablePasswords() {
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
   let allUnacceptablePasswords = [];
   //make the final list include reversed password values.
   for (let i = 0; i < normalizedBadPasswords.length; i++) {
      const normalizedBadPassword = normalizedBadPasswords[i];
      const splitBadPassword = normalizedBadPassword.split("");
      const copyOfSplitBadPassword = [...splitBadPassword]; //Makes copy that can be reversed without adjusting original.
      const reverseSplitBadPassword = copyOfSplitBadPassword.reverse();
      const reverseSplitBadPasswordWhole = [reverseSplitBadPassword.join("")]; //reversed passwords put back together

      penultimateList = penultimateList.concat(reverseSplitBadPasswordWhole); //reversed passwords put back into an array.

      allUnacceptablePasswords = penultimateList.concat(normalizedBadPasswords); //reversed and regular arrays joined into a single one.
   }

   return allUnacceptablePasswords;
}
