import s from './footer.module.css'

export default function Footer () {
    return (
        <footer>
            <div className={s.content}>
                <nav>
                    <div className={s.left}>
                        <h4>Copyrights Reserved.</h4>
                    </div>
                    <div className={s.right}>
                        <a href="https://www.instagram.com/">
                            <img src="./instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <img src="./linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src="./yt.png" alt="Youtube" />
                        </a>
                        <a href="https://www.github.com/">
                            <img src="./github.png" alt="Github" />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    )
}