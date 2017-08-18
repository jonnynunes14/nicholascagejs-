console.log("Whats up")



// an initialize/constructor function
function Dog(name){
    // just init "attributes" here
    this.name = name;
}
//
// // attach behaviors separately
Dog.prototype.bark = function(){
  console.log("Bow wow!");
}


// @name becomes this.name
Dog.prototype.speak = function(message){
  console.log(this.name + ' says: ' + message);
}


function StBernard() {
  // reuse the "parent's" code
  this.constructor.call(this, "Beethoven" );
}

// declare Dog to be a "parent" of StBernard
StBernard.prototype = new Dog();
