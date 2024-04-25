import React from 'react';
import Lineal from './Components/Lineal';
import Sector from './Components/sector';
import ListProyects from './Components/ListProyects';
import './App.css';

function App() {

  const projectData = [
    { texto: 'Constructora perfil urbano s.a', total: '102' },
    { texto: 'Portales urbanos s.a', total: '55' },
    { texto: 'Construcciones marval s.a', total: '88' },
    { texto: 'Construcciones san vicente s.a', total: '100' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
    { texto: 'Construcciones marval s.a', total: '88' },
    { texto: 'Construcciones san vicente s.a', total: '100' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
    { texto: 'Construcciones marval s.a', total: '88' },
    { texto: 'Construcciones san vicente s.a', total: '100' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
    { texto: 'Construcciones san vicente s.a', total: '100' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
    { texto: 'Construcciones marval s.a', total: '88' },
    { texto: 'Construcciones san vicente s.a', total: '100' },
    { texto: 'Constructora iza ltda', total: '50' },
    { texto: 'Sporas s.a.s', total: '40' },
  ]; 

  return (
    <div className="container-fluid background-color-dashboard">
      <div className='row'>

        <div className='col-md-8' style={{padding:'1rem'}}>
          <Lineal />
        </div>

        <div className='col'>
          <h1>Grafico</h1>
        </div>

      </div>
      <div className='row'>

        <div className='col-sm'>
         <ListProyects title={'Proyecto por constructora'} data = {projectData}
         />
        </div>

        <div className='col-sm'>
        <ListProyects title={'Proyectos por entidad fiduciaria'} data = {projectData}/>
        </div>

        <div className='col-sm'>
          <Sector/>
        </div>

        <div className='col'>
          <h1>Grafico</h1>
        </div>

      </div>
    </div>
  );
}

export default App;


