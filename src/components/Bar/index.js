import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';
import twitter from '../../assets/img/twitter.png';


const Bar = () =>(
  <Carousel autoplay>
    <div className="Bar-item">
      <img src={linkedin} alt="Pedro Regenes" />
      <a href="https://www.linkedin.com/in/phregenes/">Acessar perfil no Linkedin</a>
    </div>
    <div className="Bar-item">
      <img src={github} alt="Pedro Regenes" />
      <a href="https://github.com/Phregenes">Acessar perfil no github</a>
    </div>
    <div className="Bar-item">
      <img src={twitter} alt="Pedro Regenes" />
      <a href="https://www.linkedin.com/in/phregenes/">Acessar perfil no Twitter</a>
    </div>
  </Carousel>
);
  
export default Bar;