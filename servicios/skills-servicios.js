
const listaSkisll = () => 
fetch("https://miguel-bolanos.github.io/Challenge-Front-End-Portafolio/Skills/Skills.json")
.then(respuesta => respuesta.json())
.catch(error => console.log("no se conecto" + error))
    



export const Servicios  = {

    listaSkisll,

}

