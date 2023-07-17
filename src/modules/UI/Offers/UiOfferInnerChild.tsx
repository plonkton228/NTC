import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import check from '../../Images/offer/Check.png'
import stylesOffer from '../../Styles/Offer.module.css'
import MainStyle from '../../Styles/MainStyles.module.css'
import ServicesStyle from '../../Styles/ServiceStyles.module.css'
import axios from 'axios'
import { OfferChildType } from "../../Types/OfferType";
import NavBar from "../../Lists/NavBar";
import { useAppSelector } from "../../../hooks/redux";
import { FromType } from "../../Types/FormType";
import { APIForm } from "../../../Helpers/APIForm";
const UiOfferInnerChild: React.FC = ()=> {
    const id = useParams();
    const navigate = useNavigate();
    const {sizeP, size, paddingTop, paddingTopInner} = useAppSelector(state => state.visuallyReducer)
    const [Offers, setOffer] = useState<OfferChildType | null>(
       null
    );
    const [form, setForm] = useState<FromType>({email: "", fio : ""});
    const [heigth, setHeight] = useState<string>()
    const API = new APIForm();
   useEffect(()=> {
    loadFunction()
    if(window.innerWidth <= 1000){
      setHeight("%")
  }else {
   setHeight("vh")
  }
   },[])

  const  loadFunction = async ()=> {
    try {
    const response = await  axios.get<OfferChildType>(process.env.REACT_APP_API_URL + `/assistance/subassistance/${id.id}`)
     setOffer(response.data)
    } catch (error) {
      
    }
  }
  window.addEventListener('resize', ()=> {
    if(window.innerWidth <= 1000){
        setHeight("%")
    }else {
     setHeight("vh")
    }
  })
    return(<>
    <div style={{fontSize : `${size}px`}}>
    <NavBar/>
    </div>
     <div className= {MainStyle.BackGroundC}>
        
    </div>
    <div style={{paddingBottom : "40px"}} className= {stylesOffer.container}>
        <div style = {{paddingLeft: "40px", paddingRight: "40px",textAlign: 'center', paddingTop : `${paddingTopInner}px`}}>
        <div onClick={()=> navigate(-1)} style={{display: "flex", alignItems : "center"}}>
            <div className= {stylesOffer.offerArrow}></div>
            <p style = {{marginLeft: "4px" , fontSize: `${sizeP}px`}}>Назад</p>
        </div>
         <h1 style={{textAlign: "start"}}>{Offers?.description} </h1>
        
          <div style={{textAlign: "start", fontSize: "22px"}}>
            <h1 >Что включает услуга ?</h1>
           {
            Offers?.subAssistanceTasks.map((item, index)=> <div key={index} style={{ marginTop: "15px"}} data-testid = "subAssistanceTasks" className= {stylesOffer.infoDiv}> <img alt="" id = {stylesOffer.img1} src= {check} /> <p id = {stylesOffer.p1} style = {{fontSize: `${sizeP}px`,fontWeight: "700"}}>{item}</p> </div>)
           }
          </div>
          <h1 style={{textAlign: "start"}}>Преимущество работы с нами:</h1>
          <div className= {stylesOffer.flexContainer}>
            <div >
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px", fontSize: `${sizeP}px `,fontWeight: "700"}}>Опыт работы более 10 лет</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1}  src= {check}/> <p style={{marginLeft: "20px", fontSize: `${sizeP}px`,fontWeight: "700"}}>Квалифицированные специалисты</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px", fontSize: `${sizeP}px`,fontWeight: "700"}}>Индивидуальный подход</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px", fontSize: `${sizeP}px`,fontWeight: "700"}}>Оптимизация расходов на содержание персонала</p></div>
                <div style={{display: "flex", fontSize: "18px", fontWeight: '500',marginBottom: "20px"}}><img alt="" id = {stylesOffer.img1} src= {check}/> <p style={{marginLeft: "20px", fontSize: `${sizeP}px`,fontWeight: "700"}}>Бесплатные консультации</p></div>
            </div>
            <div id = {ServicesStyle.srvb}>
            <div className= {ServicesStyle.form}>
                    <div style = {{textAlign: "center"}}>
                     <p style={{fontSize: `${size}px`}} id= {ServicesStyle.p1}>Хотите заказать услугу?</p> <p style={{fontSize: `${size}px`}} id= {ServicesStyle.p1}>Заполните форму и мы свяжемся с вами</p> 
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
    </div> </>)
}
export default UiOfferInnerChild