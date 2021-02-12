function getEmailError(email) {
   console.log("hi from show email error");
   const emailLength = email.length;

   if (emailLength === 0) {
      console.log("no email entered");
      //remove d-none from #sign-up-email-error,  add class 'is-invalid' to #sign-up-email-input
      // $("#sign-up-email-error").removeClass("d-none");
      // $("#sign-up-email-error").html("Please enter your email.");
      // $("#sign-up-email-input").addClass("is-invalid");
      return "Please enter your email.";
   } else {
      console.log(`Nice to meet you, "${email}"`);
      // $("#sign-up-email-error").addClass("d-none");
      // $("#sign-up-email-input").removeClass("is-invalid");
      return "";
   }
}
