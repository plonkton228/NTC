import DocumentStyle from '../Styles/DocumentStyle.module.css'
import document1 from '../Images/documents/document1.png'
import document2 from '../Images/documents/document2.png'
import document3 from '../Images/documents/document3.png'
import { useState } from 'react'
import UiDocument from '../UI/UiDocument'
const Document : React.FC = ()=> {
  
 let doc: string = '../Images/documents/document2.png';
  const [way, setWay] = useState([document1,document2 , document3]);
    return(<>
      <div className= {DocumentStyle.container}>
        <div style={{paddingLeft: "40px", paddingRight: "40px"}}>
          <h1>РАЗРЕШИТЕЛЬНЫЕ ДОКУМЕНТЫ</h1>
          <div className= {DocumentStyle.DocumentInner} >
            {
               way.map((element)=> <UiDocument way= {element}/>)
            }
          </div>
        </div>
          
      </div>
    </>)
}
export default Document;