import StyleOffer from "../../Styles/Offer.module.css"
import play from "../../Images/offer/Play.png"
import NavBar from "../../Lists/NavBar"
import { useAppSelector } from "../../../hooks/redux"
interface UiOfferTemplate {
    id : string,
    header : string,
    arr : Array<string>,
    navigate: (path: string) => void
}

const UiOffer: React.FC<UiOfferTemplate>  = ({header,arr, id,navigate})=> {
    
  return(<>

      <div data-testid = "Offerdiv" className= {StyleOffer.offercont}>
       
            <h1 style={{fontSize: "24px"}}>{header}</h1>
            <div style ={{minHeight : "106px"}}>
                {
                   arr ? arr.map((element, index)=> <div  data-testid = "UiOfferDiv" key={index} className= {StyleOffer.dec}> 
                        <img alt="" id = {StyleOffer.img1}  src= {play}/> <p  id = {StyleOffer.p1}>{element}</p>
                        
                         </div>) :
                         <div> </div>
                }
                
            </div>
            <button data-testid = 'buttonGetOfferInner' onClick={()=> navigate(`/offer/${id}`)} className= {StyleOffer.decbutton}>ПОДРОБНЕЕ</button>
      </div>
      
  </>)
}
export default UiOffer;