var button = document.getElementById("enterButton");
var textInput = document.getElementById("userInput");
var unorderedList = document.querySelector("ul");
let inputValueLength = function(textInput){
  return textInput.value.length;
};

let addToList = function(){
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(textInput.value));
    unorderedList.appendChild(newLi);
    textInput.value = "";
  };

let addToEndOfListKeypress = function(onkeydown){
  if(onkeydown.key === "Enter" && textInput.value.length > 0){
    console.log(onkeydown.key + " key was pressed.");
    console.log(textInput.value);
    addToList();
    }
  };


let addToEndOfListButton = function(){
  if(textInput.value.length > 0){
    console.log(textInput.value);
    addToList();
  }  
};

textInput.addEventListener("keydown", addToEndOfListKeypress);

button.addEventListener("click", addToEndOfListButton);