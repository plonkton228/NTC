import MainStyles from '../Styles/MainStyles.module.css'
import NavBarStyle from '../Styles/NavBar.module.css'
import logo from '../Images/NavBarImg/Logo.png'
import Telegram from '../Images/NavBarImg/Telegram.png'
import WhatsApp from '../Images/NavBarImg/WhatsApp.png'
import Email from '../Images/NavBarImg/Email.png'
import Viber from '../Images/NavBarImg/Viber.png'
import {useRef, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { SetUpVisual } from '../../store/actions/reducers/visualReducer'
const NavBar = ()=> {
  const dispatch = useAppDispatch();
  const ClickVisual = ()=> {
    dispatch(SetUpVisual())
  }
  let ref = useRef<HTMLDivElement>(null);
  let ref1 = useRef<HTMLDivElement>(null);
  let ref2 = useRef<HTMLDivElement>(null);
  const Clicker = ()=> {
    ref.current?.classList.toggle(`${NavBarStyle.Open}`)
    ref1.current?.classList.toggle(`${NavBarStyle.Open}`)
    ref2.current?.classList.toggle(`${NavBarStyle.Open}`)
  }

    return (<>
      <header  ref={ref2} className= {`${NavBarStyle.head}`}>
        <div className= {MainStyles.container}>
            <div className={NavBarStyle.InnerNavBar}>
                <div className= {NavBarStyle.InfoNavBarUp}>
                  <div className= {NavBarStyle.PositionContainer}>
                  <img alt="" src= {logo}></img>
                   <div className= {NavBarStyle.TextNavBarContainer}>
                    <p id = "Up1">Научно-технический центр</p>
                    <p id = "Up2">«Промышленная и экологическая безопасность»</p>
                    <p id = "Up2">Тольяттинский государственный университет</p>
                   </div> 
                  </div>
                  <div className= {NavBarStyle.Telephone}>
                   <p id = "Up3">+ 7 927 891 70 25</p>
                   <div style={{paddingTop:"7px"}}>
                    <img alt="" style={{marginRight: "10px"}} src ={Viber}/>
                    <img alt="" style={{marginRight: "10px"}} src ={WhatsApp}/>
                    <img alt="" style={{marginRight: "10px"}} src ={Telegram}/> 
                    <img alt="" style={{marginRight: "10px"}} src ={Email}/></div> 
                    <button className= {NavBarStyle.btnNavBar} style={{marginTop : "10px"}} onClick={()=> ClickVisual()}>Версия для слабовидящих</button>
                  </div>
                  
                </div>
                <div className= {NavBarStyle.InfoNavBarDown}>
                 <div style = {{width: "100%"}}>
                    <nav>
                        <ul className= {NavBarStyle.NavigateBar}>
                            <a href='/#section1'><li id = {NavBarStyle.Down1}>Главная</li></a>
                            <a href='/#section2'><li id = {NavBarStyle.Down1}>Услуги</li></a>
                            <a href='/#section3'><li id = {NavBarStyle.Down1}>О нас</li></a>
                            <a href='/#section4'><li id = {NavBarStyle.Down1}>Документы</li></a>
                            <a href='/#section5'><li id = {NavBarStyle.Down1}>Наши клиенты</li></a>
                            <a href='/#section6'><li id = {NavBarStyle.Down1}>Новости</li></a>
                            <a href='/#section7'><li id = {NavBarStyle.Down1}>Франшиза</li></a>
                            <a href='/#section8'><li id = {NavBarStyle.Down1}>Контакты</li></a>
                        </ul>
                    </nav>
                 </div>
                </div>
            </div>
            
        </div>
        <div ref ={ref1} className = {NavBarStyle.NavBarMobile} >
                    <nav>
                        <ul className= {NavBarStyle.NavigateBarMobile}>
                        <a href='/#section1'><li id = {NavBarStyle.Down1}>Главная</li></a>
                            <a href='/#section2'><li id = {NavBarStyle.Down1}>Услуги</li></a>
                            <a href='/#section3'><li id = {NavBarStyle.Down1}>О нас</li></a>
                            <a href='/#section4'><li id = {NavBarStyle.Down1}>Документы</li></a>
                            <a href='/#section5'><li id = {NavBarStyle.Down1}>Наши клиенты</li></a>
                            <a href='/#section6'><li id = {NavBarStyle.Down1}>Новости</li></a>
                            <a href='/#section7'><li id = {NavBarStyle.Down1}>Франшиза</li></a>
                            <a href='/#section8'><li id = {NavBarStyle.Down1}>Контакты</li></a>
                        </ul>
                    </nav>
                 </div>
        <div  onClick={()=> {Clicker()}}>
           <div ref={ref}  className= {NavBarStyle.Burger}></div>
         </div>
      
      </header>
    </>)
}
export default NavBar