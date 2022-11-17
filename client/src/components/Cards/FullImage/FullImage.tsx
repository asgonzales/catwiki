import React from "react-dom";
import style from './FullImage.module.css';




interface Props {
    img:string
}



export default function FullImage({img}:Props) {




    return React.createPortal(
        <div className={style.ContFullImage}>
            <img src={img} alt='image' />
        </div>
    , document.getElementById('portals') as HTMLElement)
}