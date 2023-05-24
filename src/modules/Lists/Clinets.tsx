import ClientsSetyle from '../Styles/ClinetsStyle.module.css';
import {useState} from 'react';
import client1 from '../Images/Clients/Client1.png'
import client2 from '../Images/Clients/Client2.png'
import client3 from '../Images/Clients/Client3.png'
import client4 from '../Images/Clients/Client4.png'
import client5 from '../Images/Clients/Client5.png'
import client6 from '../Images/Clients/Client6.png'
import UiClients from '../UI/UiClients';
const Clients : React.FC = ()=> {
  const [way, setWay] = useState([client1,client2 , client3,client4,client5,client6]);
    return(<>
       <div className= {ClientsSetyle.container}>
        <div style = {{paddingLeft: "40px", paddingRight: "40px"}}>
         <h1>НАШИ КЛИЕНТЫ</h1>
           <div className= {ClientsSetyle.innerClient}>
             {
               way.map((element)=> <UiClients way= {element}/>)
             }

           </div>
        </div>
       </div>
    </>)
}
export default Clients;