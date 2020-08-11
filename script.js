let body = document.querySelector("body");
let textboxRef = document.getElementById("food_input");
let buttonRef = document.querySelector("button");
let imageDivRef = document.getElementById("gazpacho_image");
let foodNameRef = document.getElementById("food_name");
let divRef = document.getElementById("search")
let divRef2 = document.getElementById("popular");
let divRef3 = document.getElementById("cuisine");
let divRef4 = document.getElementById("rec");

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

divRef.onmouseover = function() {
    divRef.style.color = "black";
    
  
}

divRef.onmouseout = function() {
    divRef.style.color = "white";
  
}

divRef2.onmouseover = function() {
    divRef2.style.color = "black";
    
  
}

divRef2.onmouseout = function() {
    divRef2.style.color = "white";
  
}
divRef3.onmouseover = function() {
    divRef3.style.color = "black";
    
  
}

divRef3.onmouseout = function() {
    divRef3.style.color = "white";
  
}
divRef4.onmouseover = function() {
    divRef4.style.color = "black";
    
  
}

divRef4.onmouseout = function() {
    divRef4.style.color = "white";
  
}





