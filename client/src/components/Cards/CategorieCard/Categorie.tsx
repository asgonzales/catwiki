import React from "react";
import { Link } from "react-router-dom";
import { CategorieNames } from "../../../types/types";
import style from './CategorieCard.module.css';




interface Props {
    categorie:CategorieNames
}


export default function CategorieCard({categorie}:Props) {




    return (
        <div className={style.CategorieCardCont}>
            <Link to={`/results/${categorie.id}`} className={style.link}>
                <div className={style.titleDiv}>
                    <span className={style.title}>{categorie.name}</span>
                </div>
                <div className={style.imgDiv}>
                    <img src={categorie.image} alt={categorie.name}>
                        
                    </img>
                </div>
            </Link>
        </div>
    )
}