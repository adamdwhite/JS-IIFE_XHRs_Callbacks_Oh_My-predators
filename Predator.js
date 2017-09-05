// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
// Here's some code to get you started.


var Predator = (function() {

    console.log('predator.js is here');

    return {
        loadCarnivores: function(callbackCarns) {
            var meatLoader = new XMLHttpRequest();

            meatLoader.addEventListener("load", function() {
                // Set the value of the private array
                console.log("carnivores");
                var meatObject = JSON.parse(this.responseText);
                var meatArray = [];
                // create a forEach to idiv animals 
                meatObject.forEach(function(item) {
                    var thisMeat = item.animal;
                    meatArray.push(thisMeat);
                });
                console.log("meatArray");
                showCarnivores(meatArray);
            });
            // Invoke the callback function so that the caller knows
            // that the process is complete. Make sure to pass the 
            // carnivore array as an argument.
            meatLoader.open("GET", "carnivores.json");
            meatLoader.send();
        },


        loadHerbivores: function(callbackHerbs) {
            var herbLoader = new XMLHttpRequest();
            herbLoader.addEventListener("load", function() {
                // Set the value of the private array
                console.log("herbivores");
                var plantObject = JSON.parse(this.responseText);
                var plantArray = [];

                plantObject.forEach(function(item) {
                    var thisPlant = item.animal;
                    plantArray.push(thisPlant);
                });
                // console.log(herbivoresArray);
                showHerbivores(plantArray);
            });
            herbLoader.open("GET", "herbivores.json");
            herbLoader.send();
            // Invoke the callback function so that the caller knows
            // that the process is complete. Make sure to pass the 
            // carnivore array as an argument.
        }
    }

})();