import { useEffect, useRef } from "react";
import { getCategorieNames } from "../../../redux/categorieSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import CategorieCard from "../../Cards/CategorieCard/Categorie";
import HomeCard from "../../Cards/HomeCard/HomeCard";
import Loading from "../../Loading/Loading";
import style from './Home.module.css';







export default function Home() {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(state => state.categorie)
    const categoriesDiv = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if(categories.names.length == 0)
        dispatch(getCategorieNames())
    }, [dispatch])
    // const moreCategories = () => {
    //     if(categoriesDiv.current) {
    //         categoriesDiv.current.className = style.longCategoriesDiv
    //     }
    // }


    return (
        <div className={style.HomeCont}>
            <div className={style.homeCardDiv}>
                <HomeCard />
            </div>
            <div className={style.longCategoriesDiv} ref={categoriesDiv}>
                <h3 className={style.categoriesTitle}><span>Cat</span><span>egories:</span></h3>
                <div>
                    {
                        categories.loadingNames && !categories.error.names && 
                        <Loading />
                    }
                    {
                        !categories.loadingNames && categories.names.map((el) => {
                            return <CategorieCard key={el.id} categorie={el} />
                        })
                    }
                </div>
                {/* <button  className={style.moreCategoriesButton}>See more...</button> */}
            </div>
            {/* <button onClick={() => console.log(categories)}>console log</button> */}
        </div>
    )
}