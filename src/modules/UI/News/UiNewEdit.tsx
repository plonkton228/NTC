import { useNavigate, useParams } from "react-router-dom";
import { APINews } from "../../../Helpers/APInews";
import { useEffect, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { updateNews } from "../../Types/NewsType";
const UiNewsUpdate: React.FC = ()=> {
    const navigate = useNavigate();
    const id = useParams();
    const [news, setNews] = useState<updateNews>({title : "", text: "", author: "", newsLinks: ["fd"]})
    let API = new APINews();
    async function load (){
       const response =  await API.getNewsById(id.id)
       if( response ){
        setNews({...news, ...response});
       }
       
    }
    useEffect(()=> {
           load()  
    },[])

    const Update = async()=> {
     const error =  await API.editNews(id.id, news);
     if(error){
         alert("Вы заполнили поля неправильно!")
     }else {
      navigate(-1);
     }
      
    }
    return(<>
      <Container className= {AdminStyle.containerCreate}  maxWidth="sm">
      <h1 >Редактирование новости</h1>
      <TextField
          id="outlined-multiline-flexible"
          className= {AdminStyle.inputX}
          onChange={(e) => setNews({...news, title : e.target.value}) }
          value={news.title}
        />

     <TextField
          id="outlined-multiline-flexible"
          className= {AdminStyle.inputX}
          onChange={(e) => setNews({...news, text : e.target.value}) }
          value={news.text}
        />

<TextField
          id="outlined-multiline-flexible"
          className= {AdminStyle.inputX}
          onChange={(e) => setNews({...news, author : e.target.value}) }
          value={news.author}
        />
         <div style={{display: "flex", justifyContent : "space-between"}}>
           <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
           <Button  variant="outlined" onClick={()=> Update()} >Редактировать</Button>
         </div>
         
      </Container>
       
    </>)
}
export default UiNewsUpdate