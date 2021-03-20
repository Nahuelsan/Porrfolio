import React, { useState } from 'react';
import s from './proyects.module.css';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';


const CardProyecto = ({proyecto}) =>{
    const [skill, setSkill] = useState([])
    return(
        <div className={s.container}>
            <div className={s.container_info}>
                <h2>{proyecto.name}</h2>
                <p  className={s.oculto}>{proyecto.descripcion}</p>
                <p>
                    {
                        proyecto.tecnologias.map(tecn => (
                            tecn
                        ))
                    }
                </p>
                <a href={proyecto.repo}>
                    <GitHubIcon color="action"  style={{ fontSize: 50 }}/>
                </a>
                <a href={proyecto.URL}>
                    <LinkIcon color="action"  style={{ fontSize: 50 }}/>
                </a>
            </div>
        </div>
    )
}

export default CardProyecto;