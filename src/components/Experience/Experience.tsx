import CardExperience from "../CardExperience/CardExerience";
import './Experience.css';

export interface ExperienceData   {
    companyName:string,
    title:string,
    optionalTitle?:string,
    initialDate:string,
    finishDate:string,
    description:string
}

export default function Experience(){

    const experience:ExperienceData[] = [
        
        {
            companyName:"CaixaBank Tech",
            title:"Desarrollador de software dual",
            optionalTitle:"Experiencia laboral remunerada",
            initialDate:"2026 feb",
            finishDate:"2026 may",
            description:"Formé parte de un proyecto de core bancario en el que participé en el desarrollo backend de una API REST con Java y Spring Boot, trabajando con una arquitectura de microservicios basada en arquitectura hexagonal y principios de Domain-Driven Design (DDD). Además de las tareas de desarrollo, colaboré en la validación funcional de los servicios mediante pruebas manuales con Postman y Bruno, contribuyendo a asegurar la calidad y el correcto funcionamiento de la aplicación."
        },
        {
            companyName:"CaixaBank Tech",
            title:"Desarrollador de software dual",
            initialDate:"2025 abr",
            finishDate:"2025 may",
            description:"Desarrollé una aplicación Full Stack participando tanto en la construcción de una API REST con Java y Spring Boot como en la implementación de la interfaz de usuario con React y TypeScript. Además, llevé a cabo tareas de validación y pruebas de los servicios mediante Postman, colaborando en el desarrollo de funcionalidades a lo largo de todo el ciclo de la aplicación."
        }
    ]


    return(
        <>
        <div className='container-section'>
        <h2>Experiencia</h2>
        <div className="experience-container">
            {experience.map((exp,index)=> <CardExperience key={index} companyName={exp.companyName} title={exp.title} optionalTitle={exp.optionalTitle} initialDate={exp.initialDate} finishDate={exp.finishDate} description={exp.description}/>)}
        </div>
        </div>
        </>
    )
}