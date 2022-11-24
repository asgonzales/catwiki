import { Link } from "react-router-dom";
import { CategorieNames } from "../../../types/types";
import style from './CategorieCard.module.css';
import iconRight from '../../../media/Icons/right.png';



interface Props {
    categorie:CategorieNames
}


export default function CategorieCard({categorie}:Props) {




    return (
        <div className={style.CategorieCardCont}>
            <Link to={`/results/${categorie.id}`} className={style.link}>
                <div className={style.imgDiv}>
                    <img src={categorie.image} alt={categorie.name} />
                </div>
                <div className={style.titleDiv}>
                    <span className={style.title}>{categorie.name.toUpperCase()}</span>
                    <div>
                        <img src={iconRight} alt="right" />
                    </div>
                </div>
            </Link>
        </div>
    )
}