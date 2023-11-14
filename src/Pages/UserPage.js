import './UserPage.css';

const Userpage = () => {
    return (
      <body>
        <div className="top">
          <div className="logo">
            <img src="img/main_logo.PNG" alt="로고 이미지" />
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
  
        <div className="userpage-bottom">
          <table>
            <tr>
              <td colSpan="2">
                <img className='profile_img' src="img/baseprofile.jpg" alt="프로필 이미지" />
              </td>
            </tr>
            <tr>
              <td>
                <p id="nickname_label">닉네임</p>
              </td>
              <td>
                <p>지해</p>
              </td>
            </tr>
            <tr>
              <td>
                <p id="id_label">아이디</p>
              </td>
              <td>
                <p>@jihae</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="subscribe" onClick="">
                  구독
                </button>
              </td>
            </tr>
          </table>
  
          <div>
            <br />
            <h3>지해님이 작성한 리뷰</h3>
            <div className="my_review">
              <div className="review_space">
                <div className="review"></div>
                <div className="review"></div>
                <div className="review"></div>
                <div className="review"></div>
                <div className="review"></div>
                <div className="review"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  };
  
  export default Userpage;