import style from './Loading.module.css';
import logo from '../../media/Icons/logo.png';








export default function Loading () {




    return(
        <div className={style.ContLoading}>
            <img src={logo} alt="loading" />
        </div>
    )
}