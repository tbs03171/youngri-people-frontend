import styles from './Genre.module.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Genre=()=>{
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
    const genre=params.genre;

    const [genreMovieId, setGenreMovieId]=useState([]);
    const [genreMoviePoster, setGenreMoviePoster]=useState([]);
    const [genreMovieTitle, setGenreMovieTitle]=useState([]);

    useEffect(()=>{
        axios
        .get(`/api/movies/genres/${genre}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authorization') || ''}`,
            },
        })
        .then((response)=>{
            console.log(response);
            if(response.status===200){
                const genreMovieIdArr=[];
                const genreMoviePosterArr=[];
                const genreMovieTitleArr=[];
                for(let i=0;i<response.data.data.length;i++){
                    genreMovieIdArr.push(response.data.data[i].id);
                    genreMoviePosterArr.push(response.data.data[i].posterPath);
                    genreMovieTitleArr.push(response.data.data[i].title);
                }
                setGenreMovieId(genreMovieIdArr);
                setGenreMoviePoster(genreMoviePosterArr);
                setGenreMovieTitle(genreMovieTitleArr);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [genre]);

    const displayGenreMovieData=()=>{
        const genreMovieDataArr=[];
        for(let i=0;i<genreMovieId.length;i++){
            genreMovieDataArr.push(
                <div className="movie-component">
                    <img id="movie-poster"
                        src={genreMoviePoster[i]}
                        onClick={(e)=>{navigate(`/movie-information/${genreMovieId[i]}`)}}
                        alt={`${process.env.PUBLIC_URL}/img/alt.jpg`}
                    ></img>
                    <h3 id="movie-title">{genreMovieTitle[i]}</h3>
                </div>
            )
        }
        return genreMovieDataArr;
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
            <div className="genre-bottom">
                <h1>{genre}</h1>
                <div className="search-movie-container">
                    {displayGenreMovieData()}
                </div>
            </div>
        </body>
    )
}

export default Genre;