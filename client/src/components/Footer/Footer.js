import style from './footer.module.css'
import Item from './Item'

function Footer() {

    // const arr = ['Home', 'Textbook', 'Statistics', 'Sprint']
    // const arr_2 = ['Alex', 'Gabriel', 'Marcus']

    const arrClassName = [style.github, style.gt, style.youtube]

    return <footer>
        <div className={style.footerColor}>
            <div className={style.footerTop}>
                <div>
                    <Item array={['Home', 'Textbook', 'Statistics', 'Sprint']} />
                </div>
                <div>
                    <Item array={['Alex', 'Gabriel', 'Marcus']} />
                </div>
            </div>
            <div className={style.line}></div>

            <div className={style.footerBottom}>
                <div className={style.icons}>
                    {arrClassName.map((el, index) => <div key={index} className={el}></div>)}

                </div>
                <p>©2021 Hschool. Project for <span>Hschool.</span></p>

            </div>
        </div>
    </footer>
}

export default Footer;