import './Tecnologies.css';
export default function Tecnologies(){

    const tecnologies = ["React", "Angular", "TypeScript", "Bootstrap", "Java", "Springboot", "MYSQL", "Oracle DB", "JUnit", "Selenium"];
    return(
        <>
        <div className="container-section">
            <h2>Tecnologías</h2>
            <div className="technologies-container">
            {tecnologies.map((tecnology, index) => <span key={index} className="skill-pill">{tecnology}</span>)}
            </div>
       </div>
        </>
    )
}