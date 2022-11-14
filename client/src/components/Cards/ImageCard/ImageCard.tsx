



interface Props {
    image:string
}




export default function ImageCard({image}:Props) {


    return (
        <div>
            <img src={image} alt="cat" />
        </div>
    )
}