const dbUserDetails = ["will@email.com", "kaindarkwind"];

$("#login-button").click(function () {
   const emailInput = $("#email-input").val();
   const passwordInput = $("#password-input").val();
   const userInputDetails = [emailInput, passwordInput];

   const isUserInDb = checkIsUserInDb(dbUserDetails, userInputDetails);
   if (isUserInDb) {
      //continue
      console.log("Let's continue.");
      disableElement("#login-button");
      disableElement("#email-input");
      disableElement("#password-input");
   } else {
      console.log("This user not found");
   }
});

function checkIsUserInDb(dbUserDetails, userInputDetails) {
   console.log(dbUserDetails);
   console.log(userInputDetails);

   if (
      dbUserDetails[0] === userInputDetails[0] &&
      dbuserDetails[1] === userInputDetails[1]
   ) {
      return true;
   } else return false;
}

function disableElement(id) {
   $(id).attr("disabled", "disabled");
}
