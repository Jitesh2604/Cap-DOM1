// // Object.create method

// const automobilePrototype = {
//     start: function () {
//       console.log("Automobile is starting...");
//     },
//     stop: function () {
//       console.log("Automobile is stopping...");
//     },
//   };
  
//   // Create a four-wheeler object using Object.create
//   const fourWheeler = Object.create(automobilePrototype);
  
//   // Additional properties specific to four-wheelers
//   fourWheeler.numWheels = 4;
//   fourWheeler.drive = function () {
//     console.log("Driving the four-wheeler...");
//   };
  
//   // Example usage
//   fourWheeler.start();
//   fourWheeler.drive();
//   fourWheeler.stop();

function Automobile() {}

// Add methods to the prototype of the Automobile constructor
Automobile.prototype.start = function () {
  console.log("Automobile is starting...");
};

Automobile.prototype.stop = function () {
  console.log("Automobile is stopping...");
};

// Define a constructor function for four-wheelers, inheriting from the Automobile
function FourWheeler() {
  Automobile.call(this); // Call the constructor of the parent class
  this.numWheels = 4;
}

// Set up the prototype chain
FourWheeler.prototype = Object.create(Automobile.prototype);
FourWheeler.prototype.constructor = FourWheeler;


// Additional method specific to four-wheelers
FourWheeler.prototype.drive = function () {
    console.log("Driving the four-wheeler...");
  };
  
  // Example usage
  const myFourWheeler = new FourWheeler();
  console.log(myFourWheeler)
//   myFourWheeler.start();
//   myFourWheeler.drive();
//   myFourWheeler.stop();