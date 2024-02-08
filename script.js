var button = document.getElementById("enterButton");
var textInput = document.getElementById("userInput");
var unorderedList = document.querySelector("ul");



button.addEventListener("click", function(){
  if(textInput.value > 0){
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(textInput.value));
  unorderedList.appendChild(newLi);
  textInput.value = "";
  } 
});


