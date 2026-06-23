import CardProject from "../CardProjects/CardProjects";
import fotoAnalistock from '../../assets/Captura de pantalla 2026-06-17 125823.png'
import './Projects.css'

export default function Projects(){
    return(
        <>
        <div className='container-section'>
        <h2>Proyectos</h2>
        <div className='projects-grid'>
          <CardProject image={fotoAnalistock} title="Analistock" description="Aplicación web desarrollada como proyecto final de grado orientada al análisis de inversiones, que combina la consulta de indicadores financieros fundamentales con una recopilación de consejos y enseñanzas de algunos de los inversores más reconocidos del mercado." technologies={["React", "Typescript", "Bootstrap"]} githubUrl="https://github.com/mamugo1432/Analistock-Client" demoUrl="https://analistock-client.vercel.app"/>   
          
          <CardProject image={fotoAnalistock} title="Analistock API" description="API desarrollada para la aplicación web Analistock que trata la información de los usuarios registrados, las acciones y los consejos. Esta se ha desarrollado haciendo uso de principios SOLID y una arquitectura modelo vista-controlador que dispone de 3 capas principales: Modelos, Servicios y Controladores." technologies={["SpringBoot", "Java", "Sonnar", "MySQL"]} githubUrl="https://github.com/mamugo1432/api-25-26-mamugo1432" demoUrl="https://api-25-26-mamugo1432.onrender.com/swagger-ui/index.html#/"/>   
        </div>
        </div>
        </>
    )
}