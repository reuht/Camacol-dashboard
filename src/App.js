import logo from './logo.svg';
import './App.css';
import Lienal from './Components/Lineal';
import Sector from './Components/sector';
import Bars from './Components/Bars';

function App() {
  return (
    
    <div className="container-fluid">
      <div className='col'>
        <div className='row'>
          <div className='col-9 p-2'>
            <Lienal/>
          </div>
          <div className='col-3'>
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
