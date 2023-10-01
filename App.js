import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import  HOME  from "./components/Home";
import Log from "./components/Log";
import Register from "./components/Register";

import "./styles/log.css" ;
import "./styles/home.css";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Log/>}/>
          <Route path="/todo" element={<HOME/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;
