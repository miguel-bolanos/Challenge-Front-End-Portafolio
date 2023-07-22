
const listaSkisll = () => 
fetch("https://miguel-bolanos.github.io/Challenge-Front-End-Portafolio/Skills/Skills.json")
.then(respuesta => respuesta.json())
.catch(error => console.log("no se conecto" + error))
    
const listaHobbies = () =>
fetch("https://miguel-bolanos.github.io/Challenge-Front-End-Portafolio/Hobbies/Hobbies.json")
.then(respuesta=>respuesta.json())
.catch(error => console.log("error " + error))

export const Servicios  = {

    listaSkisll,
    listaHobbies,
}