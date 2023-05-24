import UiNavBarAdmin from "../UI/UiNavBarAdmin"
import AdminPanelStyle from '../Styles/AdminPanel.module.css'
import { useState, useRef } from "react"
import UiOffersAdmin from "../UI/UiOffersAdmin";
const AdminPanel: React.FC = ()=> {
  const refContainer = useRef<HTMLDivElement>(null);
   const  OnClick = (e : HTMLDivElement | null, e1 : HTMLDivElement | null )=> {
       e?.classList.toggle(`${AdminPanelStyle.Open}`)
       e1?.classList.toggle(`${AdminPanelStyle.Open}`)
       refContainer.current?.classList.toggle(`${AdminPanelStyle.Open}`)
    }
    const arr = [1,2,3,4,5];
    const [int, setInf] = useState({
      "1" :[],
      "2" : []
    })
  return(<>
   <UiNavBarAdmin OnClick={OnClick}/>
     <div ref={refContainer} className= {AdminPanelStyle.Container}> 
        <UiOffersAdmin/>
     </div>
  </>)
}
export default AdminPanel