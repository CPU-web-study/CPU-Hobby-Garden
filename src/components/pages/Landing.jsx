

import React, { useState } from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
`
const FlexItem = styled.div`
  margin : 10px;
  padding: 20px;
  border-radius: 5px;


  text-align: center;
  font-size:30px;
`;


const MainComment = styled.h1`
  color: #32a852;
`

const StartButton = styled.button`
  background-color: #32a852;
  color:white;
  padding: 10px 20px;
  font-size:30px;
  border : none;
  border-radius : 20px;
  cursor: pointer;
  text-align: center;
`

const InputBox = styled.input`
  width:175px;
  height: 20px;

  margin : 1px;
  border-radius: 5px;
`

//  ;
//메인페이지니까 <div>안에 h1, h2, div 해놓고 큰제목, 그아래 작은제목, 그아래 로그인폼 이런식으로하면될것같아요

function Landing() {

  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleChangeId = (event) => {
    setId(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    alert(`ID: ${id}, password: ${password}`);
    event.preventDefault();
  };

  return (
    <FlexContainer>
      <FlexItem><MainComment>SHARE YOUR HOBBIES!</MainComment> </FlexItem>

      <FlexItem> <h5>CPU부원들을 위한 취미 공유 플랫폼</h5> </FlexItem>
      
      <FlexItem> <StartButton>지금 시작하기</StartButton> </FlexItem>

      <FlexItem> 
        <label>
          <InputBox type="text" value={id} onChange={handleChangeId} />
          로그인 / 회원가입
        </label>

        <br/>

        <label>
          <InputBox type="text" value={password} onChange={handleChangePassword} />
          ID / Password 찾기
        </label>
      </FlexItem>
    </FlexContainer>
  );
}

export default Landing;
