import style from './footer.module.css'

function Footer() {
    return  <footer>
    <div className={style.footerColor}>
        <div className={style.footerTop}>
            <div>
                <p>Home</p>
                <p>Textbook</p>
                <p>Statistics</p>
                <p>Sprint</p>
            </div>
            <div>
                <p>Alex</p>
                <p>Gabriel</p>
                <p>Marcus</p>
            </div>
        </div>
        <div className={style.line}></div>

        <div className={style.footerBottom}>
            <div className={style.icons}>
                <div className={style.github}></div>
                <div className={style.gt}></div>
                <div className={style.youtube}></div>

            </div>
            <p>©2021 Hschool. Project for <span>Hschool.</span></p>

        </div>
    </div>
</footer>
}

export default Footer;