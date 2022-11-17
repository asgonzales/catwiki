import { useEffect } from "react"
import { getHomeImage } from "../../../redux/catSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import style from './HomeCard.module.css';








export default function HomeCard () {
    const cat = useAppSelector(state => state.cats)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(cat.image == '') dispatch(getHomeImage())
    }, [])
    const changeImage = () => {
        dispatch(getHomeImage())
    }


    return (
        <div className={style.ContHomeCard}>
            <div>
                {
                    cat.loadingImage && !cat.image && <h2>Cargando...</h2>
                }
                {
                    cat.image !== '' &&
                    <img className={style.catImage} src={cat.image} alt="cat Image" />
                }
            </div>
            <div onClick={changeImage} className={style.infoDiv}>
                <h3>Welcome to <br /> <span className={style.Cat} >Cat </span><span> Wiki</span></h3>
                <p>Here you can search for <span className={style.Cat} >Cat</span> images and breed's information!</p>
            </div>
        </div>
    )
}