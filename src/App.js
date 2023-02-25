import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <header className="App-header">
          <Routes>
            <Route exact path='/' element={<Home />} />

          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
