import React from "react";
import styled from "styled-components";
import Hobby from "./Hobby";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import exampleImage1 from "../images/img1.png";
import exampleImage2 from "../images/Image_hack.jpg";
import exampleImage3 from "../images/Image_lol.jpg";
import exampleImage4 from "../images/Image_pubg.png";
import exampleImage5 from "../images/Image_okestra.jpg";
import exampleImage6 from "../images/Image_baseball.jpg";
import exampleImage7 from "../images/Image_react.png";


const Background = styled.div`
background-color:white;
`

const HobbyContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #171717;
`;

const HobbyProperty = styled.div`
  margin: 15px;
  padding: 10px;
  color: #fff;
  text-align: center;
  background-color: transparent;

  cursor: pointer;
`;

const HobbyList = styled.div`
  
  width:1290px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  display:flex;
`;

const HobbyItem = styled.div`
  wdith:250px;
  margin: 20px;
  padding: 20px;
  background-color: #32a852;
  border-radius : 15px;
`;

const ImageWrap = styled.div`
  margin: 0 auto
  
`;

const ExampleImage1 = styled.img`
    width: 230px; 
    height: 120px; 
    objectFit: cover; 
    padding: 5px 5px;

    border-radius: 10px;
`;



function SearchHobby() {
  return (
    <div style={{background:'whitesmoke'}}>

      <HobbyContainer>
        <HobbyProperty>게임</HobbyProperty>
        <HobbyProperty>운동/건강</HobbyProperty>
        <HobbyProperty>푸드</HobbyProperty>
        <HobbyProperty>IT</HobbyProperty>
        <HobbyProperty>주식/투자</HobbyProperty>
        <HobbyProperty>친목</HobbyProperty>
        <HobbyProperty>음악</HobbyProperty>
        <HobbyProperty>영화</HobbyProperty>
        <HobbyProperty>기타</HobbyProperty>
      </HobbyContainer>

      <HobbyList>
        <HobbyItem>


          <Routes>
            <Route 
              path='/Hobby' 
              component={Hobby} 
              exact={true}
            />
          </Routes>

          <ImageWrap>
            <ExampleImage1 src={exampleImage1} alt="" />
          </ImageWrap> 

          <Link to="/Hobby"> 
            <h3>리썰컴퍼니 할사람 구합니다!</h3>
          </Link>

          작성자: JeongMinLim<br/>
          취미명: Lethal Company<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 조금 질림(DoHyunPark)<br/>

        </HobbyItem>
        <HobbyItem>
          <ImageWrap>
            <ExampleImage1 src={exampleImage2} alt="" />
          </ImageWrap> 


          <h3>웹사이트 해킹 스터디 모집</h3>
          작성자: Anonymous<br/>
          취미명: Hacking<br/>
          분류: IT<br/>
          요구사항: 해킹에 대한 흥미<br/>
          시간: 10PM-1AM<br/>
          평점: 3<br/>
          후기: 개어려움(JeongMinLim)<br/>

        </HobbyItem>
        <HobbyItem>
          <ImageWrap>
            <ExampleImage1 src={exampleImage3} alt="" />
          </ImageWrap> 
          <h3>롤 자랭할 사람 구해요</h3>
           ️
          작성자: hanulbae<br/>
          취미명: League Of Legend<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 8PM-12PM<br/>
          평점: 4<br/>
          후기: 재미있음(DoHyunPark)<br/>

        </HobbyItem>
        <HobbyItem>
          <ImageWrap>
            <ExampleImage1 src={exampleImage4} alt="" />
          </ImageWrap> 
          <h3>배그 할 사람?</h3>
          작성자: DoHyunPark<br/>
          취미명: PUBG<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 사격 실력 증가(hanulbae)<br/>

        </HobbyItem>
        <HobbyItem>
          <ImageWrap>
            <ExampleImage1 src={exampleImage5} alt="" />
          </ImageWrap> 
          <h3>오케스트라 관람 모임</h3>
           ️
          작성자: JeongMinLim<br/>
          취미명: Lethal Company<br/>
          분류: 음악<br/>
          요구사항: 음악에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 4<br/>
          후기: 교양 있음(Anonymous)<br/>

        </HobbyItem>
        <HobbyItem>
          <ImageWrap>
            <ExampleImage1 src={exampleImage6} alt="" />
          </ImageWrap> 
          <h3>한화 팬만 오세요</h3>
           ️
          작성자: ori<br/>
          취미명: BaseBall<br/>
          분류: 친목<br/>
          요구사항: 야구에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 살짝 과격함(DoHyunPark)<br/>

        </HobbyItem>
        <HobbyItem>
          <ImageWrap>
            <ExampleImage1 src={exampleImage7} alt="" />
          </ImageWrap> 
          <h3>React 스터디 모집</h3>
           ️
          작성자: hanulBae<br/>
          취미명: React<br/>
          분류: IT<br/>
          요구사항: IT에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 쉬움(Anonymous)<br/>

        </HobbyItem>

      </HobbyList>

    </div>
    

  );
}

export default SearchHobby;
