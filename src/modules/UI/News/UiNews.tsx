import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { APINews } from '../../../Helpers/APInews';
import { NewsType } from '../../Types/NewsType';
import { Button } from '@mui/material';
import AminStyle from '../../Styles/AdminPanel.module.css'
import { useNavigate, useParams } from 'react-router-dom';
const UiNews: React.FC = ()=> {
    const API = new APINews();
    const [news, setNews] = useState<NewsType>()
    const navigate = useNavigate();
    const load = async ()=> {
        const response =  await  API.getNews();
        setNews(response);
    }
    const Delete = async(id : string)=> {
        await API.deleteNews(id);
        load();
    }
  useEffect(()=> {
    load()
  },[])
    return(<>
  
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Имя</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Автор</TableCell>
            <TableCell align="right">Удалить</TableCell>
            <TableCell align="right">Редактировать</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news?.content?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
    
              <TableCell align="right" >
                {row.title}
              </TableCell>

              <TableCell style={{textOverflow : "ellipsis"}} align="right">
                {row.text}
              </TableCell>

              <TableCell align="right">
                {row.author}
              </TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={() => Delete(row.id)}>Удалить</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => navigate(`news/${row.id}`)}>Редактировать</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className= {AminStyle.divButton}>
     <Button variant="contained" color="success" onClick={()=> navigate('news/create')}>Создать новость</Button>
     <Button variant="outlined" onClick={() => navigate('/')} >Назад</Button>
    </div>
    </>)
}
export default UiNews