//Ceate a variable named favActorFirstName and favActorLastName and store your favorite actor's first name and their last name
let favActorFirstName = 'Ryan';
let favActorLastName = 'Reynolds';

//Concatenate the first and last names into a variable named fullName
let fullName = favActorFirstName + ' ' + favActorLastName;

//Create a variable named uppercase and store the lowercase version of your favorite actor's name
let uppercase = fullName.toLowerCase();

//Create a variable named lowercase and store the capitalized version of your favorite pet’s name
let petName = 'rigor';
let lowercase = 'rigor'.toUpperCase();

//Create a variable named message and store a message like: "My favorite actor is [FULL_NAME]". The name should be in uppercase
let message = 'My favorite actor is: ' +fullName.toUpperCase();

//Append the message to include "his best show is Silicon Valley"
message += ' and his best show is Deadpool.';

//Log all variables to the console using the code runner in VSCode
console.log(favActorFirstName); //Ryan
console.log(favActorLastName); //Reynolds
console.log(fullName); //Ryan Reynolds
console.log(uppercase); //ryan reynolds
console.log(petName); //rigor
console.log(lowercase); //RIGOR
console.log(message); //My favorite actor is: RYAN REYNOLDS and his best show is Deadpool.