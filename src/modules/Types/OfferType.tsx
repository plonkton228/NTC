export interface OfferChildType{
   id: string | undefined,
   name : string, 
   description : string,
   subAssistanceTasks : Array<string>,
   cost :  number
}


export interface OfferType  {
    id : string,
    name : string,
    assistanceTasks : Array<string>,
    subAssistanceList : Array<OfferChildType>


}

