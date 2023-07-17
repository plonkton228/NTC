import ServicesStyle from '../Styles/ServiceStyles.module.css';
import img  from '../Images/Services/Vec.png'
import img1 from '../Images/Services/Galka.png'
import { useAppSelector } from '../../hooks/redux';
import { useState } from 'react';
import { FromType } from '../Types/FormType';
import { APIForm } from '../../Helpers/APIForm';
const Services: React.FC = ()=> {
    const {sizeP, marginTop, size} = useAppSelector(state => state.visuallyReducer)
    const [form, setForm] = useState<FromType>({email: "", fio : ""});
    const API = new APIForm();
 return (<>
     <div id = "section1" style={{paddingTop : `${marginTop}px`}} className= {ServicesStyle.container}>
        <div style={{paddingLeft : "40px", paddingRight: "40px"}}>
        <h1><p>Услуги в области охраны труда, пожарной</p> <p>безопасности, ГО и ЧС, экологии и обучение</p> сотрудников</h1>
         <div className= {ServicesStyle.innerContainer}>
            <div className= {ServicesStyle.fixContainer}>
                <img alt="" src= {img} ></img>
                <p className = {ServicesStyle.pStyle}>оптимизируем затраты</p>
            </div>
            <div className= {ServicesStyle.fixContainer}>
                <img alt="" src= {img} ></img>
                <p className = {ServicesStyle.pStyle}>10 лет опыта работы</p>
            </div>
            <div className= {ServicesStyle.fixContainer}>
                <img alt="" src= {img} ></img>
                <p className = {ServicesStyle.pStyle}>подготовим к проверке</p>
            </div>
            <div className= {ServicesStyle.fixContainer}>
                <img alt="" src= {img} ></img>
                <p className = {ServicesStyle.pStyle}>консультируем бесплатно</p>
            </div>
         </div>
         <div className= {ServicesStyle.formContainer}>
               <div id = {ServicesStyle.idform}>
                   <div className= {ServicesStyle.innerFormText}>
                    <img alt="" className= {ServicesStyle.imgs} src = {img1}></img>
                    <p style={{fontSize: `${sizeP}px`}} className= {ServicesStyle.ps}>Разрабатываем документы в соответствие с действующим законодательством</p>
                   </div>
                   <div className= {ServicesStyle.innerFormText}>
                    <img alt="" className= {ServicesStyle.imgs} src = {img1}></img>
                    <p style={{fontSize: `${sizeP}px`}} className= {ServicesStyle.ps}>Готовые решения для широкого профиля организацией</p>
                   </div>
                   <div className= {ServicesStyle.innerFormText}>
                    <img alt="" className= {ServicesStyle.imgs} src = {img1}></img>
                    <p style={{fontSize: `${sizeP}px`}} className= {ServicesStyle.ps}>Проводим аудит систем управления безопасностью организации</p>
                   </div>
                   <div className= {ServicesStyle.innerFormText}>
                    <img alt="" className= {ServicesStyle.imgs} src = {img1}></img>
                    <p style={{fontSize: `${sizeP}px`}} className= {ServicesStyle.ps}>Выполняем оценку профессиональных рисков</p>
                   </div>
               </div>
            <div id = {ServicesStyle.srvb}>
                <div className= {ServicesStyle.form}>
                    <div style = {{textAlign: "center"}}>
                     <p style={{fontSize: `${size}px`}} id= {ServicesStyle.p1}>Оставьте заявку прямо сейчас и получите план</p> <p style={{fontSize: `${size}px`}} id= {ServicesStyle.p1}>разработки документации для вашей</p> <p style={{fontSize: `${size}px`}} id= {ServicesStyle.p1}>организации и скидку 10%</p>
                    </div>
                
              <div style = {{marginTop: "20px"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                 <span id= {ServicesStyle.p1} style={{maxWidth: "80px", width : "100%", fontSize: `${size}px`}}>ФИО:</span>
                 <input value={form.fio} onChange={(e)=> setForm({...form ,fio : e.target.value})} className= {ServicesStyle.inputs}/>
                </div>
                <div style={{display: "flex", alignItems: "center",marginTop: "25px"}}>
                 <span  id= {ServicesStyle.p1} style={{maxWidth: "80px", width : "100%", fontSize: `${size}px`}}>Email:</span>
                 <input value={form.email}  onChange={(e)=> setForm({...form ,email : e.target.value})} className= {ServicesStyle.inputs}/>
                </div>
              </div>
              <p  id= {ServicesStyle.p2} style={{marginTop : "20px" , fontSize: `${size}px`}}>Нажимая на кнопку “Оставить заявку”, я даю согласие на обработку персональных данных и соглашаюсь с Политикой конфиденциальности</p>
              <div className= {ServicesStyle.buttonContainer}>
               <button className= {ServicesStyle.buttonStyle} onClick={()=> API.requestForm(form)}>Отправить заявку!</button>
              </div>
              
                </div>
         
          </div>
         </div>
       
        </div>
       
     </div>
 
 </>)
}
export default Services;