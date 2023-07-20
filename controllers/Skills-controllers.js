import { Servicios } from "../servicios/skills-servicios.js";

const nuevaSkills = (Nombre,clase,id, ) =>{
    const card = document.createElement("div")
    const contenido = `
        <h1>${Nombre}</h1>
        <figure>
        <i class="${clase}"></i>
        </figure>`
card.innerHTML = contenido;
card.classList.add("Skills__Contendor--Skill")
card.dataset.id = id
return card
}

const Skills = document.querySelector("[data-Skills]")

Servicios.listaSkisll().then(data=>{
    data.forEach(({Nombre,clase,id,}) => {
        const agregar = nuevaSkills(Nombre,clase,id,);
        Skills.appendChild(agregar)
        
    });
}).catch(error => console.log("error" + error))