# JS-IIFE_XHRs_Callbacks_Oh_My-predators

Requirements

Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
Create an IIFE with the name of Predator.
Predator should have two private arrays to store carnivores and herbivores.
Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.



////////////////////////////////////////////////////////////////////////

`iife-xhr.js

function showCarnivores (carnivores) {
  
}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);
Predator.js

var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
    }
  }
})();