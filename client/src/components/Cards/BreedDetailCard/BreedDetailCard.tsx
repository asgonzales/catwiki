import { useEffect } from 'react';
import { BreedDetails } from '../../../types/types';
import style from './BreedDetailCard.module.css';
import catIcon from '../../../media/Icons/CatHead.png';
import emptyCatIcon from '../../../media/Icons/CatHeadEmpty.png';


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
            for(let i = 0; i < 5; i++) {
                if( i < q) quantity.push(<img src={catIcon} className={style.catIcon} />)
                else quantity.push(<img src={emptyCatIcon} className={style.catIcon} />)
            }
            return quantity
        }


    return (
        <div className={style.ContBreedDetailCard}>
            {/* <button onClick={() => console.log(breedDetail)}>ce</button> */}
            <div className={style.imgDiv}>
                <img src={breedDetail.image} alt={breedDetail.name} />
            </div>
            <div className={style.infoDiv}>
                <div className={style.staticInfoDiv}>
                    <h1>{breedDetail.name}</h1>
                    <a href={breedDetail.wikipedia} referrerPolicy='no-referrer' target='_blank'>{breedDetail.wikipedia}</a>
                    <p>{breedDetail.description}</p>
                    <p><span className={style.blackSpan} >Life span: </span><span>{breedDetail.life_span} years.</span></p>
                    <p><span className={style.blackSpan} >Origin: </span><span>{breedDetail.origin}.</span></p>
                    <p><span className={style.blackSpan} >Temperament: </span><span>{breedDetail.temperament}.</span></p>
                    <p><span className={style.blackSpan} >Weight: </span><span>{breedDetail.weight} Kg.</span></p>
                </div>
                <div className={style.statsDiv}>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Adaptability: </span>
                        <br />
                        {
                            rating(breedDetail.stats.adaptability)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Affection: </span>
                        <br />
                        {
                            rating(breedDetail.stats.affection)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Child friendly: </span>
                        <br />
                        {
                            rating(breedDetail.stats.child)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Dog friendly: </span>
                        <br />
                        {
                            rating(breedDetail.stats.dog)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Intelligence: </span>
                        <br />
                        {
                            rating(breedDetail.stats.intelligence)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Health Issues: </span>
                        <br />
                        {
                            rating(breedDetail.stats.health_issues)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Social needs: </span>
                        <br />
                        {
                            rating(breedDetail.stats.social_needs)
                        }
                    </div>
                    <div className={style.singleStatDiv}>
                        <span className={style.blackSpan}>Energy: </span>
                        <br />
                        {
                            rating(breedDetail.stats.energy)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}