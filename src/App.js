import React from "react";
//Librerias
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Componentes 
import Home from './components/Home/Home.js';
import Proyectos from './components/Proyects/proyectos.js';
import Perfil from './components/Perfil/perfil.js';
//Estilos
import './App.css';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/" component={Home} exact/>
        <Route path="/proyectos" component={Proyectos} exact/>
        <Route path="/perfil"  component={Perfil} excat/>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
