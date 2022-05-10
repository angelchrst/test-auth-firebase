import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const data = useSelector((globalStore) => globalStore);
    console.log(data);
    const CheckLogin = () => {
        if(data.auth.dataLogin.user === null) navigate("/login");
    };

    useEffect(() => {
        CheckLogin();
    }, []);

    return <h1>Hello World!</h1>
}

export default Home;