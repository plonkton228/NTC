import { Button, TextField, Input, Container,Select,MenuItem  } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { APIFiles } from "../../../Helpers/APIFiles";
import { useNavigate, useParams } from "react-router-dom";
import { FileTip, FileTypeRequest } from "../../Types/FileType";
const UiFilesUpdate = ()=> {
    const API = new APIFiles()
    const [file, setFile] = useState<FileTypeRequest>({ type : FileTip.CLIENTS,resourceUrl : "" });
    const navigate = useNavigate();
    const id = useParams();
    const load = async ()=> {
        const response = await API.getFilesById(id.id)
        if(response){
         setFile(response)
        }
    }
      const handleUpload = async () => {
        let error : string | undefined;
        error = await API.updateFile(file, id.id)
       if(error){
        alert("Вы заполнили поля неправильно!")
       }else {
        navigate(-1);
       }
        
      };
    useEffect(()=> {
   load()
    },[])
    return(<>
  <Container>
    <h1>Редактировать файл</h1>

        <TextField
          type="text"
          placeholder="путь к внешнему файлу"
          className= {AdminStyle.inputX}
          onChange={(e)=> setFile({...file, resourceUrl : e.target.value})}
          value = {file.resourceUrl}
        />
        <div style={{display: "flex", justifyContent : "space-between"}}>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={file.type}
           label="Age"
          onChange={(e)=> setFile({...file, type : e.target.value as FileTip})}
          style={{width : "200px"}}
          >
          <MenuItem value={FileTip.CLIENTS}>clients</MenuItem>
          <MenuItem value={FileTip.DOCUMENT}>documents</MenuItem>
         </Select>
  
         <Button   variant="outlined" onClick={()=> handleUpload()} >Обновить</Button>
         <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
        
      
        </div>
     
  </Container>
    </>)
}
export default UiFilesUpdate;