import MainStyles from '../Styles/MainStyles.module.css'
import NavBarStyle from '../Styles/NavBar.module.css'
import logo from '../Images/NavBarImg/Logo.png'
import Telegram from '../Images/NavBarImg/Telegram.png'
import WhatsApp from '../Images/NavBarImg/WhatsApp.png'
import Email from '../Images/NavBarImg/Email.png'
import Viber from '../Images/NavBarImg/Viber.png'
import {useRef} from 'react'
const NavBar = ()=> {
  let ref = useRef<HTMLDivElement>(null);
  let ref1 = useRef<HTMLDivElement>(null);
  let ref2 = useRef<HTMLDivElement>(null);
  const Clicker = ()=> {
    ref.current?.classList.toggle(`${NavBarStyle.Open}`)
    ref1.current?.classList.toggle(`${NavBarStyle.Open}`)
    ref2.current?.classList.toggle(`${NavBarStyle.Open}`)
  }

    return (<>
      <header ref={ref2} className= {NavBarStyle.head}>
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
                  </div>
                  
                </div>
                <div className= {NavBarStyle.InfoNavBarDown}>
                 <div style = {{width: "100%"}}>
                    <nav>
                        <ul className= {NavBarStyle.NavigateBar}>
                            <li id = {NavBarStyle.Down1}>Главная</li>
                            <li id = {NavBarStyle.Down1}>Услуги</li>
                            <li id = {NavBarStyle.Down1}>О нас</li>
                            <li id = {NavBarStyle.Down1}>Документы</li>
                            <li id = {NavBarStyle.Down1}>Наши клиенты</li>
                            <li id = {NavBarStyle.Down1}>Новости</li>
                            <li id = {NavBarStyle.Down1}>Франшиза</li>
                            <li id = {NavBarStyle.Down1}>Контакты</li>
                        </ul>
                    </nav>
                 </div>
                </div>
            </div>
            
        </div>
        <div ref ={ref1} className = {NavBarStyle.NavBarMobile} >
                    <nav>
                        <ul className= {NavBarStyle.NavigateBarMobile}>
                            <li id = {NavBarStyle.Down1}>Главная</li>
                            <li id = {NavBarStyle.Down1}>Услуги</li>
                            <li id = {NavBarStyle.Down1}>О нас</li>
                            <li id = {NavBarStyle.Down1}>Документы</li>
                            <li id = {NavBarStyle.Down1}>Наши клиенты</li>
                            <li id = {NavBarStyle.Down1}>Новости</li>
                            <li id = {NavBarStyle.Down1}>Франшиза</li>
                            <li id = {NavBarStyle.Down1}>Контакты</li>
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