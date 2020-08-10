let body = document.querySelector("body");
let textboxRef = document.getElementById("food_input");
let buttonRef = document.querySelector("button");
let imageDivRef = document.getElementById("gazpacho_image");
let foodNameRef = document.getElementById("food_name");
// show contentDiv
buttonRef.onclick = function(event){
    //prevent the page from reloading
    event.preventDefault();

    let userInput = textboxRef.value;
    console.log(userInput);
}
let newData = {}
function getReciepe(cuisine) {
    const apiKEY = "34c995a4436946cfaf2db2c13af2d4d2" // API KEY GOES HERE
    const BASE_URL = "https://api.spoonacular.com/recipes/search?apiKey="
    fetch(BASE_URL + apiKEY + "&number=5&cuisine=" + cuisine + "&query=")
        .then(response => response.json())
        .then(data => {
            newData = data.results


 let newImage = document.createElement("img");
//  newImage.src = myJson.sprites.front_default;
 imageDivRef.appendChild(newImage);
 newImage.style.width = "150 px";
 //output food name to the screen
 foodNameRef.innerHTML = myJson.name;
        });

}