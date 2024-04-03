import style from './home.module.css'

function Home() {
    return <div>
        <div className={style.section_1}>
            <div className={style.header}>
                <p>Hschool</p>
                <div>
                    <button className={style.login}>Login →</button>
                    <button className={style.singUp}>Sign Up</button>

                </div>
            </div>

            <div className={style.main}>
                <div className={style.info}>
                    <h5>E-COURSE PLATFORM</h5>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p>Any subject, in any language, on any device, for all ages!</p>
                    <button>About platform</button>
                    <div className={style.lightning}>
                        <div className={style.light_img}></div>
                        <p>600+</p>
                    </div>
                    <p>Students</p>

                </div>
                <div className={style.student_img}></div>
            </div>

        </div>
        <div className={style.section_2}>
            <div className={style.content_2}>
                <div className={style.learner_img}></div>
                <div className={style.info_2}>
                    <h1>Learn a language in a playful way</h1>
                    <p>Make learning programming languages more fun with mini-games</p>
                    <div className={style.img}>
                        <div className={style.sprint_img}></div>
                        <div className={style.tasks_img}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home