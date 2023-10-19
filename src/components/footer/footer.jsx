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
                        <a href="https://www.instagram.com/" className={s.invertible}>
                            <img src="./insta.png" id="img1" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/" >
                            <img src="./linkedin.png" id="img2" alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/" className={s.invertible}>
                            <img src="./yt.png" id="img3" alt="Youtube" />
                        </a>
                        <a href="https://www.github.com/">
                            <img src="./github.png" id="img4" alt="Github" />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    )
}