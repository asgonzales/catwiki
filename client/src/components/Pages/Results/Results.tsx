import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategorieImages, getCategorieNames } from "../../../redux/categorieSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import ImageCard from "../../Cards/ImageCard/ImageCard";
import Loading from "../../Loading/Loading";
import style from './Results.module.css';
import iconRight from '../../../media/Icons/right.png';
import iconLeft from '../../../media/Icons/left.png';








export default function Results() {
    const { categorieId } = useParams()
    const dispatch = useAppDispatch()
    const images = useAppSelector(state => state.categorie)
    const resultsNames = useAppSelector(state => state.categorie.names)
    const [page, setPage] = useState(0)
    useEffect(() => {
        document.title = `Cat Wikit - Results`
        if(resultsNames.length == 0) {
            dispatch(getCategorieNames())
        }
        dispatch(getCategorieImages({id: categorieId as string, page: page}))
    }, [page])

    const prevPage = () => {
        if(page > 0) {
            setPage( page - 1)
        }
    }
    const nextPage = () => {
        if(images.urls.length == 10) {
            setPage( page + 1)
        }
    }

    return (
        <div className={style.ContResults}>
            <div className={style.images}>
                {/* <button onClick={() => console.log(resultsNames)}>click</button> */}
                <h1>{resultsNames.filter(el => el.id == categorieId)[0]?.name.toUpperCase()}</h1>
                <div>
                    {
                        images.loadingUrls && 
                        <Loading />
                    }
                    {
                        !images.loadingUrls && images.urls.map((image, index) => {
                            return (
                                <ImageCard key={index} image={image.url} />
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.buttonDiv}>
                <button className={page > 0 ? style.button: style.disButton} onClick={ prevPage }>
                    <div>
                        <img src={iconLeft} alt="left" />
                    </div>
                    Prev
                </button>
                <button className={images.urls.length == 10 ? style.button : style.disButton} onClick={ nextPage }>
                    Next
                    <div>
                        <img src={iconRight} alt="right" />
                    </div>
                </button>
            </div>
        </div>
    )
}