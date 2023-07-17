import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import play from "../../Images/offer/Play.png"
import stylesOffer from '../../Styles/Offer.module.css'
import MainStyle from '../../Styles/MainStyles.module.css'
import axios from "axios";
import { OfferType } from "../../Types/OfferType";
import NavBar from "../../Lists/NavBar";import { useAppSelector } from "../../../hooks/redux";
import { APIOffer } from "../../../Helpers/APIoffer";

interface  templateOfferInner {
  
}

const UiOfferInner: React.FC<templateOfferInner> = ()=> {
    const id = useParams();
    const navigate = useNavigate();
    const [heigth, setHeight] = useState<string>()
    const {sizeP, size, paddingTop, paddingTopInner} = useAppSelector(state => state.visuallyReducer)
    const [Offers, setOffer] = useState<OfferType | null >(
        null
       )
      useEffect(()=> {
        loadFunction()
        document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
          anchor.addEventListener('click', (e) => {
              e.preventDefault();
      
              const href = anchor.getAttribute('href');
              if (href !== null && href !== "") {
                  const targetSection = href.substring(1); // Удаляем "/#" из значения хэша
      
                  // Перенаправление на целевую страницу с передачей параметров в URL
                  window.location.href = `/${targetSection}`;
              }
          });
      }); 
        window.scrollTo({
          top: 0, 

          
      })
      if(window.innerWidth <= 1000){
        setHeight("%")
    }else {
     setHeight("vh")
    }
      }, [])
      const loadFunction = async ()=> {
            try {
        
              const response =   await axios.get<OfferType>(process.env.REACT_APP_API_URL + `/assistance/${id.id}`)
                setOffer(response.data)
             
              
            } catch (error) {
                
            }
      }
     window.addEventListener('resize', ()=> {
       if(window.innerWidth <= 1000){
           setHeight("%")
       }else {
        setHeight("vh")
       }
     })
   
    return(<>
    <div style={{fontSize : `${size}px`}}>
    <NavBar/>
    </div>
    
     <div className= {MainStyle.BackGroundC}>
        
    </div>
    <div style={{height : `100${heigth}`}}  data-testid = "divTest" className= {stylesOffer.container}>
        <div style = {{paddingLeft: "40px", paddingRight: "40px", textAlign: "start", paddingTop : `${paddingTopInner}px`}}>
        <div onClick={()=> navigate('/')} style={{display: "flex", alignItems : "center"}}>
            <div className= {stylesOffer.offerArrow}></div>
            <p style = {{marginLeft: "4px", fontSize: `${sizeP}px`}}>Назад</p>
        </div>
         <h1  data-testid = "offer">Услуга в области труда: </h1>
          {
            Offers ? 
           Offers.assistanceTasks.map((item,index)=> <div key = {index} data-testid = "offer" style={{display: "flex" , marginTop: "15px"}}> <img alt="" id = {stylesOffer.img1} src = {play}/> <p style={{fontSize: `${sizeP}px`}}  id = {stylesOffer.p1} >{item}</p> </div>   ) :
            <div data-testid = "Load">Загрузка!</div>
          }
          <div className= {stylesOffer.childOfferC}>
             {
                Offers?.subAssistanceList.map((item)=> <div key={item.id} data-testid = "subAssistanceList" onClick={()=> navigate(`/offer/${id.id}/child/${item.id}`)} className= {stylesOffer.childOffer}><p style={{fontSize: `${sizeP}px`}}>{item.name}</p> <p style={{marginTop: "30px",fontSize: `${sizeP}px`}}>От {item.cost}</p></div> )
             }
          </div>
        </div>
    </div>
    
    </>)
}
export default UiOfferInner