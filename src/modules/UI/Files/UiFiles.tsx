import { useNavigate, useParams } from "react-router-dom";
import { APINews } from "../../../Helpers/APInews";
import { useEffect, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { updateNews } from "../../Types/NewsType";
import { APIFiles } from "../../../Helpers/APIFiles";
import { FileType } from "../../Types/FileType";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IndexKind } from "typescript";
const UiFiles: React.FC = ()=> {
    const navigate = useNavigate();
    const [files, setFiles] = useState<FileType[]>([])
    let API = new APIFiles();
    async function load (){
       const response =  await API.getFiles()
       setFiles(response);
    }
    const Delete = async(id : string)=> {
        await API.deleteFile(id);
       setTimeout(()=> {
        load();
       }, 500) 
    }
    useEffect(()=> {
           load()  
    },[])

    return(<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">Путь</TableCell>
            <TableCell align="right">тип</TableCell>
            <TableCell align="right">Ссылка</TableCell>
            <TableCell align="right">Редактировать</TableCell>
            <TableCell align="right">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files?.map((row : FileType, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" >
                {row.id}
              </TableCell>
              <TableCell align="right" >
                {row.path}
              </TableCell>
              <TableCell align="right" >
                {row.type}
              </TableCell>
              <TableCell align="right" >
                {row.resourceUrl}
              </TableCell>
              <TableCell align="right" >
              <Button variant="outlined" onClick={() => navigate(`file/${row.id}/update`)} >Редактировать</Button>
              </TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={() => Delete(row.id)}>Удалить</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className= {AdminStyle.divButton}>
     <Button variant="contained" color="success" onClick={()=> navigate('file/create')}>Загрузить файл</Button>
     <Button variant="outlined" onClick={() => navigate('/')} >Назад</Button>
    </div>
    </>)
}
export default UiFiles