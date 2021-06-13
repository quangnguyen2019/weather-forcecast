import './App.css';
import ForecastContainer from '../ForecastContainer/index';

function App() {
  return (
    <div className="App">
        <div className="background-container">
            <div className="first-layer"></div>
            <div className="second-layer"></div>
        </div>
        
        <ForecastContainer />
    </div>
  );
}

export default App;