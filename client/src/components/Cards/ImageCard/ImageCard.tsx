import style from './ImageCard.module.css';



interface Props {
    image:string
}




export default function ImageCard({image}:Props) {


    return (
        <div className={style.ContImageCard}>
            <img src={image} alt="cat" />
        </div>
    )
}