import { useEffect, useState } from 'react';
import { OfferType } from '../../Types/OfferType';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APIOffer } from '../../../Helpers/APIoffer';
import UiOfferAdmin from './UiOfferAdmin';


interface UiOffersAdmin {
  admin : {offers : boolean, files : boolean},
  setAdmin : (admin :{offers : boolean, files : boolean} ) => void,
  
}
const UiOffersAdmin: React.FC<UiOffersAdmin> = ({admin,setAdmin})=> {
    const [offers, setOffers] = useState<OfferType[]>()
    let API = new APIOffer();
    const navigate = useNavigate();
    useEffect(()=> {
      loadFunction()
        
    },[])
    const loadFunction = async () => {
      try {
       const response = await API.getAllOffers();
       setOffers( prevOffer => response.data)
     } catch (error) {
        
     }
    }

    const deleteFunction = async (id : string)=> {
      try {
        API.DeleteOffer(id)
        setTimeout( ()=> loadFunction(), 100)
      } catch (error) {
        
      }
    }
  
    return(<>
     {
      offers ?   <UiOfferAdmin deleteFunction={deleteFunction} offers={offers} setOffers={setOffers} navigate={navigate}/>:
      <div>Загрузка!</div>
     }
    
    </>)
}
export default UiOffersAdmin