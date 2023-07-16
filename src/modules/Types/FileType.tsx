export enum FileTip {
    DOCUMENT = "document",
    CLIENTS = "clients"
}

export interface FileType {
    id : string,
    path : string,
    type : FileTip,
    resourceUrl : string,
}


export interface FileTypeRequest {
    type : FileTip,
    resourceUrl : string,

}