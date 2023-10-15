import s from './gallery.module.css'


export default function Gallery () {
    return (
        <div className={s.gallery}>
            <div id={s.heading}>
                <h2>GALLERY</h2>
            </div>
            <div id={s.container}>
                <div id={s.grid}>
                    {
                        (new Array(16)).fill(0).map((el, i) => {
                            let n = 2-Math.floor(Math.log(i+1)/Math.log(10))
                            let x = ""
                            for (let i=0 ; i<n ; i++) x += "0"
                            x += i+1

                            let path = `/gallery/${x}.png`
                            return <img src={path}  key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}