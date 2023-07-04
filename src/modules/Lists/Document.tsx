import DocumentStyle from '../Styles/DocumentStyle.module.css'
import document1 from '../Images/documents/document1.png'
import document2 from '../Images/documents/document2.png'
import document3 from '../Images/documents/document3.png'
import { useEffect, useMemo, useState } from 'react'
import UiDocument from '../UI/UiDocument'
import { APIFiles } from '../../Helpers/APIFiles'
import { FileTip, FileType } from '../Types/FileType'
const Document : React.FC = ()=> {
  
 let doc: string = '../Images/documents/document2.png';
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
      return way.filter((a)=> a.type.includes(FileTip.DOCUMENT))
  },[way])

    return(<>
      <div id = "section4" className= {DocumentStyle.container}>
        <div style={{paddingLeft: "40px", paddingRight: "40px"}}>
          <h1 className= {DocumentStyle.h1dec}>РАЗРЕШИТЕЛЬНЫЕ ДОКУМЕНТЫ</h1>
          <div className= {DocumentStyle.DocumentInner} >
            {
               documents.map((element)=> <a key={element.id} target='blank' href={element.resourceUrl}> <UiDocument way = {element.path}/> </a> )
            }
          </div>
        </div>
          
      </div>
    </>)
}
export default Document;