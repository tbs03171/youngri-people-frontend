import './UserSearch.css';

const UserSearch=()=>{
    return(
        <body>
            <div className="top">
                <div className="logo">
                    <img src="img/main_logo.PNG" alt="로고 이미지"></img>
                </div>
                <div className="top_component">
                    <div className="search_box">
                        <form method="post" action="usersearch.php">
                            <select name="user_search">
                                <option value="id">아이디</option>
                                <option value="nickname">닉네임</option>
                            </select>
                            <input type="text" placeholder="키워드를 입력하세요..."></input>
                            <button type="submit">검색</button>
                        </form>
                    </div>
                    <div className="logout">
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
            <div className="usersearch-bottom">
                <div className="user_container">
                    <div className="user">
                        <img src="img/user1.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">사용자1</h3>
                            <h3 id="user_id">@user1</h3>
                        </div>   
                    </div>
                    <div className="user">
                        <img src="img/user2.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">사용자2</h3>
                            <h3 id="user_id">@user2</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/user3.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">사용자3</h3>
                            <h3 id="user_id">@user3</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/user4.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">사용자4</h3>
                            <h3 id="user_id">@user4</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/user5.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">사용자5</h3>
                            <h3 id="user_id">@user5</h3>
                        </div>
                    </div>
                    <div className="user">
                        <img src="img/user6.jpg" id="profile" alt="프로필 사진"></img>
                        <div className="user_information">
                            <h3 id="user_nickname">사용자6</h3>
                            <h3 id="user_id">@user6</h3>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default UserSearch;