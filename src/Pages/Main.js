import { useNavigate } from 'react-router-dom';
import './Main.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

/* 검색 버튼, 로그아웃 버튼 클릭시 행동 반환 */

const Main=()=>{
    const navigate=useNavigate();
    const goToMain=()=>{
        navigate("/main");
    }
    const goToMyPage=()=>{
        navigate("/my-page");
    }
    const goToCommunity=()=>{
        navigate("/community");
    }
    const goTomMovieSearch=()=>{
        navigate("/movie-search");
    }

    const [upcomingMovieId, setUpcomingMovieID]=useState([]);
    const [upcomingPoster, setUpcomingPoster]=useState([]);
    const [upcomingTitle, setUpcomingTitle]=useState([]);
    useEffect(()=>{
        axios
        .get("/api/movies/upcoming", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authorization') || ''}`,
            },
        })
        .then((response)=>{
            if(response.status===200){
                const upcomingMovieIdArr=[];
                const upcomingPosterArr=[];
                const upcomingTitleArr=[];
                for(let i=0;i<response.data.data.length;i++){
                    upcomingMovieIdArr.push(response.data.data[i].id);
                    upcomingPosterArr.push(response.data.data[i].posterPath);
                    upcomingTitleArr.push(response.data.data[i].title);
                }
                setUpcomingMovieID(upcomingMovieIdArr);
                setUpcomingPoster(upcomingPosterArr);
                setUpcomingTitle(upcomingTitleArr);
            }
        })
        .catch((error)=>{
            if(error.response.status===403){
                alert("403");
                localStorage.removeItem('authorization');
                return navigate("/login");
            }
        })
    },[]);

    const displayUpcomingData=()=>{
        const upcomingtDataArr=[];
        for(let i=0;i<upcomingMovieId.length;i++){
            upcomingtDataArr.push(
                <div className='movie-component'>
                    <img id='movie-poster'
                        src={upcomingPoster[i]}
                        onClick={(e)=>{navigate(`/movie-information/${upcomingMovieId[i]}`)}}
                    ></img>
                    <h3 id='movie-title'>{upcomingTitle[i]}</h3>
                </div>
            ) 
        }
        return upcomingtDataArr;
    }

    return(
        <body>
            <div className="top">
                <div className="logo">
                    <img src="img/main_logo.PNG" onClick={goToMain} alt="로고 이미지"></img>
                </div>
                <div className="top_component">
                    <div className="navigate_box">
                        <button onClick={goToMyPage}>마이페이지</button>
                        <button onClick={goToCommunity}>커뮤니티</button>
                    </div>
                    <div className="search_box">
                        <button onClick={goTomMovieSearch}>검색</button>
                    </div>
                    <div className="logout">
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
            <div className='main-bottom'>
                <div className="movie-category">
                    <h2 className="category-title">현재 상영중인 영화</h2>
                    <div className="movie-list">
                        {displayUpcomingData()}
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">내가 찜한 영화</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">나와 같은 연령이 찜한 영화</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">나와 같은 성별이 찜한 영화</h2>
                    <div className="movie-list">
                        //한국 영화 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">내가 선호하는 장르의 영화</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">MBTI 기반 추천 영화</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">높은 평점의 인기작</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">한국 영화</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">해외 영화</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
                <div className="movie-category">
                    <h2 className="category-title">애니</h2>
                    <div className="movie-list">
                        //최신 영화 개봉작 포스터 이미지들 추가
                    </div>
                </div>
            </div>   
        </body>
    );
};

export default Main;