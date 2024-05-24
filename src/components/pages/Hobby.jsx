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
                <h1>취미찾기 게시판</h1>

            </div>
            <HorizonLine/>

            <Title>제목:</Title>
            <Title>
                날짜 : 
            </Title>

            <HorizonLine/>

            <Title>
                내용 :
            </Title>
            

            <HorizonLine/>

            
            <CommentBox /> 


            {/* <CommentList/> */}


        </HobbyBoard>


    );

}

export default Hobby;