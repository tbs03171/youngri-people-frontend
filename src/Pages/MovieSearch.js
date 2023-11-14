import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieSearch=()=>{
    const navigate=useNavigate();
    const goToMain=()=>{
        navigate("/main");
    }

    const [searchKeyword, setSearchKeyword]=useState("person");
    const [searchContent, setSearchContent]=useState("");

    const [searchMovieId, setSearchMovieId]=useState([]);
    const [searchMoviePoster, setSearchMoviePoster]=useState([]);
    const [searchMovieTitle, setSearchMovieTitle]=useState([]);

    const onSubmit=(event)=>{
        event.preventDefault();
        axios
        .get("/api/movies/search"+"?"+searchKeyword+"="+searchContent,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authorization') || ''}`,
            },
        })
        .then((response)=>{
            if(response.status===200){
                const searchMovieIdArr=[];
                const searchMoviePosterArr=[];
                const searchMovieTitleArr=[];
                for(let i=0;i<response.data.data.length;i++){
                    searchMovieIdArr.push(response.data.data[i].id);
                    searchMoviePosterArr.push(response.data.data[i].posterPath);
                    searchMovieTitleArr.push(response.data.data[i].title);
                }
                setSearchMovieId(searchMovieIdArr);
                setSearchMoviePoster(searchMoviePosterArr);
                setSearchMovieTitle(searchMovieTitleArr);
            }
        })
        .catch((error)=>{
             console.log(error);
        })
    }

    const displaySearchMovieData=()=>{
        const searchMovieDataArr=[];
        for(let i=0;i<searchMovieId.length;i++){
            searchMovieDataArr.push(
                <div className="movie-component">
                    <img id="movie-poster"
                        src={searchMoviePoster[i]}
                        onClick={(e)=>{navigate(`/movie-information/${searchMovieId[i]}`)}}
                    ></img>
                    <h3 id="movie-title">{searchMovieTitle[i]}</h3>
                </div>
            )
        }
        return searchMovieDataArr;
    }

    return(
        <body>
            <div className="top">
                <div className="logo">
                    <img src="img/main_logo.PNG" onClick={goToMain} alt="로고 이미지"></img>
                </div>
                <div className="top_component">
                    <div className="search_box">
                        <form method="post" action="moviesearch.php">
                            <select onChange={(e)=>{setSearchKeyword(e.target.value)}} name="movie_search">
                                <option value="title" selected>제목</option>
                                <option value="person">감독 및 배우</option>
                                <option value="genre">장르</option>
                            </select>
                            <input onChange={(e)=>{setSearchContent(e.target.value)}} type="text" placeholder="키워드를 입력하세요..."></input>
                            <button onClick={onSubmit} type="submit">검색</button>
                        </form>
                    </div>
                    <div className="logout">
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
            <div className="moviesearch-bottom">
                <h2>영화 검색 결과</h2>
                <div className="search-movie-container">
                    {displaySearchMovieData()}
                </div>
            </div>
        </body>
    )
}

export default MovieSearch;