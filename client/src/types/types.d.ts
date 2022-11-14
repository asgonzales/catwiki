export enum http {
    GET = 'GET',
    BASE_URL = 'http://localhost:3001'
}

//Breeds
export interface BreedImageInterface {
    breed:string
    page:number
}

export interface BreedNames {
    id:string
    name:string
}

export interface BreedDetail {
    id:string
    name:string
    weight:string
    temperament:string
    origin:string
    description:string
    life_span:string
    adaptability:number
    affection:number
    child:number
    dog:number
    energy:number
    health_issues:number
    intelligence:number
    social_needs:number
    image?:string
    wikipedia:string
}
export interface BreedState {
    names:BreedNames[]
    loadingNames:boolean
    detail:BreedDetail
    loadingDetail:boolean
    images:string[]
    loadingImages:boolean
    error: {
        name:string
        detail:string
        images:string
    }
}

//Categories
export interface CategorieNames {
    id:string
    name:string
    image:string
}

type image = {
    url: string
}
export interface CategorieState {
    names:CategorieNames[]
    loadingNames:boolean
    urls:image[]
    loadingUrls:boolean
    error: {
        names:string
        url:string
    }
}

export interface reqCategorieImages {
    id:string
    page:number
}