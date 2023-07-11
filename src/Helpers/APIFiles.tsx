import axios, { AxiosInstance } from "axios"
import { NewsType, innerNews, updateNews } from "../modules/Types/NewsType";
import { FileType, FileTypeRequest } from "../modules/Types/FileType";
import Cookies from "js-cookie";

export class APIFiles {
    constructor(){
       this.instance = axios.create({
        baseURL: '' || process.env.REACT_APP_API_URL,
        headers :{
            Authorization : `Bearer ${Cookies.get('token')}`
          }
      
      }) 
      
    }
     
   async getFiles(){
      const response = await axios.get<FileType[]>(process.env.REACT_APP_API_URL+'/files');
      return response.data
   }


   async getFilesByName(id : string | undefined){
    try {
        const response = await axios.get<FileTypeRequest>(process.env.REACT_APP_API_URL+`/files/${id}`);
        return response.data
    } catch (error) {
        alert(error)
    }
   }

   async getFilesById(id : string | undefined){
    try {
        const response = await axios.get<FileTypeRequest>(process.env.REACT_APP_API_URL+`/files/${id}/info`);
        return response.data
    } catch (error) {
        alert(error)
    }
   }

   async deleteFile(id : string){
        try {
            await this.instance.delete(`/files/${id}`)
        } catch (error) {
            alert(error)
        }
       
   }

   async addFile(file : FormData) {
    try {
        console.log(file);
        await this.instance.post('/files', file);
    } catch (error) {
        return String(error)
    }
   }

   async updateFile(file : FileTypeRequest, id : string | undefined){
    try {
        await this.instance.patch(`files/${id}/update`, file)
    } catch (error) {
        return String(error)
    }
   }
    instance: AxiosInstance;

}