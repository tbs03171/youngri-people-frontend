import styles from './Community.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Community=()=>{
    const navigate=useNavigate();
    const goToMain=()=>{
        navigate("/main");
    }
    const goToUserSearch=()=>{
        navigate("/user-search")
    }
    const logout=()=>{
        localStorage.removeItem('authorization');
        alert("로그아웃 성공");
        navigate("/");
    }

    const [profilePath, setProfilePath]=useState([]);
    const [nickname, setNickname]=useState([]);
    const [userId, setUserId]=useState([]);

    useEffect(()=>{
        axios
        .get("/api/follow/followers", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authorization') || ''}`,
            },
        })
        .then((response)=>{
            if(response.status===200){
                console.log(response);
                let profilePathArr=[];
                let nicknameArr=[];
                let userIdArr=[];
                for(let i=0;i<response.data.data.length;i++){
                    profilePathArr.push(response.data.data[i].profilePath);
                    nicknameArr.push(response.data.data[i].nickname);
                    userIdArr.push(response.data.data[i].userId);
                }
                setProfilePath(profilePathArr);
                setNickname(nicknameArr);
                setUserId(userIdArr);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    const displayProfileImg=(i)=>{
        console.log(profilePath[i]);
        if(profilePath[i]==="1"){
            return <img onClick={(e) => navigate(`/user-page/${userId[i]}`)} src="img/profile/profile1.jpg" id="profile" alt="프로필 사진"></img>
        }
        else if(profilePath[i]==="2"){
            return <img onClick={(e) => navigate(`/user-page/${userId[i]}`)} src="img/profile/profile2.jpg" id="profile" alt="프로필 사진"></img>
        }
        else if(profilePath[i]==="3"){
            return <img onClick={(e) => navigate(`/user-page/${userId[i]}`)} src="img/profile/profile3.jpg" id="profile" alt="프로필 사진"></img>
        }
        else if(profilePath[i]==="4"){
            return <img onClick={(e) => navigate(`/user-page/${userId[i]}`)} src="img/profile/profile4.jpg" id="profile" alt="프로필 사진"></img>
        }
        else if(profilePath[i]==="5"){
            return <img onClick={(e) => navigate(`/user-page/${userId[i]}`)} src="img/profile/profile5.jpg" id="profile" alt="프로필 사진"></img>
        }
        else{
            return <img onClick={(e) => navigate(`/user-page/${userId[i]}`)} src="img/baseprofile.jpg" id="profile" alt="프로필 사진"></img>
        }
    }

    const displayUserData=()=>{
        console.log(profilePath);
        const displayUserDataArr=[];
        for(let i=0;i<nickname.length;i++){
            displayUserDataArr.push(
                <div className={styles.user}>
                    {displayProfileImg(i)}
                    <div className={styles.userInformation}>
                        <h3 id="user_nickname">{nickname[i]}</h3>
                        <h3 id="user_id">@{userId[i]}</h3>
                    </div>
                </div>
            )
        }
        return displayUserDataArr;
    }

    return(
        <body className={styles.communityBody}>
            <div className={styles.mainLogo}>
                <img src='img/main_logo.PNG' onClick={goToMain} alt='로고 이미지'></img>
            </div>

            <div className={styles.searchMovie}>
                <button onClick={goToUserSearch}>
                    <img src='img/search.png'/>
                </button>
            </div>
            <div className={styles.buttonLogout}>
                <button onClick={logout}>로그아웃</button>
            </div>

            <div className={styles.communityBottom}>
                <h1>커뮤니티</h1>
                <div className={styles.userContainer}>
                    {displayUserData()}
                </div>
            </div>
        </body>
    );
}

export default Community;