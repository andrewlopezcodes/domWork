var button = document.getElementById("enterButton");
var textInput = document.getElementById("userInput");
var unorderedList = document.querySelector("ul");
let inputValueLength = function(){
  return userInput.length;
};

let addToList = function(){
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(textInput.value));
    unorderedList.appendChild(newLi);
    textInput.value = "";
  };

textInput.addEventListener("keydown", function(onkeydown){
  if(onkeydown.key === "Enter" && inputValueLength !== ""){
    console.log(onkeydown.key + " key was pressed.");
    console.log(textInput.value);
    addToList();
  }
});



button.addEventListener("click", function(){
  if(inputValueLength !== ""){
    console.log(textInput.value);
    addToList();
  }  
});


