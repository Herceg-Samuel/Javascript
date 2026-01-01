let pet = {
  petName: "Charlie",
  type: "German Shepherd",
  age: 2,
  favToy: ["toy car", "ball", "spinner"],
};

const info = (pet) => {
  for (let i = 0; i < pet.length; i++) {
    console.log(
      `Pet name is ${pet.petName} of type ${pet.type}. It is ${pet.age} years old. Favorite toys include : ${pet.favToy}`
    );
  }
};
console.log(pet);

// let pet.color = "black";

info();

//1. Create an object to represent a pet with properties for name, type, age, and favorite toys (array)
//2. Add a method that returns a string describing the pet
//3. Access and output specific properties
//4. Modify some properties and observe the changes
//5. Add a new property to the object
