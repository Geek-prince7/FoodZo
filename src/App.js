import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './Screens/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/createuser' element={<SignUp/>}/>

      </Routes>
    </Router>
  );
}

export default App;
