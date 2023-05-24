import { useRef } from 'react'
import AdminPanel from '../Styles/AdminPanel.module.css'
interface UiNavBarAdminTemplate {
    OnClick : (e: HTMLDivElement | null, e1: HTMLDivElement | null) => void,
}
const UiNavBarAdmin: React.FC<UiNavBarAdminTemplate> = ({OnClick})=> {
    const refNavBar = useRef<HTMLDivElement>(null);
    const refBurger = useRef<HTMLDivElement>(null);
    
 return(<>
   <header className= {AdminPanel.head}>
    <div className= {AdminPanel.hovBurger} onClick={()=> {OnClick(refNavBar.current, refBurger.current)}} />
     <div ref = {refBurger}  className= {AdminPanel.burger} onClick={()=> {OnClick(refNavBar.current, refBurger.current)}}/>
    
     <div ref={refNavBar}className= {AdminPanel.NavBar}>
        <div></div>
     </div>
     
   </header>
   
 </>)
}
export default UiNavBarAdmin