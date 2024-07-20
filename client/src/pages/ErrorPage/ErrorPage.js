import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './error.module.css';


function ErrorPage() {



    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                    <h5>Error 404</h5>
                    <h1>Hey Buddy</h1>
                    <p>We can’t seem to find the page you are looking for.</p>
                    
                    <button><Link to ={'/'}>Go home</Link></button>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
        <Footer />
    </div>
}
export default ErrorPage;