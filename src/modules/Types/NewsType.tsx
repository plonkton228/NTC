export interface innerNews {
    id : string,
    title: string,
    text: string,
    author: string,
    newsLinks : Array<string>
}

export interface NewsType {
    content : innerNews[]
}


export interface updateNews {
    title: string,
    text: string,
    author: string,
    newsLinks : Array<string>
}
