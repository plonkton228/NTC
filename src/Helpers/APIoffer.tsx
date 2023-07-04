import axios, { AxiosInstance } from "axios"
import { OfferChildCreateType, OfferCreateType, OfferUpdateType } from "../modules/Types/OfferCreateType"
import { OfferChildType, OfferType } from "../modules/Types/OfferType"
import Cookies from "js-cookie"

export class APIOffer {
    constructor(){
       this.instance = axios.create({
        baseURL: 'http://localhost:8080' || process.env.SERVE_URL,
        headers :{
          Authorization : `Bearer ${Cookies.get('token')}`
        }
        
      })
      
    }
    async getAllOffers (){
      const response = await axios.get<OfferType[]>(process.env.SERVE_URL+'/assistance/all')

      return response
    }
    async createOffer(offer : OfferCreateType){
      try {
        await this.instance.post('/assistance/create', offer)
      } catch (error) { 
        return String(error)
      }
        
     
    }

     async getOfferById  (id : string | undefined)  {
      try {
        const response = await  axios.get<OfferUpdateType>(process.env.SERVE_URL+`/assistance/${id}`)
        return response
      } catch (error) {
        
      }
      
      
    }
    async UpDateOffer(id : string | undefined , offer : OfferCreateType){
      try {
       await  this.instance.patch(`/assistance/${id}/edit`, offer)
      } catch (error) {
        return String(error)
      }
     
    }

    async DeleteOffer(id : string| undefined) {
      try {
       await  this.instance.delete(`/assistance/${id}`)
      } catch (error) {
        return String(error)
      }
    }



    async createSubOffers(subOffer : OfferChildCreateType){
      try {
           await this.instance.post('/assistance/subassistance/create', subOffer);
      } catch (error) {
        return String(error)
      }
    }

    async getSubOffer(id: string | undefined) {
      try {
        const data =  await axios.get<OfferChildCreateType>(process.env.SERVE_URL+`/assistance/subassistance/${id}`);
        return data.data;
      } catch (error) {
        alert(error)
      }
    }

    async UpdateSubOffer(subOffer : OfferChildCreateType, id: string| undefined){
      try {
        await this.instance.patch(`/assistance/subassistance/${id}/edit`, subOffer);
      } catch (error) {
        return String(error)
      }
    }

    async DeleteSubOffer(id : string| undefined) {
      try {
        await this.instance.delete(`/assistance/subassistance/${id}`)
      } catch (error) {
        return String(error)
      }
    }

    instance: AxiosInstance;
    

}