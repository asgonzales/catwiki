import { Link } from 'react-router-dom';
import style from './Footer.module.css';








export default function Footer () {




    return (
        <div className={style.ContFooter}>
            <Link to='/about' className={style.link}> 
                About
            </Link>
        </div>
    )
}