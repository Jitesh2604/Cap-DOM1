// Constructor function for the base Vehicle
function Vehicle() {}

// Methods for the base Vehicle added to its prototype
Vehicle.prototype.accelerate = function () {
  console.log("Vehicle is accelerating...");
};

Vehicle.prototype.brake = function () {
  console.log("Vehicle is braking...");
};

Vehicle.prototype.refuel = function () {
  console.log("Vehicle is refueling...");
};

// Constructor function for Cars, inheriting from Vehicle
function Car() {
  // Call the constructor of the parent class
  Vehicle.call(this);
}

// Set up the prototype chain
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Constructor function for Airplanes, inheriting from Vehicle
function Airplane() {
  // Call the constructor of the parent class
  Vehicle.call(this);
}

// Set up the prototype chain
Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.constructor = Airplane;

// Create instances of Car and Airplane
var myCar = new Car();
var myAirplane = new Airplane();

// Demonstrate invoking methods
console.log("Car actions:");
myCar.accelerate();
myCar.brake();
myCar.refuel();

console.log("\nAirplane actions:");
myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
