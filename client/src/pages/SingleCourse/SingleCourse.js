import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './singleCourse.module.css';



function SingleCourse() {
    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.content_left}>
                    <div className={style.discription}>
                        <div className={style.image_books}></div>
                        <div className={style.info}>
                            <h1>JavaScript</h1>
                            <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>

                        </div>
                    </div>
                    <button>Go to course</button>

                </div>
                <div className={style.tests}>
                    <h1>15 lessons</h1>
                    <p>1. Test</p>
                    <p>1. Test</p>
                    <p>1. Test</p>
                    <p>1. Test</p>
                    <p>1. Test</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
export default SingleCourse;