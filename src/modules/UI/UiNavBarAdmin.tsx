import { useRef } from 'react'
import AdminPanel from '../Styles/AdminPanel.module.css'
interface UiNavBarAdminTemplate {
    OnClick : (e: HTMLDivElement | null, e1: HTMLDivElement | null) => void,
    click : () => void,
}
const UiNavBarAdmin: React.FC<UiNavBarAdminTemplate> = ({OnClick,click})=> {
    const refNavBar = useRef<HTMLDivElement>(null);
    const refBurger = useRef<HTMLDivElement>(null);
    
 return(<>
   <header className= {AdminPanel.head}>
    <div className= {AdminPanel.hovBurger} onClick={()=> {OnClick(refNavBar.current, refBurger.current)}} />
     <div ref = {refBurger}  className= {AdminPanel.burger} onClick={()=> {OnClick(refNavBar.current, refBurger.current)}}/>
    
     <div ref={refNavBar}className= {AdminPanel.NavBar}>
        <div style={{marginTop : "120px", overflow: "hidden", color : "white"}}> <nav>
          <p onClick={()=> click()}>Предложения</p>
          <p onClick={()=> click()}>Файлы</p>
          </nav></div>
     </div>
     
   </header>
   
 </>)
}
export default UiNavBarAdmin