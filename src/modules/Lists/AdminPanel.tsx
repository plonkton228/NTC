import UiNavBarAdmin from "../UI/UiNavBarAdmin"
import AdminPanelStyle from '../Styles/AdminPanel.module.css'
import { useState, useRef } from "react"
import UiOffersAdmin from "../UI/Offers/UiOffersAdmin";
import UiNews from "../UI/News/UiNews";
import UiFiles from "../UI/Files/UiFiles";
import AboutUsUi from "../UI/About/AboutUsUi";
import FranUi from "../UI/Fran/UiFran";

const AdminPanel: React.FC = ()=> {
  const refContainer = useRef<HTMLDivElement>(null);
  const refContainer2 = useRef<HTMLDivElement>(null);
  const refContainer3 = useRef<HTMLDivElement>(null);
  const refContainer4 = useRef<HTMLDivElement>(null);
  const refContainer5 = useRef<HTMLDivElement>(null);
  const [admin , setAdmin] = useState({offers : false, files : true});
   const  OnClick = (e : HTMLDivElement | null, e1 : HTMLDivElement | null )=> {
       e?.classList.toggle(`${AdminPanelStyle.Open}`)
       e1?.classList.toggle(`${AdminPanelStyle.Open}`)
       refContainer.current?.classList.toggle(`${AdminPanelStyle.Open}`)
       refContainer2.current?.classList.toggle(`${AdminPanelStyle.Open}`)
       refContainer3.current?.classList.toggle(`${AdminPanelStyle.Open}`)
       refContainer4.current?.classList.toggle(`${AdminPanelStyle.Open}`)
       refContainer5.current?.classList.toggle(`${AdminPanelStyle.Open}`)
    }
    const click = ()=> {
      console.log('hi')
      if(admin.offers){
       setAdmin({offers: false, files : true })
      }else {
       setAdmin({offers: true, files : false })
      }
      console.log(admin)
   }
  return(<>
   <UiNavBarAdmin OnClick={OnClick} click={click}/>
  
     <div ref={refContainer} className= {AdminPanelStyle.Container}> 
     <h1>Услуги</h1>
        <UiOffersAdmin admin={admin} setAdmin={setAdmin}/>
     </div>
      <div ref={refContainer2} className= {AdminPanelStyle.Container}>
      <h1>Новости</h1>
         <UiNews/>
      </div>
      <div ref={refContainer3} className= {AdminPanelStyle.Container}>
      <h1>Файлы</h1>
        <UiFiles/>
      </div>

      <div ref={refContainer4} className= {AdminPanelStyle.Container}>
      <h1>О НАС</h1>
        <AboutUsUi/>
      </div>

      <div ref={refContainer5} className= {AdminPanelStyle.Container}>
      <h1>Франшиза</h1>
        <FranUi/>
      </div>
  </>)
}
export default AdminPanel