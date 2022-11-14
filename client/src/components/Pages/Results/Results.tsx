import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCategorieImages } from "../../../redux/categorieSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import ImageCard from "../../Cards/ImageCard/ImageCard"









export default function Results() {
    const { categorieId } = useParams()
    const dispatch = useAppDispatch()
    const images = useAppSelector(state => state.categorie.urls)
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(getCategorieImages({id: categorieId as string, page: page}))
    }, [page])



    return (
        <div>
            OLA SOY EL RESULTS
            {
                images.map((image, index) => {
                    return (
                        <ImageCard key={index} image={image.url} />
                    )
                })
            }
            <button onClick={() => setPage(page + 1)}>siguiente pagina</button>
        </div>
    )
}