import  NewsStyle from '../Styles/NewsStyle.module.css';
const News : React.FC = ()=> {
    return(<>
       <div className= {NewsStyle.container}>
         <h1>НОВОСТИ</h1>
         <div style ={{height : "120px" ,paddingLeft: "40px", paddingRight: "40px"}}>
    
         </div>
       </div>
    </>)
}
export default News;