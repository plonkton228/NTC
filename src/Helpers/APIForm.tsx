import axios, { AxiosInstance } from "axios"
import { NewsType, innerNews, updateNews } from "../modules/Types/NewsType";
import { FileType, FileTypeRequest } from "../modules/Types/FileType";
import { AboutType } from "../modules/Types/AboutType";
import Cookies from "js-cookie";
import { FromType } from "../modules/Types/FormType";

export class APIForm {
    constructor(){
       this.instance = axios.create({
        baseURL: 'http://localhost:8080' ||  process.env.SERVE_URL,
        headers :{
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      
      }) 
      
    }
     
   async requestForm(request : FromType){
    try {
        await axios.post<AboutType>(process.env.SERVE_URL+`/subscriber/subscribe`, request);
  
    } catch (error) {
        alert("Введены некорректные данные!")
    }
      
   }



    instance: AxiosInstance;

}