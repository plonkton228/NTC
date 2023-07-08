import StyleAbout from "../Styles/AboutStyle.module.css"
import img from "../Images/About/Derector.png";
import { useAppSelector } from "../../hooks/redux";
import { stat } from "fs";
import { useEffect, useState } from "react";
import { AboutType } from "../Types/AboutType";
import { APIAbout } from "../../Helpers/APIAbout";
const About : React.FC = ()=> {
  const API = new APIAbout();
  const {sizeP, marginTop, size} = useAppSelector(state => state.visuallyReducer)
  const [about, setAbout] = useState<AboutType>({text: "", url : "", aboutUs : ""})
  async function load (){
    const response = await API.getAboutUs()
     if(response){
      setAbout(response)
     }
  }
  useEffect(()=> {
         load()  
  },[])
 return(<>
   <div id = "section3" className= {StyleAbout.container}>
    <div style={ {paddingLeft: "40px", paddingRight: "40px"}}>
    <h1  className= {StyleAbout.h1dec}>О НАС</h1>
       <div className= {StyleAbout.innerAbout}>
        <div className= {StyleAbout.imgContainer}>
            <img className= {StyleAbout.imgdec} src= {about.url}/>
           
            <p style={{fontSize: `${size}px`, fontWeight : "500" , marginTop: "15px"}} id= {StyleAbout.img1}>{about.text}</p>
        </div>
        <div className= {StyleAbout.AboutText}>
          <p style={{maxWidth : "1000px", whiteSpace : "pre-line"}}>{about.aboutUs}</p>
        </div>
       </div>
    </div>
     
   </div>
 </>)
}
export default About