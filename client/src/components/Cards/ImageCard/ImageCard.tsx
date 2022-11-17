import { useState } from 'react';
import FullImage from '../FullImage/FullImage';
import style from './ImageCard.module.css';



interface Props {
    image:string
}




export default function ImageCard({image}:Props) {
    const [portal, setPortal] = useState(false)
    const handlePortal = () => {
        setPortal(!portal)
    }

    return (
        <div onClick={handlePortal} className={style.ContImageCard}>
            <img src={image} alt="cat" />
            {
                portal && 
                <FullImage img={image} />
            }
        </div>
    )
}