export interface Breed {
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
export type BreedNames = Pick<Breed, 'id' | 'name'>

export interface Image {
    url:string;
}

export interface Categories {
    id:number
    name:string
    image?:string
}