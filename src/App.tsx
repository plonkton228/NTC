import React from 'react';
import MainStyle from "../src/modules/Styles/MainStyles.module.css";
import Services from './modules/Lists/serv';
import Offer from './modules/Lists/Offer';
import About from './modules/Lists/AboutUs';
import Document from './modules/Lists/Document';
import Clients from './modules/Lists/Clinets';
import News from './modules/Lists/News';
import Fran from './modules/Lists/Fran';
import Contacts from './modules/Lists/Contacts';
import NavBar from './modules/Lists/NavBar';
import { Link } from 'react-router-dom';


function App() {
  return (
 <>
   <div className= {MainStyle.BackGroundC}>
        
   </div>
    <NavBar/>
    <Services/>
    <Offer/>
    <About/>
    <Document/>
    <Clients/>
    <News/>
    <Fran/>
    <Contacts/>
    <Link data-testid = "LinkTest" to = "/test"/>
 </>
  );
}

export default App;
