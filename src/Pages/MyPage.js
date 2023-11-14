import './MyPage.css';

const MyPage=()=>{
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
            <div className="mypage-bottom">
                <table>
                    <tr>
                        <td colspan="5" align="center">
                            <div id="img-container">
                                <label for="fileInput" id="fileInputLabel">
                                    <img src="img/set.png"></img>
                                </label>
                                <input type="file" id="fileInput" onchange="loadFile(this)"></input>
                                <p id="fileName"></p>
                                <img id="uploadedImg" class="img" src="img/baseprofile.jpg"></img>
                                <img id="removeBtn" src="set.png" onclick="removeImage()"></img>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5" align="center">
                            <h2>User</h2>
                    </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <p id="nickname_label">닉네임</p>
                        </td>
                        <td>
                            <p>잼민</p>
                        </td>
                        <td><img id="nicknamech" src="img/set.png" onclick=""></img></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <p id="id_label">아이디</p>
                        </td>
                        <td>
                            <p>@jammins</p>
                        </td>
                        <td><img id="idch" src="img/set.png" onclick=""></img></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <p id="MBTI_label">MBTI</p>
                        </td>
                        <td>
                            <p>ENFP</p>
                        </td>
                        <td><img id="mbtich" src="img/set.png" onclick=""></img></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><p id="genre_label">#선호장르</p></td>
                        <td>#스릴러</td>
                        <td><img id="genrech" src="img/set.png" onclick=""></img></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
                <h2>내가 쓴 리뷰</h2>
                <div class="my_review">
                    <div class="review_space">
                        <button id="revisebtn">수정</button>
                        <button id="deletebtn">삭제</button>
                        <div class="review"></div>
                        <button id="revisebtn">수정</button>
                        <button id="deletebtn">삭제</button>
                        <div class="review"></div>
                        <button id="revisebtn">수정</button>
                        <button id="deletebtn">삭제</button>
                        <div class="review"></div>
                        <button id="revisebtn">수정</button>
                        <button id="deletebtn">삭제</button>
                        <div class="review"></div>
                    </div>
                </div>
                <h2 >내가 찜한 영화</h2>
                <div class="saved_movie">
                    <img src="img/sample_poster.jpg"></img>
                    <img src="img/sample_poster.jpg"></img>
                    <img src="img/sample_poster.jpg"></img>
                    <img src="img/sample_poster.jpg"></img>
                    <img src="img/sample_poster.jpg"></img>
                    <img src="img/sample_poster.jpg"></img>
                </div>
            </div>
        </body>
    );
};

export default MyPage;