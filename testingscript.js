const mostInsecurePasswords = [
   "123456",
   "123456789",
   "password1",
   "skywalker",
   "1010101010",
   "1racecar1",
   "obama2016",
];

const secondMostInsecurePasswords = [
   ["mypassword", true],
   ["password1", true],
   ["zxcvbnm", true],
   [1234567890, false],
   ["gosteelers", true],
   [51015202530, false],
   ["Password1", true],
];

const firstPassword = mostInsecurePasswords[0];
// console.log(`The first password in this array is ${firstPassword}.`);
const passwordsLength = mostInsecurePasswords.length;
// console.log(`The length of this array is ${passwordsLength}.`);

const allBadPasswords = mostInsecurePasswords.concat(
   secondMostInsecurePasswords
);
// console.log(`This should be a combined list of the two lists`, allBadPasswords);

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
// console.log(`Here's the list of final passwords`, allCleanedBadPasswords);

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

console.log(`The edited array of bad passwords:`, unacceptablePasswords);

// const lessonCreatedAt = new Date(2020, 8, 11, 19, 42, 0, 500);
// console.log(lessonCreatedAt);
// const loggedAt = Date.now(); //This is a number with miliseconds past the epoch.
// console.log(loggedAt);

// const testedAt = new Date(2020, 8, 12, 6); //This produces a date with the specific criteria input.
// const testedAtAsString = testedAt.toString();
// const testedAtAsNum = testedAt.getTime();
// console.log(testedAtAsNum);

// const createdAt = new Date(Date.now()); //This produces a date at the very moment the function runs.
// console.log(createdAt);

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
// const formattedHour = String(hour);
// const formattedMinutes = String(minutes);
// const formattedSeconds = String(seconds);
// const formattedMilliseconds = String(milliseconds);
// const formattedDateDelimiter = "/";
// const formattedDateDelimiter2 = "-";
// const formattedTimeDelimiter = ":";

// const dateFormat =
//    formattedYear +
//    formattedDateDelimiter +
//    formattedMonth +
//    formattedDateDelimiter +
//    formattedDay;
// console.log(dateFormat);

// const dateFormat2 =
//    formattedYear +
//    formattedDateDelimiter2 +
//    formattedMonth +
//    formattedDateDelimiter2 +
//    formattedDay;
// console.log(dateFormat2);

// const timeFormat =
//    formattedHour +
//    formattedTimeDelimiter +
//    formattedMinutes +
//    formattedTimeDelimiter +
//    formattedSeconds +
//    formattedTimeDelimiter +
//    formattedMilliseconds;
// console.log(timeFormat);

const typedintopassword = "REX";

const stringPassword = String(typedintopassword);
const lowerCasedPassword = stringPassword.toLowerCase();
console.log(lowerCasedPassword);

const passwordInput = typedintopassword.toLowerCase;
console.log(passwordInput);

// const typedintopassword = "Rex";

// const passwordInput = $(typedintopassword).val();
// console.log(passwordInput);
