import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollView from './components/ScrollView';
import First_info from './components/First_info';
import Second_info from './components/Second_info';
import Third_info from './components/Third_info';
import Cards from './components/Cards';
import Feature from './components/Feature';
import Instructors from './components/Instructors';
import Employees from './components/Employees';
import Press from './components/Press';
import Community from './components/Community';
import Footer from './components/Footer';




function App() {
  return (<>
    <Router>
      <Navbar/>
      <Hero/>
      <ScrollView/>
      <First_info/>
      <Second_info/>
      <Third_info/>
      <Cards/>
      <Feature/>
      <Instructors/>
      <Employees/>
      <Press/>
      <Community/>
      <Footer/>
      <Switch>
      </Switch>
    </Router>
    
    </>
      
  )
}
export default App;
