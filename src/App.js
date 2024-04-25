import React from 'react';
import './App.css';
import Lineal from './Components/Lineal';
import Sector from './Components/sector';
import Proyecto1 from './Components/proyecto1';
import Proyecto2 from './Components/proyecto2';
import Barra from './Components/barra';
import './style.css';

function App() {
  const projectData = {
    title: 'Proyecto por constructora ',
    subtitle: 'Constructora',
    info: [
      { texto: 'Constructora perfil urbano s.a', total: '102' },
      { texto: 'Portales urbanos s.a', total: '55' },
      { texto: 'Construcciones marval s.a', total: '88' },
      { texto: 'Construcciones san vicente s.a', total: '100' },
      { texto: 'Constructora iza ltda', total: '50' },
      { texto: 'Sporas s.a.s', total: '40' },
    ],
  };

  const projectData2 = {
    title: 'Proyecto por entidad fiduciaria ',
    subtitle: 'Constructora',
    info: [
      { texto: 'Constructora perfil urbano s.a', total: '102' },
      { texto: 'Portales urbanos s.a', total: '55' },
      { texto: 'Constucciones marval s.a', total: '88' },
      { texto: 'Construcciones san vicente s.a', total: '100' },
      { texto: 'Constructora iza ltda', total: '50' },
      { texto: 'Sporas s.a.s', total: '40' },
    ],
  };

  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className='row'>
          <div className='col-md-9'>
            <div className='container small-scroll'>
              <Lineal />
            </div>
          </div>
          <div className='col-3'>
            <h1>El nuevo</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-3 p-3'>
            <div className='container small-scroll'>
              <Proyecto1
                title={projectData.title}
                info={projectData.info}
                total={projectData.total}
              />
            </div>
          </div>

          <div className='col-3 p-3'>
            <div className='container small-scroll'>
              <Proyecto2
                title={projectData2.title}
                info={projectData2.info}
                total={projectData2.total}
              />
            </div>
          </div>
          <div className='col-3 p-3'>
            <Sector />
          </div>
          <div className='col-3 p-3'>
            <Barra />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




