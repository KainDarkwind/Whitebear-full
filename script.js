$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#save-edit-card").click(function () {
   $("#overlay-fail").toggleClass("d-flex d-none");
});

/*$("#sign-up").click(function () {
   $("#sign-up-card").toggleClass("d-none");
   $("#intro-card").toggleClass("d-none");
});*/
//Commented out for testing purposes.  Also switched d-none on these elements.

$("#delete-button").click(function () {
   $("#delete-card").toggleClass("d-none");
});

$("#create-imagery-input").keyup(function (e) {
   console.log("Event", e);

   const text = e.target.value;
   const textLength = text.length;
   if (textLength === 0) {
      console.log("There is no text entered.");
      $("#save-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#save-card").addClass("disabled");
      $("#create-char-count").removeClass("text-muted");
      $("#create-char-count").addClass("text-danger");
   } else {
      console.log("Just right.");
      $("#save-card").removeClass("disabled");
      $("#create-char-count").addClass("text-muted");
      $("#create-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#create-char-count").html(textLength);
});

$("#answer-input").keyup(function (e) {
   console.log("Event", e);

   const text = e.target.value;
   const textLength = text.length;
   if (textLength === 0) {
      console.log("There is no text entered.");
      $("#next-card").addClass("disabled");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#next-card").addClass("disabled");
      $("#answer-char-count").removeClass("text-muted");
      $("#answer-char-count").addClass("text-danger");
   } else {
      console.log("Just right.");
      $("#next-card").removeClass("disabled");
      $("#answer-char-count").addClass("text-muted");
      $("#answer-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#answer-char-count").html(textLength);
});

$("#edit-top-input").keyup(function (e) {
   console.log("Event", e);
   console.log("Bottom value", $("#edit-bottom-input").val().length);

   const text = e.target.value;
   const textLength = text.length;
   const textLengthBottom = $("#edit-bottom-input").val().length;

   if (textLength === 0 || textLengthBottom === 0) {
      console.log("There is no text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-top-char-count").addClass("text-muted");
      $("#edit-top-char-count").removeClass("text-danger");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-top-char-count").removeClass("text-muted");
      $("#edit-top-char-count").addClass("text-danger");
   } else if (textLengthBottom > 240) {
      console.log("There is too much text entered in top.");
      $("#save-edit-card").addClass("disabled");
   } else {
      console.log("Just right.");
      $("#save-edit-card").removeClass("disabled");
      $("#edit-top-char-count").addClass("text-muted");
      $("#edit-top-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#edit-top-char-count").html(textLength);
});

$("#edit-bottom-input").keyup(function (e) {
   console.log("Event", e);

   const text = e.target.value;
   const textLength = text.length;
   const textLengthTop = $("#edit-top-input").val().length;

   if (textLength === 0 || textLengthTop === 0) {
      console.log("There is no text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-top-char-count").addClass("text-muted");
      $("#edit-top-char-count").removeClass("text-danger");
   } else if (textLength > 240) {
      console.log("There is too much text entered.");
      $("#save-edit-card").addClass("disabled");
      $("#edit-bottom-char-count").removeClass("text-muted");
      $("#edit-bottom-char-count").addClass("text-danger");
   } else if (textLengthTop > 240) {
      console.log("There is too much text entered in top.");
      $("#save-edit-card").addClass("disabled");
   } else {
      console.log("Just right.");
      $("#save-edit-card").removeClass("disabled");
      $("#edit-bottom-char-count").addClass("text-muted");
      $("#edit-bottom-char-count").removeClass("text-danger");
   }
   console.log("Text entered: ", text);
   console.log("The length of the text entered is", textLength);
   $("#edit-bottom-char-count").html(textLength);
});

$("#lets-go").click(function (e) {
   const emailInput = $("#sign-up-email-input").val();
   const email = emailInput.trim().toLowerCase();
   const password = $("#sign-up-password-input").val();

   const emailError = getEmailError(email);

   const user = {
      email: email,
      password: password,
      createdAt: getCreatedAt(),
      id: getId(),
      emailTld: getTld(email),
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   };

   const activeUser = deepCopy(user);
   activeUser.isActive = true;
   activeUser.createdAt = getEpochMs(user.createdAt);
   //removeSmAndMdImages(activeUser.socialProfiles);
   activeUser.socialProfiles.forEach((socialProfile) => {
      if (socialProfile.image.hasOwnProperty("sm")) {
         delete socialProfile.image.sm;
      }
      if (socialProfile.image.hasOwnProperty("md")) {
         delete socialProfile.image.md;
      }
   });

   if (emailError !== "") {
      showErrorMessage("#sign-up-email", emailError);
   } else {
      hideErrorMessage("#sign-up-email", emailError);
      //Else hide any error messages/styling.
   }

   const passwordError = getPasswordError(password, email);
   //console.log("Currently, passwordError is returning this:", passwordError);

   if (passwordError !== "") {
      showErrorMessage("#sign-up-password", passwordError);
   } else {
      hideErrorMessage("#sign-up-password", passwordError);
      //Else hide any error messages/styling.
      console.log("The user is", user);
      console.log("The active user is", activeUser);
   }
   //If password error is not "",
});

/*Add a property called emailTld to the user object and set its value by returning a string from a getTld() function. getTld() takes an email address as a parameter and returns the top level domain.

emailTld: getTld(userEmail) // a string like “com” or “io” or “design”
*/

function getTld(email) {
   const listOfEmailParts = email.split("@");
   const domainEmail = listOfEmailParts[1];

   if (domainEmail === undefined) {
      return "";
   } else {
      const listOfDomainParts = domainEmail.split(".");

      if (listOfDomainParts === undefined) {
         return "";
      } else {
         return listOfDomainParts[1];
      }
   }
}

function showErrorMessage(element, errorMessage) {
   //style and show error message.
   $(`${element}-input`).addClass("is-invalid");
   $(`${element}-error`).html(errorMessage);
}

function hideErrorMessage(element, errorMessage) {
   //Else hide any error messages/styling.
   $(`${element}-input`).removeClass("is-invalid");
   $(`${element}-error`).html(errorMessage);
}

function getCreatedAt() {
   const clickedAt = new Date(Date.now()); //This produces a date at the very moment the function runs.
   const year = clickedAt.getFullYear();
   const month = clickedAt.getMonth();
   const day = clickedAt.getDate();
   const formattedYear = String(year);
   let formattedMonth = String(month + 1);
   let formattedDay = String(day);

   //If the formatted length is less than 2, we will concat a 0 to the left of the string.  Else we leave it.

   if (formattedMonth.length < 2) {
      console.log("The month needs padding");
      //formattedMonth = "0" + formattedMonth;
      formattedMonth = padLeft(formattedMonth, 2, "0");
   }

   if (formattedDay.length < 2) {
      console.log("The day needs padding");
      //formattedDay = 0 + formattedDay;
      formattedDay = padLeft(formattedMonth, 2, "0");
   }

   return formattedYear + formattedMonth + formattedDay;
}

function getId() {
   const randomInt = getRandomInt(1, 999);
   const paddedInt = padLeft(randomInt, 3, "0");
   const createdAt = new Date(Date.now());
   const milliseconds = createdAt.getMilliseconds();
   const formattedMilliseconds = String(milliseconds);
   const paddedMilliseconds = padLeft(formattedMilliseconds, 3, "0");
   return paddedInt + paddedMilliseconds;
}

/*function padLeft(element, paddingAmount, paddingType) {
   //if element length is less than padding number,
   if (element.length < paddingAmount) {
      const paddedNumber = paddingType + element;
      //add padding equal to difference and return result as a string.
      console.log("the padded element is", paddedNumber);
      return paddedNumber;
   } else {
      const paddedNumber = element;
      console.log("the unpadded element is", paddedNumber);
      return paddedNumber;

      //if element length is equal to or greater than padding number, return element as a string.
   }
}*/

function padLeft(num, width, char) {
   const numAsStr = String(num);
   let padding = "";
   for (let i = 0; i < width; i++) {
      padding += char;
   }
   console.log("Padding is", padding);

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

function deepCopy(obj) {
   const str = JSON.stringify(obj);

   return safelyParseJson(str);
}

function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}

function getEpochMs(value) {
   const originalDate = value.toString();
   const formattedYear = originalDate.slice(0, 4);
   const formattedMonth = originalDate.slice(4, 6) - 1;
   const formattedDay = originalDate.slice(6);
   const formattedDate = new Date(formattedYear, formattedMonth, formattedDay);
   const epochMs = formattedDate.getTime();

   return epochMs;
}

/*let activeUsers = [];

users.forEach((user) => {
   if (user.isActive) {
      activeUsers = activeUsers.concat(user);
   }
});*/

/*"list to be acted on".forEach((part of list) => {
    stuff we want to do
})*/

function removeSmAndMdImages(socialProfiles) {
   for (let i = 0; i < socialProfiles.length; i++) {
      const profile = socialProfiles[i];
      const hasImageProp = profile.hasOwnProperty("image");
      const images = profile.image;
      const hasSmProp = images.hasOwnProperty("sm");
      const hasMdProp = images.hasOwnProperty("md");

      if (hasMdProp === true) {
         // if this profile has md property, remove md property
         delete images.md;
      }
   }
   return socialProfiles;
}

function removeExcessImages(array, nonExcessImage) {
   console.log("the first part of the array socialProfiles is:", array[0]);

   /*  The array I am searching is socialProfiles, which is a key in an object user.

To access socialProfiles, I would use the following notation.

const socialProfilesContents = user.socialProfiles;

Once I am searching socialProfilesContents, I want to scan each item in the array.  Specifically speaking, that means I need to scan user.socialProfiles[0] and user.socialProfiles[1].  Generally, that means I want to scan user.socialProfiles[0] to socialProfiles["last item"]

I want to scan socialProfiles[0] and access the nested image object.  user.socialProfiles[0].image*/

   for (let i = 0; i < array.length; i++) {
      const arrayKeys = Object.keys(array[i]);
      console.log("the keys of the socialProfiles are:", arrayKeys);
      console.log("the array length of social profiles is:", array.length);

      console.log(
         "the array length of keys in a social profile is:",
         arrayKeys.length
      );
      for (let i2 = 0; i2 < arrayKeys.length; i2++) {
         console.log("a specific key of socialProfiles is:", arrayKeys[i2]);
      }
      // if (arrayKeys.hasOwnProperty("image") && arrayKeys.image) {
      // }

      /*Accessing the nested image object, I want to look at the keys.

If user.socialProfiles[0].image.hasOwnProperty(`orig`) !== false, delete that property.

If user.socialProfiles[0].image.hasOwnProperty(`orig`) === true, leave it alone.*/
   }
}
