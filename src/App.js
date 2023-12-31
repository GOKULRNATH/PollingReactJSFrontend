import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from  "./components/Nav"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Polllist from './components/Polllist';
import Addpoll from './components/Addpoll';
import Logindummy from './components/Logindummy'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Polllist/>}/>
        <Route exact path='/addpoll' element={<Addpoll/>}/>
        <Route exact path='/login' element={<Logindummy/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
