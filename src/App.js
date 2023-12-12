import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { UnoGen } from './Components/UnoGen';
import { DosGen } from './Components/DosGen';
import { TresGen } from './Components/TresGen';
import { CuatroGen } from './Components/CuatroGen';
import { CincoGen } from './Components/CincoGen';
import { SeisGen } from './Components/SeisGen';
import { Prog } from './Components/Prog';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <UnoGen />
      <DosGen />
      <TresGen />
      <CuatroGen />
      <CincoGen />
      <SeisGen />
      <Prog />
    </div>
  );
}

export default App;
