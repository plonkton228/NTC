import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';


import React from 'react';
import { Button, Container, TextField } from "@mui/material"
import AdminStyle  from '../../Styles/AdminPanel.module.css'
import { useNavigate, useParams } from "react-router-dom"
import {  useState } from "react";
import { sortProb } from "../../../Helpers/sortAssistance";
import { OfferChildCreateType, OfferCreateType } from "../../Types/OfferCreateType";
import { APIOffer } from "../../../Helpers/APIoffer";
import { OfferChildType } from '../../Types/OfferType';
const UiSubOfferCreate: React.FC = ()=> {
    const navigate = useNavigate();
    const id = useParams();
    let API = new APIOffer();
    const [subOffer, setsubOffer] = useState<OfferChildCreateType>({name : "", subAssistanceTasks: [""],  description : "", cost: 0, assistanceId:id.id})
    const click = async ()=> {
      const error = await API.createSubOffers(subOffer);
      if(error){
        alert(error)
      }else {
        navigate(-1);
      }
      
    }
    return(<>
      <Container className= {AdminStyle.containerCreate}  maxWidth="sm">
      <h1 >Создание подуслуги!!!</h1>
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
           <Button  variant="outlined" onClick={()=> click()} >Создать</Button>
         </div>
          
      </Container>

  value={subOffer.name}    </>)
}
export default UiSubOfferCreate