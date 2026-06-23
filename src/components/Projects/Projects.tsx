import CardProject from "../CardProjects/CardProjects";
import fotoAnalistock from '../../assets/Captura de pantalla 2026-06-17 125823.png'
import './Projects.css'

export default function Projects(){
    return(
        <>
        <div className='container-section'>
        <h2>Proyectos</h2>
        <div className='projects-grid'>
          <CardProject image={fotoAnalistock} title="Analistock" description="Aplicación web presentada como proyecto final de grado que presenta indicadores fundamentales de algunas acciones y consejos de inversores famosos." technologies={["React", "Typescript", "Bootstrap"]} githubUrl="asvd" demoUrl="avds"/>   
          
          <CardProject image={fotoAnalistock} title="Analistock API" description="API desarrollada para la aplicación web Analistock que trata la información de los usuarios registrados, las acciones y los consejos. Esta se ha desarrollado haciendo uso de principios SOLID y una arquitectura modelo vista-controlador que dispone de 3 capas principales: Modelos, Servicios y Controladores." technologies={["SpringBoot", "Java", "Sonnar", "MySQL"]} githubUrl="asvd" demoUrl="avds"/>   
        </div>
        </div>
        </>
    )
}