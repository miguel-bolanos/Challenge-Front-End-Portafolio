
const listaSkisll = () => 
fetch("http://localhost:3000/Skills")
.then(respuesta => respuesta.json())
.catch(error => console.log("no se conecto" + error))
    
const listaHobbies = () => 
fetch("http://localhost:3000/Hobbies")
.then(respuesta => respuesta.json())
.catch(error => console.log("no se conecto" + error))


export const Servicios  = {

    listaSkisll,
    listaHobbies,
}

