import { Button, TextField, Input, Container,Select,MenuItem  } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { APIFiles } from "../../../Helpers/APIFiles";
import { useNavigate } from "react-router-dom";
import { FileTip, FileTypeRequest } from "../../Types/FileType";
import { APIAbout } from "../../../Helpers/APIAbout";
import { AboutCreateType } from "../../Types/AboutType";
const AboutUsUiUpdate = ()=> {
    const API = new APIAbout()
    const [about, setAbout] = useState<AboutCreateType>({ text  : "", aboutUs : "",url : ''  });
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    let error : string | undefined;
      const handleUpload = async () => {
        if (ref.current?.files) {
          const formData = new FormData();
         ref.current?.files[0] ? formData.append('image', ref.current?.files[0]):
         formData.append('some',ref.current?.files[0])
          formData.append('text', about.text)
          formData.append('aboutUs', about.aboutUs)
         error =  await API.editAboutUs(formData)
        }
        if(error){
           alert("Вы заполнили поля неправильно!")
        }else {
          navigate(-1);
        }
        
      };
      async function load (){
        const response = await API.getAboutUs()
        if(response){
          setAbout(response)
        }
      }
      useEffect(()=> {
             load()  
      },[])

    return(<>
  <Container>
    <h1>Редактировать информацию О НАС</h1>
       <input
          type="file"
          ref = {ref}
          
          placeholder="Перетащите файл сюда"
          className= {AdminStyle.inputX}
        />

        <TextField
          type="text"
          placeholder="О НАС"
          className= {AdminStyle.inputX}
          onChange={(e)=> setAbout({...about, aboutUs : e.target.value})}
          value={about.aboutUs}
        />

<TextField
          type="text"
          placeholder="Текст под картинкой"
        
          className= {AdminStyle.inputX}
          onChange={(e)=> setAbout({...about, text : e.target.value})}
          value={about.text}
        />

        <div style={{display: "flex", justifyContent : "space-between"}}>
      
  
         <Button   variant="outlined" onClick={()=> handleUpload()} >Изменить</Button>
         <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
        
      
        </div>
     
  </Container>
    </>)
}
export default AboutUsUiUpdate;