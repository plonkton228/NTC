import { OfferChildType } from "./OfferType";

export interface OfferCreateType {
    name : string,
    assistanceTasks : Array<string>,
    description : string,
   

}
export interface OfferChildCreateType {
    assistanceId : string | undefined,
    name : string, 
    description : string,
    subAssistanceTasks : Array<string>
    cost :  number
}

export interface OfferUpdateType {
    name : string,
    assistanceTasks : Array<string>,
    description : string,
    assistanceInclude : Array<string>
}