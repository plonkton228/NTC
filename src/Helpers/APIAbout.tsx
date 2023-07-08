import axios, { AxiosInstance } from "axios"
import { NewsType, innerNews, updateNews } from "../modules/Types/NewsType";
import { FileType, FileTypeRequest } from "../modules/Types/FileType";
import { AboutType } from "../modules/Types/AboutType";
import Cookies from "js-cookie";


console.log(process.env.REACT_APP_API_URL)
export class APIAbout {
    constructor(){
       this.instance = axios.create({
        baseURL: 'http://localhost:8080' ||  process.env.REACT_APP_API_URL,
        headers :{
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      
      }) 
      
    }
     
   async getAboutUs(){
    try {
        const response = await axios.get<AboutType>(process.env.REACT_APP_API_URL+`/document`);
      return response.data
    } catch (error) {
        alert(error)
    }
      
   }

   async editAboutUs(about : FormData){
    try {
         await this.instance.patch<AboutType>('/document', about);
    } catch (error) {
        return String(alert(error))
    }
    

 }

    instance: AxiosInstance;

}