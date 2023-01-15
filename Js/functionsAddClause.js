function addClause(){

    if(document.getElementById("titleInput").value ==""){
        document.getElementById("titleInput").style.border = "1px solid red";
    }else{
        let textTitle = document.getElementById("titleInput").value;
        let textAreaDescription = document.getElementById("descriptionText").value;
        let textDescription = textAreaDescription.replaceAll("\n", "<br>");
    
        let textAreaExample = document.getElementById("exampleText0").value;
        let textExample = textAreaExample.replaceAll("\n", "<br>");
    
        titleCompose = "<h1 style='text-align: center;'>" + textTitle + "</h1>";
        descriptionExampleCompose = "<h3>Descripción</h3><section id='DescriptionText'>" + textDescription + "</section><br><br>" +"<h3>Ejemplo</h3><section id='ExampleText' style='border: 1px solid grey;'>" + textExample + "</section>"
    
    
        let textCompose = titleCompose + descriptionExampleCompose;
    
        console.log(textCompose);
    
        fetch("http://localhost:8090/sqlAPI/saveClause", {
            method: "POST",
            body: JSON.stringify({clause: textTitle, definition: textCompose}),
            headers:{
                "Content-type": "application/json"
            }
        }).then(response =>{
            return response.json();
        }).then(result => console.log(result))
    }
   
}

// number of textArea example
var noftaex = 0;
function addExample(){
    noftaex++;
    let newTextArea = document.createElement("textarea") 
    newTextArea.name= "example";
    newTextArea.id= "exampleText"+noftaex;
    newTextArea.className="textarea";
    newTextArea.cols="30";
    newTextArea.rows="10";
    //let newTextArea = "<textarea name='example' id='exampleText"+noftaex+"' class='textarea' cols='30' rows='10'></textarea>"
    let butClose = document.createElement("button");
    butClose.id= "closeExampleBut"+noftaex+"";
    butClose.className = "butCloseExample";
    
    
    butClose.innerText="X";
    //<button id="closeExample1" class="butCloseExample" onclick="closeExample(this, 'exampleText1')">X</button>
    document.getElementById("contTextAreas").appendChild(newTextArea);
    document.getElementById("contTextAreas").appendChild(butClose);

    butClose.addEventListener("click", closeExample("closeExampleBut"+noftaex, "exampleText"+noftaex), true);
    
}

function closeExample(butClose, textArea){
    document.getElementById("contTextAreas").removeChild(document.getElementById(butClose));
    document.getElementById("contTextAreas").removeChild(document.getElementById(textArea));
}

var colorSelectedDes = 0;
function setColorDescription(newColor){
    
    switch(newColor){
        case 1:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<red></red>";
            break;
        case 2:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<orange></orange>";
            break;
        case 3:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<yellow></yellow>";
            break;
        case 4:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<green></green>";
            break;
        case 5:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<cyan></cyan>";
            break;
        case 6:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<blue></blue>";
            break;
        case 7:
            document.getElementById("descriptionText").value = document.getElementById("descriptionText").value + "<purple></purple>";
            break;
    }   
    colorSelectedDes=newColor;
   
}

function generateTextDes(){
    let text = document.getElementById("descriptionText").value;
    document.getElementById("textGeneratedDes").innerHTML = text.replaceAll("\n", "<br>");
   
}

var colorSelectedExam = 0;
function setColorExample(newColor){
    switch(newColor){
        case 1:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<red></red>";
            break;
        case 2:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<orange></orange>";
            break;
        case 3:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<yellow></yellow>";
            break;
        case 4:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<green></green>";
            break;
        case 5:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<cyan></cyan>";
            break;
        case 6:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<blue></blue>";
            break;
        case 7:
            document.getElementById("exampleText0").value = document.getElementById("exampleText0").value + "<purple></purple>";
            break;
    }   
    colorSelectedExam=newColor;
}

function generateTextExa(){
    document.getElementById("textGeneratedExa").innerHTML = document.getElementById("exampleText0").value;
}
function comprobationEmpty(){
    
}