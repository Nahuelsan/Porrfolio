import React from 'react';

import s from './proyectos.module.css';
//Iconos
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ModeLigth from '@material-ui/icons/Brightness7';
import ModeDark from '@material-ui/icons/Brightness3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJs, faSass} from '@fortawesome/free-brands-svg-icons';
// Componentes 
import CardProyecto from './cardProyects/proyects.js';
const proyectos = [
    {
        key: 1,
        URL: 'https://wultur.herokuapp.com/',
        repo: '',
        name: 'Wultur',
        imagen: 'https://i.ibb.co/pQKScgw/wultur.jpg',
        tecnologias: [
            <FontAwesomeIcon  icon={faReact} spin size="2x"/>,
            <FontAwesomeIcon  icon={faNode}  size="2x"/>,
            <img src="https://img.icons8.com/ios/50/000000/postgreesql.png"/>,
            <img src="https://img.icons8.com/color/48/000000/redux.png"/>, 
            'Sequelize'],
        descripcion: 'Wultur fue pensado como una plataforma donde puedas comprar cursos de programación y puedas efectuar pagos mediante la plataforma PayPal, cuenta con logueo de terceros con Facebook, Github y Google.'
    },
    {
        key: 2,
        URL: 'https://henry-app.vercel.app/',
        repo: 'https://github.com/Nahuelsan/henry-app',
        name: 'Henry Wolrd',
        imagen: '',
        tecnologias : [        
            <FontAwesomeIcon  icon={faReact} spin size="2x"/>,
            <FontAwesomeIcon  icon={faNode}  size="2x"/>,
            <img src="https://img.icons8.com/color/48/000000/redux.png"/>, 
            <img src="https://img.icons8.com/color/50/000000/firebase.png"/>],
        descripcion: '(WEB + MOBILE) Henry World cuenta con plataforma web y app mobile (Android y iOS) fue pensado para agilizar situaciones como la carga de alumnos las cuales puede el usuario administrador invitar a nuevos alumnos a unirse a la academia mediante envio de email lo cual esta disponible tanto en mobile, como en web, posee logueo con terceros tanto en Google como con Github.'
    }
]

const menosRelevantes = [
    {
        key: 1,
        URL: 'https://api-by-nsm.netlify.app/',
        repo: 'https://github.com/Nahuelsan/busqueda-imagen',
        name: 'Buscador',
        imagen: '',
        tecnologias : [<FontAwesomeIcon  icon={faReact} spin size="2x"/>, <FontAwesomeIcon  icon={faNode}  size="2x"/>,],
        descripcion: 'App web la cual fue hecha para buscar imagenes usando una API rest, posee paginación por 30 imagenes '
    },
    {
        key:2,
        URL: 'https://hackaton-peru.vercel.app/',
        repo: 'https://github.com/Nahuelsan/hackaton_peru',
        name: 'Open Covid',
        imagen: '',
        tecnologias : [<FontAwesomeIcon  icon={faReact} spin size="2x"/>, <FontAwesomeIcon  icon={faNode}  size="2x"/>,],
        descripcion: 'Login pensado para una hackaton en la cual el usuario podía consultar su estado de vacunación y el medico/vacunador por su cuenta podía registrar que una persona a sido vacunada'
    }
]
const Proyect = () => {
    return(
        <div>
            <header>
                Proyectos
                <a href={`${process.env.REACT_APP_API_URL}`}>
                    <ArrowBackIosIcon className={s.btn_back} style={{ textAlign: 'center'}}/>
                </a>
            </header>
            <h2>Mas relevantes</h2> 
            <div className={s.proyectos}>
            
                {
                    
                    proyectos.map((proyecto) => 
                        <CardProyecto key={proyecto.key} proyecto={proyecto}/>
                    )
                }

            </div>
            <h2>Menos relevantes</h2> 
            <div className={s.proyectos}>
                {
                    menosRelevantes.map((proyecto) => 
                        <CardProyecto key={proyecto.key} proyecto={proyecto}/>
                    )
                }
            </div>
        </div>
    )
}

export default Proyect;