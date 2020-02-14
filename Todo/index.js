var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }else{
        alert("Come on!!!! Add Something");
    }
}
function addListAfterKeypress() {
    if(inputLength() > 0 && event.keyCode === 13){            
        createListElement();
    }else{
        alert("Come on!!!! Add Something");
    }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);