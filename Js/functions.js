

document.addEventListener("load", loadInfo(), false);

function loadInfo(){
   
        fetch("http://localhost:8090/sqlAPI/allClauses")
        .then(
            response => response.json()
        )
        .then(data => {
            //console.log(data)
            let newAside = "";
            let catButsInAside = 0;
            data.forEach(element => {
                newAside = newAside + " <label class='ButAside' id='But"+catButsInAside+"Aside' onclick='ChangeCheckAside("+catButsInAside+")'>"
                +"<input type='radio' id='CheckAside"+catButsInAside+"' name='opAside' value='"+element+"'>" 
                +"<div>"+element+"</div>"
            +"</label>"
            catButsInAside++;
            });
            console.log(newAside);
            document.getElementById("Aside").innerHTML= newAside;
        }).catch((error) => {
            document.getElementById("Aside").innerHTML= "datos no cargados";
            console.error("Imposible la carga de datos. Error: ->"+error);
            mesError= document.createElement("div");
            mesError.id ="noConnected";
            mesError.className = "messageError";
            mesError.innerHTML = '<div id="Content"style="position: absolute; width: 50%; height: 25%; left: 25%; top: 30%;">'+
                                    '<button id="CloseMessage" class="butAdd" style="position: absolute; right: 0px; margin: 5px; font-size: 20px; border-radius: 5px; width: 20px; height: 20px; padding: 0px;" onclick="CloseMessage(`noConnected`)">x</button>'+
                                    '<div id="info" style="margin: 5%;">'+
                                        "No se ha podido cargar los datos. Verifique la coneccion con el servidor. <br><br>"+
                                        "Vuelva a cargar la página para reintentar cargar los datos. <br><br>"+
                                        "<div style='background: #3a0000db;color: #d81d1d;'>"+
                                        "ERROR: \n"+ 
                                        error+ "</div>"+
                                    '</div>'+
                                '</div>';
            document.body.appendChild(mesError);
        });
  
}

function ChangeCheckAside(id){
    let elementoActivo = document.querySelector('input[name="opAside"]:checked');
    if(elementoActivo){
        for (let obj of document.getElementsByClassName("ButAside")){
            obj.style.background = "";
        }
        let objHtml = document.getElementById("But"+id+"Aside");
        objHtml.style.background = "var(--ColorselectDark)";
        
        console.log(document.getElementById("CheckAside"+id).value)

        fetch("http://localhost:8090/sqlAPI/clause_"+document.getElementById("CheckAside"+id).value)
        .then(
            response =>response.json()
        )
        .then(data => {
            //data.clause
            //data.definition
                console.log(data)
                
                let newMain = ""
                newMain = "<h1 style='text-align: center;'>"+data.clause+"</h1>"+
                            "<nav style='display: flex; justify-content: space-around;'>"+
                                "<div id='Description'>Descripción</div>"+
                                "<div>Tipos</div>"+
                                "<div id='Example'>Ejemplos</div>"+
                            "</nav>"+
                            "<section id='DescriptionText' style='background: #674d80;'>"+
                                "<div>"+
                                    data.definition+
                                "</div>"+
                            "</section>"+
                            "<section id='ExampleText' style='border-top: 1px solid grey; padding-top: 10px;'></section>";

                //document.getElementById("main").innerHTML = newMain;
                document.getElementById("main").innerHTML = data.definition;
            }
            
        )
    }

    
}

function CloseMessage(phaterId){
    document.body.removeChild(document.getElementById(phaterId));
}