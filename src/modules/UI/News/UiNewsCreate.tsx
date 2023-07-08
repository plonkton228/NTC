import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { APINews } from '../../../Helpers/APInews';
import { NewsType, innerNews, updateNews } from '../../Types/NewsType';
import { Button, Container, TextField } from '@mui/material';
import AdminStyle from '../../Styles/AdminPanel.module.css'
import { useNavigate, useParams } from 'react-router-dom';
const UiNewsCreate: React.FC = ()=> {
    const navigate = useNavigate();
    const id = useParams();
    const [news, setNews] = useState<innerNews>({id : "", title : "", text: "", author: "", newsLinks: ["fd"]})
    let API = new APINews();

    const Add = async()=> {
      const error = await API.addNews( news);
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
          placeholder='заголовок'
          className= {AdminStyle.inputX}
          onChange={(e) => setNews({...news, title : e.target.value}) }
          value={news.title}
        />

     <TextField
          id="outlined-multiline-flexible"
          placeholder='описание'
          className= {AdminStyle.inputX}
          onChange={(e) => setNews({...news, text : e.target.value}) }
          value={news.text}
        />

<TextField
          id="outlined-multiline-flexible"
          className= {AdminStyle.inputX}
          placeholder='автор'
          onChange={(e) => setNews({...news, author : e.target.value}) }
          value={news.author}
        />
        <div style={{display: "flex", justifyContent : "space-between"}}>
           <Button  variant="outlined" onClick={()=> navigate(-1)} >Назад</Button>
           <Button  variant="outlined" onClick={()=> Add()} >Добавить</Button>
        </div>
   
      </Container>
       
    </>)
}
export default UiNewsCreate