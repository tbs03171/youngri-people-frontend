import './Community.css';

const Community=()=>{
    return(
        <body>
            <div className="top">
                <div className="logo">
                    <img src="img/main_logo.PNG" alt="로고 이미지"></img>
                </div>
                <div className="top_component">
                    <div className="search_box">
                        <button type="submit">검색</button>
                    </div>
                    <div className="logout">
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
            <div className="community-bottom">
                <h1>커뮤니티</h1>
                <div className="user_container">
                    <div className="user">
                        <img src="img/c_user1.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">구독한 사용자1</h3>
                            <h3 id="user_id">@sub_user1</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/c_user2.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">구독한 사용자2</h3>
                            <h3 id="user_id">@sub_user2</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/c_user1.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">구독한 사용자1</h3>
                            <h3 id="user_id">@sub_user1</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/c_user2.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">구독한 사용자2</h3>
                            <h3 id="user_id">@sub_user2</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/c_user1.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">구독한 사용자1</h3>
                            <h3 id="user_id">@sub_user1</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/c_user2.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">구독한 사용자2</h3>
                            <h3 id="user_id">@sub_user2</h3>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Community;