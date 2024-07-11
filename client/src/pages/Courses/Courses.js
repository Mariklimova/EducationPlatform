import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './courses.module.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";

function Courses() {

    // const section = [{
    //     course: 'JavaScript',
    //     discription: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.',
    //     image: style.img_students_1
    // },

    // {
    //     course: 'TypeScript',
    //     discription: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript\'s key features, such as type annotations, interfaces, classes, and modules',
    //     image: style.img_students_2
    // },

    // {
    //     course: 'Python',
    //     discription: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.',
    //     image: style.img_students_3
    // }]

    const [data, setData] = useState([])
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