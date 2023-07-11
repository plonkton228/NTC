import axios, { AxiosInstance } from "axios"
import { NewsType, innerNews, updateNews } from "../modules/Types/NewsType";
import Cookies from "js-cookie";

export class APINews {
    constructor(){
       this.instance = axios.create({
        baseURL: '' || process.env.REACT_APP_API_URL,
        headers :{
            Authorization : `Bearer ${Cookies.get('token')}`
          }
      
      }) 
      
    }
     
   async getNews(){
      const response = await axios.get<NewsType>(process.env.REACT_APP_API_URL+'/news/all', { params : {
        size: 10,
        page: 0,
      }});
      return response.data
   }

   async editNews(id : string | undefined , news : updateNews){
    try {
        await this.instance.patch<updateNews>(`/${id}/edit`, news);
    } catch (error) {
        return String(error)
    }
   }

   async getNewsById(id : string | undefined){
    try {
        const response = await axios.get<innerNews>(process.env.REACT_APP_API_URL+`/news/${id}`);
        return response.data
    } catch (error) {
        alert(error)
    }
   }

   async deleteNews(id : string | undefined){
    try {
        await this.instance.delete(`/${id}`)
    } catch (error) {
        return String(error)
    }
       
   }

   async addNews(news : innerNews) {
    try {
        await this.instance.post('/news/create', news);
    } catch (error) {
        return String(error)
    }
   }
    instance: AxiosInstance;

}