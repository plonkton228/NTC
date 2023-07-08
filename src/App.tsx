import React, { useEffect } from 'react';
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
import { useAppSelector } from './hooks/redux';


function App() {
  const {size, isVisual} = useAppSelector(state => state.visuallyReducer)
  useEffect(()=> {
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const href = anchor.getAttribute('href');
          if (href !== null && href !== "") {
            
              const target = document.querySelector(href.substring(1)) as HTMLElement;
              if (target !== null) {
               
               window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
               })
              }
          }
      });
  });
  },[])
  window.addEventListener('load', ()=> {
    const url = window.location.href;
    const hash = url.substring(url.indexOf('#') );
    let target :HTMLElement ;
    if(hash.includes("#")){
       target = document.querySelector(hash) as HTMLElement;
       if(target !== null && hash !==null){

        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        })
      
    }}
  
   })
  return (
 <>
   <div className= {MainStyle.BackGroundC}>
        
   </div>
   <div style={{fontSize: `${size}px`}}>
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
   </div>
   
 </>
  );
}

export default App;
