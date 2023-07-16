import { useState, useEffect } from 'react';
import StyleOffer from '../Styles/Offer.module.css';
import UiOffer from '../UI/Offers/UiOffer';
import { OfferType } from '../Types/OfferType';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Offer: React.FC = ()=> {

const [Offers, setOffers] = useState<Array<OfferType> | null>()
const navigate = useNavigate();
useEffect(()=> {
  loadFunction()
 
},[])
const loadFunction = async ()=> {
  try {
    const response =  await axios.get<OfferType[]>(process.env.REACT_APP_API_URL+'/assistance/all')
 setOffers(response.data)
  } catch (error) {
    
  }
 
}


    return(<>
    <div id = "section2" className= {StyleOffer.container}>
      <div style = {{paddingLeft: "40px", paddingRight: "40px"}}>
       <h1 id = {StyleOffer.h1id} className= {StyleOffer.h1dec} >Наши услуги</h1>
       <div className= {StyleOffer.innerOffer}>
          {
            Offers ? 
            Offers.map((item)=> <UiOffer  key={item.id} id = {item.id} header= {item.name} arr = {item.assistanceTasks} navigate={navigate} /> ) :
            <div data-testid = "LoadDiv"> Загрузкааааа!</div>
          }
        
       </div>
      </div>
      
    </div>

      
    </>)
}
export default Offer