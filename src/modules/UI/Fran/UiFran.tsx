import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AdminStyle  from '../../Styles/AdminPanel.module.css';
import { APIFiles } from "../../../Helpers/APIFiles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AboutType } from "../../Types/AboutType";
import { APIAbout } from "../../../Helpers/APIAbout";
import { FranType } from "../../Types/FranType";
import { APIFran } from "../../../Helpers/APIFran";

const FranUi: React.FC = ()=> {
    const navigate = useNavigate();
    const [fran, setFran] = useState<FranType>({content: ""})
    let API = new APIFran();
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Контент</TableCell>
            <TableCell align="right">Редактировать</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" >
                {fran.content}
              </TableCell>
              <TableCell align="right" >
               <Button variant="outlined"  onClick={() => navigate('franchises')}>Редактировать</Button>
              </TableCell>
             </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div className= {AdminStyle.divButton}>
     <Button variant="outlined" onClick={() => navigate('/')} >Назад</Button>
    </div>
    </>)
}
export default FranUi