import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { idText } from "typescript"
import { getCategorieImages, getCategorieNames } from "../../../redux/categorieSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import ImageCard from "../../Cards/ImageCard/ImageCard"









export default function Results() {
    const { categorieId } = useParams()
    const dispatch = useAppDispatch()
    const images = useAppSelector(state => state.categorie.urls)
    const resultsNames = useAppSelector(state => state.categorie.names)
    const [page, setPage] = useState(1)
    useEffect(() => {
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
        if(images.length == 10) {
            setPage( page + 1)
        }
    }

    return (
        <div>
            {/* <button onClick={() => console.log(resultsNames)}>click</button> */}
            <h1>
                {
                    resultsNames.filter(el => el.id == categorieId)[0]?.name
                }
            </h1>
            {
                images.map((image, index) => {
                    return (
                        <ImageCard key={index} image={image.url} />
                    )
                })
            }
            <button onClick={ prevPage }>Anterior pagina</button>
            <button onClick={ nextPage }>siguiente pagina</button>
        </div>
    )
}