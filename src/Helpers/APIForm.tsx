import axios, { AxiosInstance } from "axios"
import { AboutType } from "../modules/Types/AboutType";
import Cookies from "js-cookie";
import { FromType } from "../modules/Types/FormType";

export class APIForm {
    constructor(){
       this.instance = axios.create({
        baseURL: '' ||  process.env.REACT_APP_API_URL,
        headers :{
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      
      }) 
      
    }
     
   async requestForm(request : FromType){
    try {
        await axios.post<AboutType>(process.env.REACT_APP_API_URL+`/subscriber/subscribe`, request);
  
    } catch (error) {
        alert("Введены некорректные данные!")
    }
      
   }



    instance: AxiosInstance;

}