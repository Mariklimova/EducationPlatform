import style from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return <div className={style.section_1}>
        <div className={style.header}>
            <p>Hschool</p>
            <div>
                <Link to='/signin'><button className={style.login}>Login →</button></Link>

                <Link to='/signup'><button className={style.singUp}>Sign Up</button></Link>

            </div>
        </div>
    </div>

}

export default Header;