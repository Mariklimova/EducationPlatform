import style from './home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Home() {
    return <div>
        <div className={style.section_1}>
            <Header/>

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

       <Footer/>
    </div>
}

export default Home