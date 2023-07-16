import ClientsSetyle from '../Styles/ClinetsStyle.module.css';
import {useEffect, useMemo, useState} from 'react';
import UiClients from '../UI/UiClients';
import { FileTip, FileType } from '../Types/FileType';
import { APIFiles } from '../../Helpers/APIFiles';
const Clients : React.FC = ()=> {
  const [way, setWay] = useState<FileType[]>([]);
  const API = new APIFiles();
  const load = async()=> {
    const response  =  await API.getFiles();
    setWay(response)
  }
  useEffect(()=> {
    load();
  },[])
  const documents  = useMemo((): FileType[]=> {
      return way.filter((a)=> a.type.includes(FileTip.CLIENTS))
  },[way])

    return(<>
       <div id = "section5" className= {ClientsSetyle.container}>
        <div style = {{paddingLeft: "40px", paddingRight: "40px"}}>
         <h1 className= {ClientsSetyle.h1dec}>НАШИ КЛИЕНТЫ</h1>
           <div className= {ClientsSetyle.innerClient}>
             {
               documents.map((element)=> <a key={element.id} target='blank' href= {element.resourceUrl}><UiClients way= {element.path}/></a> )
             }
           </div>
        </div>
       </div>
    </>)
}
export default Clients;