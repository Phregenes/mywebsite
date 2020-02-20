import React from 'react';

import './styles.css';

import linkedin from '../../linkedin.png';
import github from '../../github.png';
 
function Bar(){
  return(
    <main>
        <ul>
        <li className="dev-item">
            <header>
              <img src={github} alt="Pedro Regenes" />
              <div className="user-info">
                <strong>GitHub</strong>
                <a href="https://github.com/Phregenes">Acessar perfil no github</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src={linkedin} alt="Pedro Regenes" />
              <div className="user-info">
                <strong>Linkedin</strong>
                <a href="https://www.linkedin.com/in/phregenes/">Acessar perfil no Linkedin</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src={linkedin} alt="Pedro Regenes" />
              <div className="user-info">
                <strong>Linkedin</strong>
                <a href="https://www.linkedin.com/in/phregenes/">Acessar perfil no Linkedin</a>
              </div>
            </header>
          </li>
          </ul>
          </main>
  );
};

  
  export default Bar;