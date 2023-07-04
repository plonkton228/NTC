import { Button, Container, TextField } from "@mui/material"
import AdminStyle  from '../../Styles/AdminPanel.module.css'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react";
import { sortProb } from "../../../Helpers/sortAssistance";
import { OfferCreateType, OfferUpdateType } from "../../Types/OfferCreateType";
import { APIOffer } from "../../../Helpers/APIoffer";
const UiOfferUpdate: React.FC = ()=> {
    const navigate = useNavigate();
    const id = useParams();
    const [offer, setOffer] = useState<OfferUpdateType>({name : "", assistanceTasks: [""],  description : "", assistanceInclude : ["", ""]})
    let API = new APIOffer();
    async function load (){
       const reponse =  await API.getOfferById(id.id)
       if( reponse ){
        setOffer({...offer, ...reponse.data});
       }
    }
    useEffect(()=> {
           load()  
    },[])

    const Update = async()=> {
      const error = await API.UpDateOffer(id.id, offer);
      if(error){
        alert("Вы заполнили поля неправильно!")
      }else {
        navigate(-1);
      }
      
    }
    return(<>
      <Container className= {AdminStyle.containerCreate}  maxWidth="sm">
      <h1 >Редактирование услуги</h1>
      <TextField
          id="outlined-multiline-flexible"
          className= {AdminStyle.inputX}
          onChange={(e) => setOffer({...offer, name : e.target.value}) }
          value={offer.name}
        />

<TextField
          id="outlined-multiline-flexible"
          className= {AdminStyle.inputX}
          onChange={(e) =>setOffer({...offer, assistanceTasks: e.target.value.split(';') }) }
          value = {offer.assistanceTasks.join(";")}
        />
        <div style={{display: "flex", justifyContent : "space-between"}}>
           <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
           <Button  variant="outlined" onClick={()=> Update()} >Редактировать</Button>
        </div>
    
      </Container>
       
    </>)
}
export default UiOfferUpdate