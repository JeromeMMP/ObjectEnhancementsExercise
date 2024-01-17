//oldVersion
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  };
//newVersion
function createInstructor2(firstName, lastName){
    return {
        firstName,
        lastName
    };
};

// oldVersion
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
};
instructor[favoriteNumber] = "That is my favorite!";

// newVersion
let favoriteNumber
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "that is my favorite!"
};

// oldVersion 
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  };
  /* Write an ES2015 Version */
  const instructor = {
    [firstName]: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";

    }
  };
// create Animal function 

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    };
};