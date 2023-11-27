import './App.css';
import LeftMenu from './compnents/LeftMenu';
import MainContainer from './compnents/MainContainer';
import RightMenu from './compnents/RightMenu';

function App() {
  return (
    <div className="App">
     <LeftMenu/>
     <MainContainer/>
     <RightMenu/>
     <div className="background"></div>
    </div>
  );
}

export default App;
