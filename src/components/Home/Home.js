import React, {useState} from 'react';
import s from './Home.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Linkedin from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJs, faSass} from '@fortawesome/free-brands-svg-icons';
import {
  Link,
} from "react-router-dom";

const Home = () =>{
    const [mostrar, setMostrar] = useState(s.active)
    const mostrarEmail = () => {
      setMostrar(mostrar === s.desactive ? s.active : s.desactive)
    }
    return(
        <div>
        <div className={s.container}>
          <div className={s.izquierda}>

              <h3 style={{color: 'white', display: 'flex', flexDirection: 'flex-end'}}>
                PERFIL
              </h3>
              <div className={s.cv}>
                <div className={s.photo}>
                 <img src="https://avatars.githubusercontent.com/u/17748578?s=460&u=8b94fdaffa1675530509b333c975e4274cfd5a7b&v=4"></img>
                </div>
                <p>Sanchez Morales, Nahuel</p>

                  <p>
                   SKILL
                  </p>  
                  <p>
                  <FontAwesomeIcon  icon={faReact} spin size="2x"/>
                  <FontAwesomeIcon  icon={faNode}  size="2x"/>
                  <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                  <FontAwesomeIcon  icon={faSass}  size="2x"/>
                  <img src="https://img.icons8.com/color/50/000000/firebase.png"/>
                  <img src="https://img.icons8.com/ios/50/000000/postgreesql.png"/>
                  <img src="https://img.icons8.com/color/48/000000/redux.png"/>
                  </p>
                  <p>FullStack</p>
                  <p>
                    
                    <a href="https://www.github.com/Nahuelsan" target="_blank">
                      <abbr title="/Nahuelsan">
                        <GitHubIcon  />
                      </abbr>
                    </a>
                    <a href="https://www.linkedin.com/in/nahuel-sanchez/" target="_blank">
                      <Linkedin  />
                    </a>
                    <button>
                      <ContactMailIcon onClick={() => mostrarEmail()}/>
                    </button>
                    <p className={mostrar} style={{transition: 'all'}}>
                      Nahuelsan96@gmail.com
                    </p>
                  </p>

              </div>
          </div>
          <div className={s.derecha}>
            <Link to='/proyectos' style={{textDecoration : 'none', color: 'black'}}>
              <p style={{color: '#4481eb'}}>PROYECTOS</p>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Home;