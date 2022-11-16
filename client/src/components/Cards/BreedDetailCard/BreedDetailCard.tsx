import { useEffect } from 'react';
import { BreedDetails } from '../../../types/types';
import style from './BreedDetailCard.module.css';



interface Props {
    breedDetail:BreedDetails
}

type stats = [string, number]


export default function BreedDetailCard ({breedDetail}:Props) {
    let stats:stats[] = []
    // useEffect(() => {
        if(breedDetail.stats) {
            stats = Object.entries(breedDetail.stats)
        }
    // }, [])
        const rating = (q:number) => {
            const quantity:JSX.Element[] = []
            for(let i = 0; i < q; i++) {
                quantity.push(<span className={style.rateSpan} > </span>)
            }
            return quantity
        }


    return (
        <div className={style.ContBreedDetailCard}>
            <div className={style.imgDiv}>
                <img src={breedDetail.image} alt={breedDetail.name} />
            </div>
            <div className={style.infoDiv}>
                <div className={style.staticInfoDiv}>
                    <h1>{breedDetail.name}</h1>
                    <a href={breedDetail.wikipedia} referrerPolicy='no-referrer' target='_blank'>{breedDetail.wikipedia}</a>
                    <p>{breedDetail.description}</p>
                    <p><span className={style.blackSpan} >life span: </span><span>{breedDetail.life_span}</span></p>
                    <p><span className={style.blackSpan} >Origin: </span><span>{breedDetail.origin}</span></p>
                    <p><span className={style.blackSpan} >Temperament: </span><span>{breedDetail.temperament}</span></p>
                    <p><span className={style.blackSpan} >Weight: </span><span>{breedDetail.weight}</span></p>
                </div>
                <div className={style.statsDiv}>
                    {
                        stats.map((el, index) => {
                            return (
                                <div key={index} className={style.singleStatDiv}>
                                    <span className={style.blackSpan} >{el[0]}: </span>
                                    <br/>
                                    
                                    {
                                        rating(el[1])
                                    } 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}