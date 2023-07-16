import { Button, TextField, Input, Container,Select,MenuItem  } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { ChangeEvent, useRef, useState } from "react";
import { APIFiles } from "../../../Helpers/APIFiles";
import { useNavigate } from "react-router-dom";
import { FileTip, FileTypeRequest } from "../../Types/FileType";
const UiFilesCreate = ()=> {
    const API = new APIFiles()
    const [file, setFile] = useState<FileTypeRequest>({ type : FileTip.CLIENTS,resourceUrl : "" });
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
      const handleUpload = async () => {
        let error : string | undefined;
        if (ref.current?.files) {
          console.log('hi')
          const formData = new FormData();
          formData.append('file', ref.current?.files[0])
          formData.append('type', file.type)
          formData.append('resourceUrl', file.resourceUrl)
          error=  await API.addFile(formData)
        }
       if(error){
        alert("Вы заполнили поля неправильно!")
       }else {
        navigate(-1);
       }
        
      };
    return(<>
  <Container>
    <h1>Создать файл</h1>
       <input
          type="file"
          ref = {ref}
          placeholder="Перетащите файл сюда"
          className= {AdminStyle.inputX}
        />

        <TextField
          type="text"
          placeholder="Скопируйте путь к файлу сюда"
          className= {AdminStyle.inputX}
          onChange={(e)=> setFile({...file, resourceUrl : e.target.value})}
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
  
         <Button   variant="outlined" onClick={()=> handleUpload()} >Добавить</Button>
         <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
        
      
        </div>
     
  </Container>
    </>)
}
export default UiFilesCreate;