import "./Header.css";
import fotoPerfil from '../../assets/Fotografía_Manuel_Muñoz_Gómez.jpg';
import emailIcon from '../../assets/email-9-svgrepo-com.svg';
import githubIcon from '../../assets/github-142-svgrepo-com.svg';
import linkedinIcon from '../../assets/linkedin-161-svgrepo-com.svg';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
  isPrimary?: boolean;
}

export default function Header() {
  const socialLinks: SocialLink[] = [
    { icon: emailIcon, url: "mailto:mamugo1432@gmail.com", label: "Email" },
    { icon: githubIcon, url: "https://github.com/mamugo1432", label: "GitHub" },
    { icon: linkedinIcon, url: "https://www.linkedin.com/in/manuel-muñoz-gómez-4050ba2a7/", label: "LinkedIn" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Foto de perfil */}
          <div className="profile-image">
            <img src={fotoPerfil} alt="Foto de perfil" />
          </div>

          {/* Información personal */}
          <div className="profile-info">
            <h1 className="name">Manuel Muñoz Gómez</h1>
            <h3 className="title">Desarrollador de software</h3>

            {/* Redes sociales */}
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className={`social-link ${link.isPrimary ? "primary" : ""}`}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon"><img src={link.icon} alt={"Icono de " + link.label} />{link.label == "Email" && <p>    mamugo1432@gmail.com</p>}</span>
                  {link.isPrimary && <span className="social-text">{link.label}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}