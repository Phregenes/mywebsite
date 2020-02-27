import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';
import Header from 'antd/lib/calendar/Header';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';


const Bar = () =>(
  <Carousel autoplay>
    <div>
      <h3>ola mundo</h3>
    </div>
    <div className="user-info">
      <img src={github} alt="Pedro Regenes" />
      <strong>GitHub</strong>
      <a href="https://github.com/Phregenes">Acessar perfil no github</a>
    </div>
    <div className="user-info">
      <img src={linkedin} alt="Pedro Regenes" />
      <strong>Linkedin</strong>
      <a href="https://www.linkedin.com/in/phregenes/">Acessar perfil no Linkedin</a>
    </div>
  </Carousel>
);
  
export default Bar;