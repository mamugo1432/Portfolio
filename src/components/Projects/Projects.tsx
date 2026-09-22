import CardProject from "../CardProjects/CardProjects";
import fotoAnalistock from '../../assets/Captura de pantalla 2026-06-17 125823.png'
import fotoRoadToBronze from '../../assets/road-to-bronce-photo.png'
import './Projects.css'

export default function Projects(){
    return(
        <>
        <div className='container-section'>
        <h2>Proyectos</h2>
        <div className='projects-grid'>
          <CardProject image={fotoAnalistock} title="Analistock" description="Aplicación web desarrollada como proyecto final de grado orientada al análisis de inversiones, que combina la consulta de indicadores financieros fundamentales con una recopilación de consejos y enseñanzas de algunos de los inversores más reconocidos del mercado." technologies={["React", "Typescript", "Bootstrap"]} githubUrl="https://github.com/mamugo1432/Analistock-Client" demoUrl="https://analistock-client.vercel.app"/>   
          
          <CardProject image={fotoAnalistock} title="Analistock API" description="API desarrollada para la aplicación web Analistock que trata la información de los usuarios registrados, las acciones y los consejos. Esta se ha desarrollado haciendo uso de principios SOLID y una arquitectura modelo vista-controlador que dispone de 3 capas principales: Modelos, Servicios y Controladores." technologies={["SpringBoot", "Java", "Sonnar", "MySQL"]} githubUrl="https://github.com/mamugo1432/api-25-26-mamugo1432" demoUrl="https://api-25-26-mamugo1432.onrender.com/swagger-ui/index.html#/"/>   

          <CardProject image={fotoRoadToBronze} title="Road To Bronze" description="Página web desarrollada en conmemoración al desempeño de la selección española femenina de baloncesto en el Mundial de Berlín 2026. Incluye el recorrido del equipo en el torneo y la plantilla completa, con información detallada de cada jugadora. Desarrollada mediante Spec Driven Development, con el apoyo de un agente de IA llamado OpenCode." technologies={["React", "Typescript", "Vitest", "OpenCode"]} githubUrl="https://github.com/mamugo1432/sdd-roadToBronze" demoUrl="https://road-to-bronze.vercel.app/"/>   
          
        </div>
        </div>
        </>
    )
}