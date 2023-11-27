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

    const displayFilmographyMovieData = () => {
        const filmographyMovieDataArr = [];
        for (let i = 0; i < filmographyMovieId.length; i++) {
            filmographyMovieDataArr.push(
                <div className={styles.movieContainer}>
                    <img
                        id="movie-poster"
                        className={styles.moviePoster}
                        src={filmographyMoviePoster[i]}
                        onClick={(e) => {
                            navigate(`/movie-information/${filmographyMovieId[i]}`);
                        }}
                        alt={`${process.env.PUBLIC_URL}/img/alt.jpg`}
                    ></img>
                    <h3 className={styles.movieTitle}>{filmographyMovieTitle[i]}</h3>
                </div>
            );
        }
        return filmographyMovieDataArr;
    }

    return(
        
            <div className={styles.filmographyBody}>
                <div className={styles.mainLogo}>
                    <img src={`${process.env.PUBLIC_URL}/img/main_logo.PNG`} onClick={goToMain} alt="로고 이미지"></img>
                </div>
                <div className={styles.searchMovie}>
                <button onClick={goToMovieSearch}>
                    <img src={`${process.env.PUBLIC_URL}/img/search.png`}/>
                </button>
            </div>
            <div className={styles.buttonLogout}>
                <button onClick={logout}>로그아웃</button>
            </div>
                
            

            
            <div className={styles.filmographyBottom}>
                <h1>Filmography</h1>
                <div className={styles.filmographyContainer}>
                    {displayFilmographyMovieData()}
                </div>
            </div>
            </div>
        
    );
}

export default Filmography;