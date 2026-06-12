import type { ExperienceData } from '../Experience/Experience';
import './CardExperience.css';
export default function CardExperience({companyName, title, optionalTitle, initialDate, finishDate, description}:ExperienceData){

    return(
        <>
         <article className="experience-card">
      <div className="experience-card__header">
        <div>
        <span className='span-header-text'><h3>{companyName} · {title}</h3></span>
        <small><i>{optionalTitle}</i></small>
        </div>
        <span className='span-date'>
          {initialDate} - {finishDate}
        </span>
      </div>

      <p>{description}</p>
    </article>
        </>
    )
}