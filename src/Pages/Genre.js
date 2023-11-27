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
                <div className={styles.movieContainer}>
                    <img id="movie-poster"
                        className={styles.moviePoster}
                        src={genreMoviePoster[i]}
                        onClick={(e)=>{navigate(`/movie-information/${genreMovieId[i]}`)}}
                        alt={`${process.env.PUBLIC_URL}/img/alt.jpg`}
                    ></img>
                    <h3 className={styles.movieTitle}>{genreMovieTitle[i]}</h3>
                </div>
            )
        }
        return genreMovieDataArr;
    }

    return(
        
            <div className={styles.genreBody}>
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
                
            
            <div className={styles.genreBottom}>
                <h1>{genre}</h1>
                <div className={styles.genreContainer}>
                    {displayGenreMovieData()}
                </div>
            </div>
            </div>
    )
}

export default Genre;