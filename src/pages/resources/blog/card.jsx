import { Link } from 'react-router-dom'
import s from './card.module.css'

export default function Card ({ title, image, link }) {
    return (
        <div className={s.card}>
            <Link to = {link}>
                <img src={image} alt="" />
                <h3>{title}</h3>
            </Link>
        </div>
    )
}