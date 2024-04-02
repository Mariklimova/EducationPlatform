import style from './home.module.css'

function Home() {
    return <div>
        <div className={style.header}>
            <p>Hschool</p>
            <div>
                <button className={style.login}>Login →</button>
                <button className={style.singUp}>Sign Up</button>

            </div>
        </div>

        <div className={style.main}>
            <h5>E-COURSE PLATFORM</h5>
            <h1>Learning and teaching online, made easy.</h1>
            <p>Any subject, in any language, on any device, for all ages!</p>
            <button>About platform</button>
            <div>
                <div className={style.ligth}></div>
                <h1>600+</h1>
            </div>
            <p>Students</p>
        </div>
        <div className={style.student_img}></div>
    </div>
}

export default Home