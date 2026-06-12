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
            description:"Participé en un proyecto real de core bancario, realizando tareas de desarrollo backend con Java y SpringBoot mediante microservicios basados en arquitectura hexagonal y principios de Domain-Driven Design (DDD). Además, colaboré en tareas de testing manual, ejecutando y validando pruebas funcionales mediante Postman y Bruno."
        },
        {
            companyName:"CaixaBank Tech",
            title:"Desarrollador de software dual",
            initialDate:"2025 abr",
            finishDate:"2025 may",
            description:"Participé en un proyecto como desarrollador Full Stack utilizando SpringBoot, Java y Postman para el desarrollo de una API REST, además de React con TypeScript para el desarrollo frontend."
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