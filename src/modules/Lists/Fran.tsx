import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import  FranStyle from '../Styles/FranStyle.module.css';
import { FranType } from '../Types/FranType';
import { APIFran } from '../../Helpers/APIFran';
const Fran : React.FC = ()=> {
  const API = new APIFran
  const {paddingFran} = useAppSelector(state => state.visuallyReducer)
  const [fran, setFran] = useState<FranType | undefined>({content: ""})
  const load = async()=> {
    const response =  await API.getFran();
    setFran(response)
  }
  useEffect(()=>{
    load()
  },[])
    return(<>
       <div id = "section7" style={{paddingTop: paddingFran}} className= {FranStyle.container}>
         <h1 style={{fontSize: "30xp"}}>ФРАНШИЗЫ</h1>
         <div style ={{height : "120px" ,paddingLeft: "40px", paddingRight: "40px"}}>
          {fran?.content}
         </div>
       </div>
    </>)
}
export default Fran;