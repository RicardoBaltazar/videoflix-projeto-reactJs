import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video'


const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/cadastro/video' component={CadastroVideo} /> {/*Se digitar barra, mostra o componente app*/}
    <Route path='/' component={App} exact/> 
    <Route component={Pagina404} /> 
    
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

