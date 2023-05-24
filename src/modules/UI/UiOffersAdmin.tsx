import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { OfferType } from '../Types/OfferType';
import React from 'react';
import Button from '@mui/material/Button';

const UiOffersAdmin: React.FC = ()=> {
    const [offers, setOffers] = useState<OfferType[]>()
    useEffect(()=> {
      loadFunction()
        
    })
    const loadFunction = async () => {
      try {
       const response = await axios.get<OfferType[]>('http://localhost:8080/assistance/all')
        setOffers(response.data)
     } catch (error) {
        
     }
    }
    
    return(<>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Имя</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Предложения</TableCell>
            <TableCell align="right">Удалить</TableCell>
            <TableCell align="right">Редактировать</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">
                 {
                    row.assistanceTasks.map((e)=> <p>{e},</p>)
                 }
          
              </TableCell>
              <TableCell align="right">
              {
                    row.subAssistanceList.map((e)=> <p>{e.name},</p>)
              }
              </TableCell>
              <TableCell align="right"><Button variant="outlined" color="error">Удалить</Button></TableCell>
              <TableCell align="right"><Button variant="contained" >Редактировать</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>)
}
export default UiOffersAdmin