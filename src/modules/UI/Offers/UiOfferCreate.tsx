import { Button, Container, TextField } from "@mui/material"
import AdminStyle  from '../../Styles/AdminPanel.module.css'
import { useNavigate } from "react-router-dom"
import { useMemo, useState } from "react";
import { sortProb } from "../../../Helpers/sortAssistance";
import { OfferCreateType } from "../../Types/OfferCreateType";
import { APIOffer } from "../../../Helpers/APIoffer";
const UiOfferCreate: React.FC = ()=> {
    const navigate = useNavigate();
    const [offer, setOffer] = useState<OfferCreateType>({name : "", assistanceTasks: [""],  description : "dfgdfdf"})
    const createOffer = async()=> {
     const error =  await API.createOffer(offer)
     if(error){
       alert("Вы неправильно заполнили поля!")
     }else {
      navigate('/admin')
     }
    }
    let API = new APIOffer();
    return(<>
      <Container className= {AdminStyle.containerCreate}  maxWidth="sm">
      <h1 >Создание услуги</h1>
      <TextField
          id="outlined-multiline-flexible"
          label="Имя услуги"
          required
          className= {AdminStyle.inputX}
          onChange={(e) => setOffer({...offer, name : e.target.value}) }
          value={offer.name}
        />

<TextField
          id="outlined-multiline-flexible"
          label="Описание услуг"
          required = {true}
          className= {AdminStyle.inputX}
          onChange={(e) =>setOffer({...offer, assistanceTasks: e.target.value.split(';') }) }
          value = {offer.assistanceTasks.join(';')}   
        />
        <div style={{display: "flex", justifyContent : "space-between"}}>
           <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
           <Button  variant="outlined" onClick={()=> createOffer()} >Создать</Button>
        </div>
          
      </Container>

  value={offer.name}    </>)
}
export default UiOfferCreate