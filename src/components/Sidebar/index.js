import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () =>{
    return(
      <div className = 'nav-bar'>
          <Link className='logo' to = '/'>
              <img src={LogoJ} alt = "logo" />
              <img className="sub-logo" src={LogoSubtitle} alt = "logo-subtitle" />
          </Link>
          <nav>
              <NavLink exact='true' activeclassname='active' to="/">
                <FontAwesomeIcon icon={faHome} color='#fdfdfe' />
              </NavLink>
              <NavLink exact='true' activeclassname='active' className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#fdfdfe' />
              </NavLink>
              <NavLink exact='true' activeclassname='active' className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#fdfdfe' />
              </NavLink>
          </nav>
          <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jay-bhadoriya-b22354171/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jaypratap619"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      </div>
    )
}

export default Sidebar;