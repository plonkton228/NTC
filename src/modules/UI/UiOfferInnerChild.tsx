import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import check from '../Images/offer/Check.png'
import stylesOffer from '../Styles/Offer.module.css'
import MainStyle from '../Styles/MainStyles.module.css'
import ServicesStyle from '../Styles/ServiceStyles.module.css'
import axios from 'axios'
import { OfferChildType } from "../Types/OfferType";
import NavBar from "../Lists/NavBar";
const UiOfferInnerChild: React.FC = ()=> {
    const id = useParams();
    const navigate = useNavigate();
    const [Offers, setOffer] = useState<OfferChildType | null>(
       null
    );
   useEffect(()=> {
    loadFunction()
     
   },[])

  const  loadFunction = async ()=> {
    try {
      console.log(id.id)
    const response = await  axios.get<OfferChildType>(`http://localhost:8080/assistance/subassistance/${id.id}`)
     setOffer(response.data)
    } catch (error) {
      
    }
  }
      
    return(<>
    <NavBar/>
     <div className= {MainStyle.BackGroundC}>
        
    </div>
    <div className= {stylesOffer.container}>
        <div style = {{paddingLeft: "40px", paddingRight: "40px",textAlign: 'center'}}>
         <h1 style={{textAlign: "start"}}>{Offers?.description} </h1>
        
          <div style={{textAlign: "start", fontSize: "22px"}}>
            <h1 >Что включает услуга ?</h1>
           {
            Offers?.subAssistanceTasks.map((item)=> <div data-testid = "subAssistanceTasks" className= {stylesOffer.infoDiv}> <img alt="" id = {stylesOffer.img1} src= {check} /> <p id = {stylesOffer.p1} style = {{fontSize: "18px"}}>{item}</p> </div>)
           }
          </div>
          <h1 style={{textAlign: "start"}}>Преимущество работы с нами:</h1>
          <div className= {stylesOffer.flexContainer}>
            <div >
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px"}}>Опыт работы более 10 лет</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1}  src= {check}/> <p style={{marginLeft: "20px"}}>Квалифицированные специалисты</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px"}}>Индивидуальный подход</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px"}}>Оптимизация расходов на содержание персонала</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px"}}>Бесплатные консультации</p></div>
            </div>
            <div id = {ServicesStyle.srvb}>
                <div className= {ServicesStyle.form}>
                    <div style = {{textAlign: "center"}}>
                     <p id= {ServicesStyle.p1}>Оставьте заявку прямо сейчас и получите план</p> <p id= {ServicesStyle.p1}>разработки документации для вашей</p> <p id= {ServicesStyle.p1}>организации и скидку 10%</p>
                    </div>
                
              <div style = {{marginTop: "20px"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                 <span id= {ServicesStyle.p1} style={{maxWidth: "80px", width : "100%"}}>Телефон:</span>
                 <input className= {ServicesStyle.inputs}/>
                </div>
                <div style={{display: "flex", alignItems: "center",marginTop: "25px"}}>
                 <span id= {ServicesStyle.p1} style={{maxWidth: "80px", width : "100%"}}>Email:</span>
                 <input className= {ServicesStyle.inputs}/>
                </div>
              </div>
              <p id= {ServicesStyle.p2} style={{marginTop : "20px"}}>Нажимая на кнопку “Оставить заявку”, я даю согласие на обработку персональных данных и соглашаюсь с Политикой конфиденциальности</p>
              <div className= {ServicesStyle.buttonContainer}>
               <button className= {ServicesStyle.buttonStyle}>Отправить заявку!</button>
              </div>
              
                </div>
         
          </div>
          </div>
        </div>
    </div> </>)
}
export default UiOfferInnerChild