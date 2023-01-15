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
})

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
                            "<section id='ExampleText'></section>";

                //document.getElementById("main").innerHTML = newMain;
                document.getElementById("main").innerHTML = data.definition;
            }
            
        )
    }

    
}