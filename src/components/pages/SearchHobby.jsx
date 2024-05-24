import React from "react";
import styled from "styled-components";
import Hobby from "./Hobby";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";



const Background = styled.div`
background-color:white;
`

const HobbyContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
`;

const HobbyItem = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #32a852;
  border-radius : 15px;
`;

const ImageWrap = styled.div`
  margin: 0 auto
`;



function SearchHobby() {
  return (
    <div>

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

          {/* <ImageWrap>
            <img src={exampleImage} alt="" />
          </ImageWrap> */}

          <Link to="/Hobby"> 
            <h2>리썰컴퍼니 할사람 구합니다!</h2>
          </Link>

          <br/>
           ️
          작성자: JeongMinLim<br/>
          취미명: Lethal Company<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 조금 질림(DoHyunPark)<br/>

        </HobbyItem>
        <HobbyItem>


          <h3>리썰컴퍼니 할사람 구합니다!</h3>
           ️
          작성자: JeongMinLim<br/>
          취미명: Lethal Company<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 조금 질림(DoHyunPark)<br/>

        </HobbyItem>
        <HobbyItem>
          <h3>리썰컴퍼니 할사람 구합니다!</h3>
           ️
          작성자: JeongMinLim<br/>
          취미명: Lethal Company<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 조금 질림(DoHyunPark)<br/>

        </HobbyItem>
        <HobbyItem>
          <h3>리썰컴퍼니 할사람 구합니다!</h3>
           ️
          작성자: JeongMinLim<br/>
          취미명: Lethal Company<br/>
          분류: 게임<br/>
          요구사항: 게임에 대한 흥미<br/>
          시간: 상시<br/>
          평점: 3<br/>
          후기: 조금 질림(DoHyunPark)<br/>

        </HobbyItem>
      </HobbyList>

    </div>
    

  );
}

export default SearchHobby;
