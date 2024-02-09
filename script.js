var button = document.getElementById("enterButton");
var textInput = document.getElementById("userInput");
var unorderedList = document.querySelector("ul");
let addToList = function(){
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(textInput.value));
    unorderedList.appendChild(newLi);
    textInput.value = "";
  };

textInput.addEventListener("keydown", function(onkeydown){
  if(onkeydown.key === "Enter" && textInput.value !== ""){
    addToList();
  }
});



button.addEventListener("click", function(){
  if(textInput.value !== ""){
    console.log(textInput.value);
    addToList();
  }  
});


