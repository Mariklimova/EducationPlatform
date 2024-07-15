import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './singleCourse.module.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function SingleCourse() {
    const objectWithId = useParams()

    const [data, setData] = useState([]);
    const [lesson,setLesson] = useState([]);

    const getCourseById = async () => {
        const response = await axios.get(`http://localhost:3005/course/${objectWithId.id}`);
        setData(response.data);

        const responseLessons = await axios.get(`http://localhost:3005/lesson/${objectWithId.id}`);
        setLesson(responseLessons.data)
    }
    useEffect(() => {
        getCourseById();
    }, [])

    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.content_left}>
                    <div className={style.discription}>
                        <div className={style.image_books}></div>
                        <div className={style.info}>
                            <h1>{data[0]?.course}</h1>
                            <p>{data[0]?.description}</p>

                        </div>
                    </div>
                    <button><Link to ={'/course'}>Go to course</Link></button>

                </div>
                <div className={style.tests}>
                    <h1>15 lessons</h1>
                    {lesson.map((el,i)=><p key = {i}>{i+1}.{el.title}</p>)}
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
export default SingleCourse;