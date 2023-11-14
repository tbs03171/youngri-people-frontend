import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieInformation.css';
import { useEffect, useState } from 'react';

/* 불러오기 성공, 불러온 정보 담고, 리뷰 post, 리뷰 get*/

const MovieInformation=()=>{
    const navigate=useNavigate();
    const goToMain=()=>{
        navigate("/main");
    }

    const params=useParams();
    const movieId=params.movieId;
    console.log(movieId);

    const [movieInformation, setMovieInformation]=useState([]);
    useEffect(()=>{
        axios
        .get(`/api/movies/${movieId}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authorization') || ''}`,
            },
        })
        .then((response)=>{
            console.log(response.data.data);
            setMovieInformation(response.data.data);
        })
        .catch((error)=>{
            /*console.log(error);*/
        })
    }, [movieId]);

    console.log(movieInformation);

    const displayMoviePoster=()=>{
        return(
            <div className="poster">
                    <img src={movieInformation.posterPath} alt="영화 포스터 이미지"></img>
            </div>
        )
    }

    const displayMovieInformation=()=>{
        /* 마저해야됨 */
        return(
            <div className="information">
                <h1 id="title">{movieInformation.title}</h1>
                <div className="component">
                    <h3 id="header">개봉일</h3>
                    <p id="content">{movieInformation.releaseDate}</p>
                </div>
                <div className="component">
                    <h3 id="header">감독</h3>
                    <p id="content">{movieInformation.map((item)=>{

                    })}</p>
                </div>
                <div className="component">
                    <h3 id="header">출연배우</h3>
                    <p id="content">송강호, 이선균, 조여정, 최우식, 박소담, 장혜진, 이정은 외</p>
                </div>
                <div className="component">
                    <h3 id="header">장르</h3>
                    <p id="content">드라마, 스릴러, 블랙 코미디, 범죄, 느와르, 재난, 서스펜스, 가족, 피카레스크</p>
                </div>
                <div className="component">
                    <h3 id="header">상영여부</h3>
                    <p id="content">상영종료</p>
                </div>
                <div className="component">
                    <h3 id="header">상영시간</h3>
                    <p id="content">132분(2시간 11분 39초)</p>
                </div>
                <div className="component">
                    <h3 id="header">평점</h3>
                    <p id="content">9.07</p>
                </div>
            </div>
        )
    }
    
    return(
        <body>
            <div className="top">
                <div className="logo">
                    <img src="img/main_logo.PNG" onClick={goToMain} alt="로고 이미지"></img>
                </div>
                <div className="top_component">
                    <div className="search_box">
                        <button>검색</button>
                    </div>
                    <div className="logout">
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
            <div className="movie-information-bottom">
                {displayMoviePoster()}
                <div className="information">
                    <h1 id="title">기생충</h1>
                    
                    <div className="component">
                        <h3 id="header">개봉일</h3>
                        <p id="content">2019년 5월 30일</p>
                    </div>
                    <div className="component">
                        <h3 id="header">감독</h3>
                        <p id="content">봉준호</p>
                    </div>
                    <div className="component">
                        <h3 id="header">출연배우</h3>
                        <p id="content">송강호, 이선균, 조여정, 최우식, 박소담, 장혜진, 이정은 외</p>
                    </div>
                    <div className="component">
                        <h3 id="header">장르</h3>
                        <p id="content">드라마, 스릴러, 블랙 코미디, 범죄, 느와르, 재난, 서스펜스, 가족, 피카레스크</p>
                    </div>
                    <div className="component">
                        <h3 id="header">상영여부</h3>
                        <p id="content">상영종료</p>
                    </div>
                    <div className="component">
                        <h3 id="header">상영시간</h3>
                        <p id="content">132분(2시간 11분 39초)</p>
                    </div>
                    <div className="component">
                        <h3 id="header">평점</h3>
                        <p id="content">9.07</p>
                    </div>
                </div>
                //영화 예고편 삽입
                <div className="summary">
                    <h3 id="header">줄거리</h3>
                    <p id="content">
                        직업도 없이 허름한 반지하에 사는 기택 가족에게 돈을 벌 기회가 찾아온다. 친구의 소개로 부잣집 딸 다혜의 과외 선생님을 맡게 된 기택의 아들, 기우는 기대감에 부푼 채 글로벌 IT기업을 이끄는 박 사장의 저택에 들어간다. 극과 극의 삶을 사는 두 가족의 예측 불가능한 만남이 시작된다.
                    </p>
                </div>
                <div className="heart_wrap">
                        <div className="heart_box">
                            <label for="heart" className="label_heart" title="on"><span class="blind">♥</span></label>
                            <input type="radio" name="heart" id="heart" class="heart_radio"></input>
                        </div>
                    </div>
                <div className="review_write">
                    <h3 id="header">리뷰</h3>
                    <div className="starpoint_wrap">
                        <div className="starpoint_box">
                            <label for="starpoint_1" class="label_star" title="0.5"><span class="blind">0.5점</span></label>
                            <label for="starpoint_2" class="label_star" title="1"><span class="blind">1점</span></label>
                            <label for="starpoint_3" class="label_star" title="1.5"><span class="blind">1.5점</span></label>
                            <label for="starpoint_4" class="label_star" title="2"><span class="blind">2점</span></label>
                            <label for="starpoint_5" class="label_star" title="2.5"><span class="blind">2.5점</span></label>
                            <label for="starpoint_6" class="label_star" title="3"><span class="blind">3점</span></label>
                            <label for="starpoint_7" class="label_star" title="3.5"><span class="blind">3.5점</span></label>
                            <label for="starpoint_8" class="label_star" title="4"><span class="blind">4점</span></label>
                            <label for="starpoint_9" class="label_star" title="4.5"><span class="blind">4.5점</span></label>
                            <label for="starpoint_10" class="label_star" title="5"><span class="blind">5점</span></label>
                            <input type="radio" name="starpoint" id="starpoint_1" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_2" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_3" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_4" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_5" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_6" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_7" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_8" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_9" class="star_radio"></input>
                            <input type="radio" name="starpoint" id="starpoint_10" class="star_radio"></input>
                            <span class="starpoint_bg"></span>
                        </div>
                    </div>
                    <input type="submit" value="등록"></input>
                    <textarea></textarea>
                </div>
                <div class="review_collection">
                    <h3 id="header">다른 사용자가 작성한 리뷰 둘러보기</h3>
                    <div class="space">
                        <div class="a_review"></div>
                        <div class="a_review"></div>
                        <div class="a_review"></div>
                        <div class="a_review"></div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default MovieInformation;