import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useWindowScroll} from 'react-use';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Sections/Home/Home';
import { About } from './components/Sections/About/About';
import { Classes } from './components/Sections/Classes/Classes';
import { Services } from './components/Sections/Services/Services';
import { Team } from './components/Sections/Team/Team';
import { Contact } from './components/Sections/Contact/Contact';
import { SignUp } from './components/Sections/SignUp/SignUp';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  const {y:pageYOffset} = useWindowScroll();
  const [navbar,setNavbar] = useState(false);
  useEffect(()=>{
    if(pageYOffset>1){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  },[pageYOffset]);

  return (
      <Router>
        {navbar?<Navbar color={"black"} pad={"0.4em 2em"} />:<Navbar />}
        <Home />
        <About />
        <Classes />
        <SignUp />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </Router>
  );
}

export default App;
