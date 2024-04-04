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
                        <p>600<span>+</span></p>
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

        <div className={style.section_3}>
            <div className={style.content_3}>
                <div className={style.info_3}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <button>Textbook →</button>
                </div>
                <div className={style.learner_img_3}></div>
            </div>
        </div>

        <div className={style.section_4}>
            <div className={style.content_4}>
                <div className={style.learner_img_4}></div>
                <div className={style.info_4}>
                    <h1>Watch your progress every day</h1>
                    <p>Save statistics on your achievements and mistakes</p>
                    <button>Statistics →</button>

                </div>
            </div>
        </div>

        <footer>
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
    </div>
}

export default Home