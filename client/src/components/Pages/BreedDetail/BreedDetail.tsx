import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreedDetails, getBreedImages } from "../../../redux/breedSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import BreedDetailCard from "../../Cards/BreedDetailCard/BreedDetailCard";
import ImageCard from "../../Cards/ImageCard/ImageCard";
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
        dispatch(getBreedDetails(breedId as string))
        dispatch(getBreedImages({breed: breedId, page: page}))
    }, [breedId])
    

    return (
        <div className={style.ContBreedDetail}>
            {/* <button onClick={() => console.log(details)}>console</button> */}
            <div className={style.detailsDiv}>
                {
                    details.detail.id !== '' &&
                    <BreedDetailCard breedDetail={details.detail}/>
                }
            </div>
            <div className={style.galleryDiv}>
                <h1>Gallery:</h1>
                {
                    details.images.map((el, index) => {
                        return (
                            <ImageCard image={el.url} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}