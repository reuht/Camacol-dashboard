import './App.css';
import Lienal from './Components/Lineal';
import Sector from './Components/sector';
import Bars from './Components/Bars';

function App() {
  return (
    
    <div className="container-fluid p-5">
      <div className='col background-color-dashboard'>
        <div className='row'>
          <div className='col-6'>
            <p className='app-title'>Dashboard</p>
          </div>
        </div>
        <div className='row '>
          <div className='col-8 '>
            <Lienal/>
          </div>
          <div className='col-4 '>
            <h1>El nuevo</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-3 p-3'> 
            <h1>Grafico 1</h1>
          </div>
          <div className='col-3 p-3'> 
            <h1>Grafico 1</h1>
          </div>
          <div className='col-3 p-3'> 
              <Sector />
          </div>
          <div className='col-3 p-3'> 
            <div className='d-flex'>
              <div className='title'>
              Proyecto por constructora
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
