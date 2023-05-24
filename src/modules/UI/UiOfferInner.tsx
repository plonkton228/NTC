import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import play from "../Images/offer/Play.png"
import stylesOffer from '../Styles/Offer.module.css'
import MainStyle from '../Styles/MainStyles.module.css'
import axios from "axios";
import { OfferType } from "../Types/OfferType";
import NavBar from "../Lists/NavBar";;
interface  templateOfferInner {
  
}

const UiOfferInner: React.FC<templateOfferInner> = ()=> {
    const id = useParams();
    const navigate = useNavigate();

    const [Offers, setOffer] = useState<OfferType | null >(
        null
       )
      useEffect(()=> {
        loadFunction()
      }, [])
      const loadFunction = async ()=> {
            try {
              const response =   await axios.get<OfferType>(`http://localhost:8080/assistance/${id.id}`)
                setOffer(response.data)
             
              
            } catch (error) {
                
            }
      }
    return(<>
    <NavBar/>
     <div className= {MainStyle.BackGroundC}>
        
    </div>
    <div data-testid = "divTest" className= {stylesOffer.container}>
        <div style = {{paddingLeft: "40px", paddingRight: "40px", textAlign: "start"}}>
         <h1 data-testid = "offer">Услуга в области труда: </h1>
          {
            Offers ? 
           Offers.assistanceTasks.map((item)=> <div data-testid = "offer" style={{display: "flex"}}> <img alt="" id = {stylesOffer.img1} src = {play}/> <p id = {stylesOffer.p1} >{item}</p> </div>   ) :
            <div data-testid = "Load">Загрузка!!!</div>
          }
          <div className= {stylesOffer.childOfferC}>
             {
                Offers?.subAssistanceList.map((item)=> <div data-testid = "subAssistanceList" onClick={()=> navigate(`/offer/${id.id}/child/${item.id}`)} className= {stylesOffer.childOffer}><p>{item.name}</p> <p style={{marginTop: "30px"}}>От {item.cost}</p></div> )
             }
          </div>
        </div>
    </div>
    
    </>)
}
export default UiOfferInner