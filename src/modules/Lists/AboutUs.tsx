import StyleAbout from "../Styles/AboutStyle.module.css"
import img from "../Images/About/Derector.png";
import { useAppSelector } from "../../hooks/redux";
import { stat } from "fs";
const About : React.FC = ()=> {
  
 return(<>
   <div className= {StyleAbout.container}>
    <div style={ {paddingLeft: "40px", paddingRight: "40px"}}>
    <h1>О НАС</h1>
       <div className= {StyleAbout.innerAbout}>
        <div className= {StyleAbout.imgContainer}>
            <img className= {StyleAbout.imgdec} src= {img}/>
           
            <p id= {StyleAbout.img1}>Фрезе Татьяна Юрьевна, директор НТЦ 
«Промышленная и экологическая безопасность» ТГУ</p>
        </div>
        <div className= {StyleAbout.AboutText}>
            <p >
            С 2008 года профессионально работем в сфере консалтинга, аутсорсинга и обучения</p>
            <p > по вопросам охраны труда, пожарной, экологической безопасности, ГО и ЧС. Наши</p>
             клиенты – организации и индивидуальные предприниматели всех организационно-<p>
            правовых форм, а также физические лица.</p>

            <p> Команда центра – профессионалы с опытом работы от 10 лет.</p>
            <p>Мы предлагаем более 30 видов профессионального обучения.</p>

            <p style={{marginTop: "20px"}}>Наша миссия – эффективная поддержка бизнеса и оптимизация расходов</p>
            <p>на поддержание должного уровня безопасности.
            </p>
        </div>
       </div>
    </div>
     
   </div>
 </>)
}
export default About