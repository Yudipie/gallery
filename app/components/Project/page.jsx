import style from "./page.module.scss";

export default function Project({index, title, setModal}) {
    return(
        <div className={style.main} onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}>
            <div className={style.li}>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}