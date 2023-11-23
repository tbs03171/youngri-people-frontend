import styles from './Filmography.module.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Filmography=()=>{
    const navigate=useNavigate();
    const goToMain=()=>{
        navigate("/main");
    }
    const goToMovieSearch=()=>{
        navigate("/movie-search");
    }
    const logout=()=>{
        localStorage.removeItem('authorization');
        alert("로그아웃 성공");
        navigate("/");
    }

    const params=useParams();
    const personId=params.personId;

    const [filmographyMovieId, setFilmographyMovieId]=useState([]);
    const [filmographyMoviePoster, setFilmographyMoviePoster]=useState([]);
    const [filmographyMovieTitle, setFilmographyMovieTitle]=useState([]);

    useEffect(()=>{
        axios
        .get(`/api/movies/filmography/${personId}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authorization') || ''}`,
            },
        })
        .then((response)=>{
            console.log(response);
            if(response.status===200){
                const filmographyMovieIdArr=[];
                const filmographyMoviePosterArr=[];
                const filmographyMovieTitleArr=[];
                for(let i=0;i<response.data.data.length;i++){
                    filmographyMovieIdArr.push(response.data.data[i].id);
                    filmographyMoviePosterArr.push(response.data.data[i].posterPath);
                    filmographyMovieTitleArr.push(response.data.data[i].title);
                }
                setFilmographyMovieId(filmographyMovieIdArr);
                setFilmographyMoviePoster(filmographyMoviePosterArr);
                setFilmographyMovieTitle(filmographyMovieTitleArr);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [personId]);

    const displayFilmographyMovieData=()=>{
        const filmographyMovieDataArr=[];
        for(let i=0;i<filmographyMovieId.length;i++){
            filmographyMovieDataArr.push(
                <div className="movie-component">
                    <img id="movie-poster"
                        src={filmographyMoviePoster[i]}
                        onClick={(e)=>{navigate(`/movie-information/${filmographyMovieId[i]}`)}}
                        alt={`${process.env.PUBLIC_URL}/img/alt.jpg`}
                    ></img>
                    <h3 id="movie-title">{filmographyMovieTitle[i]}</h3>
                </div>
            )
        }
        return filmographyMovieDataArr;
    }

    return(
        <body>
            <div className="top">
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/img/main_logo.PNG`} onClick={goToMain} alt="로고 이미지"></img>
                </div>
                <div className="top_component">
                    <div className="search_box">
                        <button onClick={goToMovieSearch}>검색</button>
                    </div>
                    <div className="logout">
                        <button onClick={logout}>로그아웃</button>
                    </div>
                </div>
            </div>
            <div className="filmography-bottom">
                <h1>Filmography</h1>
                <div className="filmogrphy-container">
                    {displayFilmographyMovieData()}
                </div>
            </div>
        </body>
    );
}

export default Filmography;