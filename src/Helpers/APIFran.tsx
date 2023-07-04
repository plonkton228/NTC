import axios, { AxiosInstance } from "axios"
import { NewsType, innerNews, updateNews } from "../modules/Types/NewsType";
import { FileType, FileTypeRequest } from "../modules/Types/FileType";
import { AboutType } from "../modules/Types/AboutType";
import Cookies from "js-cookie";
import { FranType } from "../modules/Types/FranType";

export class APIFran {
    constructor(){
       this.instance = axios.create({
        baseURL: 'http://localhost:8080' || process.env.SERVE_URL,
        headers :{
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      
      }) 
      
    }
     
   async getFran(){
    try {
        const response = await axios.get<FranType>(process.env.SERVE_URL+'/franchises');
      return response.data
    } catch (error) {
        alert(error)
    }
      
   }

   async editFran(about : FranType){
    try {
         await this.instance.patch('/franchises', about);
    } catch (error) {
        return String(alert(error))
    }
    

 }

    instance: AxiosInstance;

}