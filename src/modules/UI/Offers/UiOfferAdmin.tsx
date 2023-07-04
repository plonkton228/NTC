import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { OfferType } from '../../Types/OfferType';
import { Link } from 'react-router-dom';
import AminStyle from '../../Styles/AdminPanel.module.css'
interface UiOfferAdminTemplate  {
    offers : OfferType[] | undefined,
    setOffers : (offers : OfferType[])=> void,
    navigate : (way : string)=> void,
    deleteFunction : (id : string) => void

}
const UiOfferAdmin: React.FC<UiOfferAdminTemplate> = ({offers, setOffers, navigate, deleteFunction})=> {
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
                    row.assistanceTasks.map((e, index)=> <p key={index}>{e},</p>)
                 }
          
              </TableCell>
              <TableCell align="right" >
              {
                    row.subAssistanceList.map((e)=> <Link key={e.id} to = {`offer/subofferUpdateDelete/${e.id}`}>{e.name},</Link>) 
                    
              }
              <Button variant="contained" onClick={() => navigate(`offer/${row.id}/subofferCreate`)}>Добавить подусулгу</Button>
              </TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={() => deleteFunction(row.id)}>Удалить</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => navigate(`offer/${row.id}`)}>Редактировать</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className= {AminStyle.divButton}>
     <Button variant="contained" color="success" onClick={()=> navigate('offer')}>Создать услугу</Button>
     <Button variant="outlined" onClick={() => navigate('/')} >Назад</Button>
    </div>
    </>)
}
export default UiOfferAdmin