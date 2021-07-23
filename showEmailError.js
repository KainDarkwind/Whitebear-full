function showEmailError() {
   const emailInputLength = $("#sign-up-email-input").val().length;
   const emailInput = $("#sign-up-email-input").val();

   const clickedAt = new Date(Date.now()); //This produces a date at the very moment the function runs.
   const year = clickedAt.getFullYear();
   const month = clickedAt.getMonth();
   const day = clickedAt.getDate();
   const formattedYear = String(year);
   const formattedMonth = String(month + 1);
   const formattedDay = String(day);

   //If the formatted length is less than 2, we will concat a 0 to the left of the string.  Else we leave it.

   if (formattedMonth.length < 2 && formattedDay.length < 2) {
      console.log("The month and day need padding");
      const paddedMonth = "0" + formattedMonth;
      const paddedDay = "0" + formattedDay;
      const dateFormat1 = formattedYear + paddedMonth + paddedDay;
      console.log(dateFormat1);
      const createdAt = Number(dateformat1);
      console.log("created at", createdAt);
   } else if (formattedMonth.length < 2) {
      console.log("The month needs padding");
      const paddedMonth = "0" + formattedMonth;
      console.log(paddedMonth);
      const dateFormat1 = formattedYear + paddedMonth + formattedDay;
      console.log(dateFormat1);
      const createdAt = Number(dateFormat1);
      console.log("created at", createdAt);
   } else if (formattedDay.length < 2) {
      console.log("The day needs padding");
      const paddedDay = "0" + formattedDay;
      console.log(paddedDay);
      const dateFormat1 = formattedYear + formattedMonth + paddedDay;
      console.log(dateFormat1);
      const createdAt = Number(dateFormat1);
      console.log("created at", createdAt);
   } else {
      const dateFormat1 = formattedYear + formattedMonth + formattedDay;
      console.log(dateFormat1);
      const createdAt = Number(dateFormat1);
      console.log("created at", createdAt);
   }

   console.log("The email entered is:", emailInput);

   //const trimmedEmail = emailInput.trim();
   //   const lowerCasedEmail = trimmedEmail.toLowerCase();

   if (emailInputLength === 0) {
      console.log("There is no email text entered.");
      $("#sign-up-email-error").html("Please enter your email address.");
      $("#sign-up-email-input").addClass("is-invalid");
   } else {
      console.log("The email is just right.");
      $("#sign-up-email-error").html("");
      $("#sign-up-email-input").removeClass("is-invalid");
   }
}
