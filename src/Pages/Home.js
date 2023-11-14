import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home=()=>{
    const navigate=useNavigate();
    const goToLogin=()=>{
        navigate("/login");
    }

    return(
        <div className='home-container'>
            <div className='main-logo'>
                <img src='img/main_logo.PNG' alt='로고 이미지'></img>
            </div>
            <div className='content'>
                <h1>최신 영화와 클래식 영화, 모든 장르를 다루는 리뷰 플랫폼!</h1>
                <h2>영화의 감동을 공유하고 새로운 영화를 찾아보세요.</h2>
            </div>
            <div className='go-login'>
                <button id='login-button' onClick={goToLogin}>지금 바로, 리뷰 시작하기!</button>
            </div>
        </div>
    );
};

export default Home;