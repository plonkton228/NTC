import  FranStyle from '../Styles/FranStyle.module.css';
const Fran : React.FC = ()=> {
    return(<>
       <div className= {FranStyle.container}>
         <h1>ФРАНШИЗЫ</h1>
         <div style ={{height : "120px" ,paddingLeft: "40px", paddingRight: "40px"}}>
         </div>
       </div>
    </>)
}
export default Fran;