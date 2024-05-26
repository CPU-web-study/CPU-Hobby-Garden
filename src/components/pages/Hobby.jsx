import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

const HobbyBoard = styled.div`

`;

const Title = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: transparent;
`
const HorizonLine = styled.div`
  width: 100%;
  text-align: center;
  border-Bottom: 0.5px solid #aaa;
  line-height: 0.1;
  margin: 10px 0 20px;
  padding : 10px;
`;


function Hobby(props) {
  
    return (
        <HobbyBoard>
            <div>   
                <h1>취미 게시판</h1>

            </div>
            <HorizonLine/>

            <Title>
                <h2>제목: 리썰컴퍼니 할 사람 구합니다! </h2>
                <a>작성자: 박도현</a>
                
            </Title>
            <Title>
                날짜 : 2024-05-25 21:30
            </Title>

            <HorizonLine/>

            <Title>
                내용 : 이 게임 재미있어요. 뉴비 환영.
            </Title>
            

            <HorizonLine/>

            
            <CommentBox /> 


            {/* <CommentList/> */}


        </HobbyBoard>


    );

}

export default Hobby;