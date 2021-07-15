
import './App.css';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Helplines from './components/pages/Helplines';
import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Home from './components/pages/Home';
import ImportantAddress from './components/pages/Mandi';
import Schemes from './components/pages/Schemes';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Crop from './components/pages/Crop';
import About from './components/pages/About';
import Mandi from './components/pages/Mandi'
import Rabi from './components/pages/Rabi';
import Khareef from './components/pages/Khareef';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mandi" component={Mandi} /> 
         <Route exact path="/importantAddress" component={ImportantAddress} />  
        <Route exact path="/Helplines" component={Helplines} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/schemes" component={Schemes} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/Rabi" component={Rabi} /> 
        <Route exact path="/Khareef" component={Khareef} /> 
        <Route component={NotFound} /> 
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
