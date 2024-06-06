import { useEffect, useState } from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import JsCookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [token, setToken] = useState('');
    const navigate = useNavigate()
    function getToken() {
        const aplicationToken = JsCookie.get('accessToken');
        setToken(aplicationToken)
    };

    useEffect(() => getToken(), [token]);

    function deleteToken() {
        JsCookie.remove('accessToken');
        setToken('');
        navigate('/');
    }
    return <>
        <div className={style.section_1}>
            <div className={style.header}>
                <p>Hschool</p>
                {token?
                 <button onClick={deleteToken} className={style.login}>Log out</button>
                 :
                <div>
                    <Link to='/signin'><button className={style.login}>Login →</button></Link>

                    <Link to='/signup'><button className={style.singUp}>Sign Up</button></Link>

                </div>
                }
            </div>
        </div>
    </>

}

export default Header;