import ContactStyle from '../Styles/ContactsStyle.module.css';
import contact1 from '../Images/Contacts/Contact1.png';
import contact2 from '../Images/Contacts/Contact2.png';
import contact3 from '../Images/Contacts/Contact3.png';
import contact4 from '../Images/Contacts/Contact4.png';
import { useEffect, useState } from 'react';
const Contacts: React.FC = ()=> {
  const [width , setWidth] = useState<number>();
 window.addEventListener('resize', ()=> {
    if(window.innerWidth <= 1000){
      setWidth(310)
    }else {
      setWidth(540)
    }
 })
 window.addEventListener('load', ()=> {
  if(window.innerWidth <= 1000){
    setWidth(310)
  }else {
    setWidth(540)
  }
})
    return(<>
         <div id = "section8" className= {ContactStyle.container}>
              <div style={{paddingLeft: "40px", paddingRight: "40px",paddingBottom: "40px"}}>
                  <h1 className= {ContactStyle.h1dec}>КОНТАКТЫ</h1>
                  <div className= {ContactStyle.innerContact}>
                     <div className= {ContactStyle.cardC}>
                     <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5bddecf32a52e02cca42dea82cfc32d5f69136e35a26f0ad7117dcd3c7766e77&amp;source=constructor" width={width} height="516" ></iframe>
                     </div>
                     <div className= {ContactStyle.contactC}>
                       <h1>+ 7 927 891 70 25</h1>
                       <h1>44-91-63</h1>
                       <h1>ntc@tltsu.ru</h1>
                       <div>
                        <img alt="" className= {ContactStyle.imgD} src= {contact1}/>
                        <img alt=""  className= {ContactStyle.imgD} src= {contact2}/>
                        <img alt=""  className= {ContactStyle.imgD} src= {contact3}/>
                        <img alt=""  className= {ContactStyle.imgD} src= {contact4}/>
                       </div>
                     </div>
                  </div>
              </div>
         </div>
    </>)
}
export default Contacts;