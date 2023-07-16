import { Button, TextField, Input, Container,Select,MenuItem  } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { APIFiles } from "../../../Helpers/APIFiles";
import { useNavigate } from "react-router-dom";
import { FileTip, FileTypeRequest } from "../../Types/FileType";
import { APIAbout } from "../../../Helpers/APIAbout";
import { AboutCreateType } from "../../Types/AboutType";
import { FranType } from "../../Types/FranType";
import { APIFran } from "../../../Helpers/APIFran";
const UiFranUpdate = ()=> {
    const API = new APIFran()
    const [fran, setFran] = useState<FranType>({ content  : "" });
    const navigate = useNavigate();
    let error : string | undefined;
      const handleUpload = async () => {
        await API.editFran(fran)
        if(error){
           alert("Вы заполнили поля неправильно!")
        }else {
          navigate(-1);
        }
      };
      async function load (){
        const response = await API.getFran()
        if(response){
          setFran(response)
        }
      }
      useEffect(()=> {
             load()  
      },[])

    return(<>
  <Container>
    <h1>Редактировать информацию франшизу</h1>



        <TextField
          type="text"
          placeholder="контент"
          className= {AdminStyle.inputX}
          onChange={(e)=> setFran({...fran, content : e.target.value})}
          value={fran.content}
        />

        <div style={{display: "flex", justifyContent : "space-between"}}>
      
  
         <Button   variant="outlined" onClick={()=> handleUpload()} >Изменить</Button>
         <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
        
      
        </div>
     
  </Container>
    </>)
}
export default UiFranUpdate;