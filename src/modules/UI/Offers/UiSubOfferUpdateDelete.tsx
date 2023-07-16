import { Button, Container, TextField } from "@mui/material"
import AdminStyle  from '../../Styles/AdminPanel.module.css'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react";
import { sortProb } from "../../../Helpers/sortAssistance";
import { OfferChildCreateType, OfferCreateType } from "../../Types/OfferCreateType";
import { APIOffer } from "../../../Helpers/APIoffer";
import { OfferChildType } from "../../Types/OfferType";
const UiSubOfferUpdateDelete: React.FC = ()=> {
    const navigate = useNavigate();
    const id = useParams();
    const [subOffer, setsubOffer] = useState<OfferChildCreateType>({name : "", subAssistanceTasks: [""],  description : "", cost: 0, assistanceId : id.id})
    let API = new APIOffer();
    async function load (){
     const data =  await API.getSubOffer(id.id);
      if(data)
      setsubOffer(data)
    }
    useEffect(()=> {
           load()  
    },[])
    const Update = async()=> {
     const error =  await API.UpdateSubOffer(subOffer, id.id);
     if(error){
         alert("Вы заполнили поля неправильно!")
     }else {
      navigate(-1);
     }
      
    }
    const Delete = async()=> {
      const error = await API.DeleteSubOffer(id.id);
      if(error){
          alert("Вы заполнили поля неправильно!")
      }else {
        navigate(-1);
      }
      
    }
    return(<>
     <Container className= {AdminStyle.containerCreate}  maxWidth="sm">
     <h1 >Редактирование и удаление подуслуги</h1>
        <TextField
          id="outlined-multiline-flexible"
          label="Имя подуслуги"
          className= {AdminStyle.inputX}
          onChange={(e) => setsubOffer({...subOffer, name : e.target.value}) }
          value={subOffer.name}
        />

<TextField
          id="outlined-multiline-flexible"
          label="Описание"
          className= {AdminStyle.inputX}
          onChange={(e) =>setsubOffer({...subOffer, description : e.target.value }) }
          value = {subOffer.description}   
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Что включает подусулга"
          className= {AdminStyle.inputX}
          onChange={(e) =>setsubOffer({...subOffer, subAssistanceTasks: e.target.value.split(';')}) }
          value = {subOffer.subAssistanceTasks.join(";")}   
        />

<TextField
          id="outlined-multiline-flexible"
          label="Цена"
          className= {AdminStyle.inputX}
          onChange={(e) =>setsubOffer({...subOffer, cost :Number( e.target.value) }) }
          value = {subOffer.cost}   
        />
         <div style={{display: "flex", justifyContent : "space-between"}}>
           <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
           <Button  variant="outlined" onClick={()=> Update()}  >Редактировать</Button>
           <Button  variant="outlined" onClick={()=> Delete()}  >Удалить</Button>
         </div>
         
      </Container>
       
    </>)
}
export default UiSubOfferUpdateDelete