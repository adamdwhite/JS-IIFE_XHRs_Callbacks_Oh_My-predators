// In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded then display those animals in your DOM. (Example given below)

console.log('iffe-xhr.js is here');

var carniVores = document.getElementById("meatEaters");
var herbiVores = document.getElementById("plantEaters");

function showCarnivores(carnList) {
    for (i = 0; i < carnList.length; i++) {
        carniVores.innerHTML += `<p>${carnList[i]}</p>`;
    }
}

function showHerbivores(herbList) {
    for (i = 0; i < herbList.length; i++) {
        herbiVores.innerHTML += `<p>${herbList[i]}</p>`;
    }
}


Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);