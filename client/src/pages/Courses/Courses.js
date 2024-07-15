import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './courses.module.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";

function Courses() {

    const [data, setData] = useState([]);
    
    const getAllCourses = async () => {
        const response = await axios.get('http://localhost:3005/course');
        setData(response.data)
    }
    useEffect(() => {
        getAllCourses();
    }, [])

    return <div>
        <Header />
        <div className={style.backgraund}>
            <div className={style.wrapper}>
                <div className={style.header_courses}>
                    <div className={style.img_hat}></div>
                    <h1>Courses</h1>
                </div>
            </div>

            {data.map((el, index) => <Link key={index} to={`/singleCourse/${el.id}`}>
                <div className={style.section}>
                    <div className={style.img_students_1}></div>
                    <div className={style.info}>
                        <h1>{el.course}</h1>
                        <div className={style.line}></div>
                        <p>{el.description}</p>
                    </div>
                </div>
            </Link>
            )}


        </div>

        <Footer />

    </div>
}

export default Courses;