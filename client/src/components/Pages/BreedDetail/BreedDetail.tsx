import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreedDetails, getBreedImages } from "../../../redux/breedSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import BreedDetailCard from "../../Cards/BreedDetailCard/BreedDetailCard";
import ImageCard from "../../Cards/ImageCard/ImageCard";
import Loading from "../../Loading/Loading";
import style from './BreedDetail.module.css';




type Params = {
    breedId:string
}


export default function BreedDetail() {
    const details = useAppSelector(state => state.breed)
    const dispatch = useAppDispatch()
    const { breedId } = useParams<keyof Params>() as Params
    const [page, setPage] = useState(0)

    useEffect(() => {
        document.title = `Cat Wiki - Details of ${details.detail.name}`
        dispatch(getBreedDetails(breedId as string))
        dispatch(getBreedImages({breed: breedId, page: page}))
    }, [breedId])
    

    return (
        <div className={style.ContBreedDetail}>
            {/* <button onClick={() => console.log(details)}>console</button> */}
            {
                details.loadingDetail ?
                <Loading /> :
                <>
                    <div className={style.detailsDiv}>
                        {
                            details.detail.id !== '' &&
                            <BreedDetailCard breedDetail={details.detail}/>
                        }
                    </div>
                    <div className={style.galleryDiv}>
                        <h1>Gallery:</h1>
                        <div>
                            {
                                details.images.map((el, index) => {
                                    return (
                                        <ImageCard image={el.url} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}