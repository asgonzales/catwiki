import { Router, Request, Response } from "express";
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_PSPRB8KlChPA0V5YVetw4mqMLz863O16079Ng4QPWsIiSw7BZ29eGgHZR8flG1gZ';

interface Breed {
    id:string;
    name:string;
    weight:string;
    temperament:string;
    origin:string;
    description:string;
    life_span:string;
    adaptability:number;
    affection:number;
    child:number;
    dog:number;
    energy:number;
    health_issues:number;
    intelligence:number;
    social_needs:number;
    image?:string
    wikipedia:string;
}
interface BreedsNames {
    id:string;
    name:string;
}
interface Image {
    url:string;
}



const catRoutes = Router();


//Obtener una imagen aleatoria
catRoutes.get('/image', async (req:Request, res:Response) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/images/search',
        });
        res.status(200).json(response.data);
    } catch (err:any) {
        res.status(400).json({error: err.message})
    }
})

//Obtener las razas
catRoutes.get('/breeds', async (req:Request, res:Response) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/breeds'
        })

        const breeds:BreedsNames[] = response.data.map( (element:any):BreedsNames => {
            return {
                id:element.id,
                name: element.name
            }
        })
        res.status(200).json(breeds)
    } catch (err:any) {
        res.status(400).json({error: err.message})
    }
})

//Obtener detalles de una raza
catRoutes.get('/breed/:breedId', async (req:Request, res:Response) => {
    try {
        const { breedId } = req.params
        const response = await axios({
            method: 'GET',
            url: `https://api.thecatapi.com/v1/breeds/${breedId}`
        })
        const details:Breed = {
                id:response.data.id,
                name: response.data.name,
                weight: response.data.weight.metric,
                temperament: response.data.temperament,
                origin: response.data.origin,
                description: response.data.description,
                life_span: response.data.life_span,
                adaptability: response.data.adaptability,
                affection: response.data.affection_level,
                child: response.data.child_friendly,
                dog: response.data.dog_friendly,
                energy: response.data.energy_level,
                health_issues: response.data.health_issues,
                intelligence: response.data.intelligence,
                social_needs: response.data.social_needs,
                image: response.data.image?.url,
                wikipedia: response.data.wikipedia_url
        }
        res.status(200).json(details)
    } catch (err:any) {
        res.status(400).json({error: err.message})
    }
})

//Obtener imagenes de una raza
catRoutes.get('/image/:breed', async (req:Request, res:Response) => {
    try {
        const { breed } = req.params;
        const { page } = req.query;
        const response = await axios({
            method:'GET',
            url: `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=3&order=asc&page=${page || 1}`
        })
        const images:Image[] = response.data.map((element:any):Image => {
            return {
                url: element.url
            }
        })
        res.status(200).json(images)
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
})

//Obtener categorias
catRoutes.get('/categories', async (req:Request, res:Response) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/categories'
        })
        res.status(200).json(response.data)
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
})

//Obtener imagenes de una categoria
catRoutes.get('/categorie/:id',async (req:Request, res:Response) => {
    try {
        const { id } = req.params
        const { page } = req.query
        const response = await axios({
            method: 'GET',
            url: `https://api.thecatapi.com/v1/images/search?category_ids=${id}&limit=10&order=asc&page=${page || 1}`
        })
        const images:Image[] = response.data.map((element:any):Image => {
            return {
                url: element.url
            }
        })
        res.status(200).json(images)
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
})
export default catRoutes;