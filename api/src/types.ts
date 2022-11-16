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

export interface Breed {
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
export type BreedNames = Pick<Breed, 'id' | 'name'>

export interface Image {
    url:string;
}

export interface Categories {
    id:number
    name:string
    image?:string
}