import React from "react";
import styled from "styled-components";

const MyPageHeader = styled.h2`
    font-size: 30pt;
    text-align: center;
    color: black;
`;

const TextBox = styled.div`
    padding : 20px;
    margin : 20px;


    width: 800px;
    height : 500px;
    font-size:25pt;
   
    outline: solid 3px black;

    margin: 0 auto;
`;

const Box = styled.div`
    padding : 20px;
    margin : 20px
`;



function MyPage () {
    return (
        <section style={{background:'white'}}>
            <div>
                <MyPageHeader>마이 페이지</MyPageHeader>
            </div>
            <TextBox>
                <div style={{margin: '10px 10px'}}>
                    <a style={{color: 'black'}}>회원 정보</a>

                </div>
                
                <div style={{outline: 'dashed 1px black', margin:'10px 10px'}}>
                    <label style={{fontSize:'16pt' , outlineColor: 'black'}}>
                        <li style={{color: 'black', padding : '10px 10px'}}>전화번호: </li>
                        <li style={{color: 'black', padding : '10px 10px'}}>이름:</li>
                        <li style={{color: 'black', padding : '10px 10px'}}>이메일:</li>
                        <li style={{color: 'black', padding : '10px 10px'}}>비밀번호:</li>
                        <li style={{color: 'black', padding : '10px 10px'}}>생일:</li>
                    </label>
                </div>

                <div>
                    <label style={{ outline: 'dashed 1px red', margin:'10px 10px'}}>
                        <a style={{fontSize:'20pt' ,color: 'red'}}>탈퇴하기</a>
                    </label>

                </div>

            </TextBox>
            <div>
                <br/>
            </div>

            
            
        </section>
       

    );
}

export default MyPage;