function addClause(){

    if(document.getElementById("titleInput").value ==""){
        comprobationEmpty();
        return;
    }
    if(document.getElementById("descriptionText").value =="" || document.getElementById("exampleText0").value ==""){
        comprobationEmpty();
        if(document.getElementById("titleInput").value!=""){

            mesAlert= document.createElement("div");
            mesAlert.id ="dataEmpty";
            mesAlert.className = "messageInformation";
            mesAlert.innerHTML = ' <div id="Content"style="position: absolute; width: 50%; height: 25%; left: 25%; top: 30%;">'+
                                    '<div id="info" style="margin: 5%;">'+
                                        '¿Desea dejar los campos amarillos sin datos? <br><br>'+
                                    '</div>'+
                                    '<div style="display: flex;'+
                                        'width: 100%;'+
                                        'justify-content: space-evenly;">'+
                                        '<button style=" background-color: var(--TextLink);'+
                                            'border: 0px;'+
                                            'width: 15%;'+
                                            'border-radius: 5px;'+
                                            'height: 35px;'+
                                            'box-shadow: 3px 3px 1px #094bb7;'+
                                            'font-size: 15px;'+
                                            'font-weight: bold;" onclick="saveClause()">Si</button>'+
                                        '<button style="background-color: #0756ac;'+
                                            'border: 0px;'+
                                            'width: 15%;'+
                                            'border-radius: 5px;'+
                                            'height: 35px;'+
                                            'box-shadow: 3px 3px 1px #02193e;'+
                                            'font-size: 15px;'+
                                            'font-weight: bold;" onclick="CloseMessage(`dataEmpty`);">No</button>'+
                                    '</div>'+
                                 '</div>';
            document.body.appendChild(mesAlert);
        }
    }else{
        saveClause()
    }
        
}

function saveClause(){
    let textTitle = document.getElementById("titleInput").value;
    let textAreaDescription = document.getElementById("descriptionText").value;
    let textDescription = textAreaDescription.replaceAll("\n", "<br>");

    let textAreaExample = document.getElementById("exampleText0").value;
    let textExample = textAreaExample.replaceAll("\n", "<br>");

    titleCompose = "<h1 style='text-align: center;'>" + textTitle + "</h1>";
    descriptionExampleCompose = "<h3>Descripción</h3><section id='DescriptionText'>" + textDescription + "</section><br><br>" +"<h3>Ejemplo</h3><section id='ExampleText' style='border-top: 1px solid grey; padding-top: 10px;'>" + textExample + "</section>"


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
    }).then(result => {console.log(result);
        location.href='index.html';})
    
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

    //closeExample("closeExampleBut"+noftaex, "exampleText"+noftaex)
    butClose.addEventListener("click", () => {
        document.getElementById("contTextAreas").removeChild(document.getElementById("closeExampleBut"+noftaex));
        document.getElementById("contTextAreas").removeChild(document.getElementById("exampleText"+noftaex));
    }, true);
    
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
    StyleDefault("descriptionText");
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
    StyleDefault("exampleText0");
    document.getElementById("textGeneratedExa").innerHTML = document.getElementById("exampleText0").value.replaceAll("\n", "<br>");
    
}


function comprobationEmpty(){
    if(document.getElementById("titleInput").value ==""){
        document.getElementById("titleInput").style.border = "1px solid red";
        document.getElementById("titleInput").style.background = "#ff060612";
        
    };
    if(document.getElementById("descriptionText").value ==""){
        document.getElementById("descriptionText").style.border = "1px solid orange";
        document.getElementById("descriptionText").style.background = "#ffa70612";
    }
    if(document.getElementById("exampleText0").value ==""){
        document.getElementById("exampleText0").style.border = "1px solid orange";
        document.getElementById("exampleText0").style.background = "#ffa70612";
    }
}

function CloseMessage(phaterId){
    document.body.removeChild(document.getElementById(phaterId));
}

function StyleDefault(element){
    if(document.getElementById(element).value!=""){
        document.getElementById(element).style.background="";
        document.getElementById(element).style.border="";
        document.getElementById(element).style.color="";
    }
}