

//Breeds
export interface BreedImageInterface {
    breed:string
    page:number
}

export interface BreedNames {
    id:string
    name:string
}



interface BreedStats {
    adaptability:number
    affection:number
    child:number
    dog:number
    intelligence:number
    health_issues:number
    social_needs:number
    energy:number

}

export interface BreedDetails {
    id:string
    name:string
    description:string
    weight:string
    temperament:string
    origin:string
    life_span:string
    stats:BreedStats
    image?:string
    wikipedia:string
}

export type urls = {
    url:string
}
export interface BreedState {
    names:BreedNames[]
    loadingNames:boolean
    detail:BreedDetail
    loadingDetail:boolean
    images:urls[]
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

//Cats
export interface Cats {
    image:string
    loadingImage:boolean
    error: {
        image:string
    }
}