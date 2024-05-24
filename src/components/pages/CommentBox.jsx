import React, { useRef, useState } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import Comment from "./Comment";
import { UseTimeStamp } from "./UseTimeStamp";


const InputBox = styled.input`
    width:1000px;
    height: 70px;

    margin : 1px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

`;

const RegisterBotton = styled.button`
background-color: #32a852;
    color:white;
    padding: 10px 10px;
    font-size:30px;
    border : none;
    border-radius : 20px;
    cursor: pointer;
    text-align: center;
    margin: 20px;
    
`;




function CommentBox(props) {

    const timeAgo = UseTimeStamp(Date());

    const [comment, setComment] = useState(initialValue);
    const [me, setMe] = useState("Host");

    const textRef = useRef('');

    const handleClick = () => {
        handleAdd();
    };

    const handleKeyDown = (e) => {
        if( e.key === 'Enter' && e.nativeEvent.isComposing === false) 
            handleAdd(); 
    };

    const handleAdd = () => {
        const text = textRef.current.value.trim();

        if(text === '') {
            alert('공백을 제외하고 한 글자 이상 입력해주시기 바랍니다.');
            textRef.current.value='';
            return;
        }

        setComment([...comment, {id: new Date(), text, status: 'active'}]);
        textRef.current.value = '';
    };
    
    return ( 
        <section>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>   
            <InputBox 
                type="text" 
                ref={textRef}

                onKeyDown={handleKeyDown}
                style={{fontSize:17 }}
                placeholder="여기에 댓글을 입력하세요. 욕설, 도배, 비방, 루머 게시글은 누군가에게 상처로 남을 수 있습니다."/>

                <RegisterBotton onClick={handleClick}>댓글 작성</RegisterBotton>
            </div>

            <ul>
                {comment.map((comments) => (
                    <div>  
                        <li style={{color: 'white', fontSize: '15pt', margin : '10px'}}>작성자: {me} ⋯ {timeAgo}</li>
                        <label key={comments.id}>{comments.text}</label>
                    </div>
                ))}
            </ul>
        </section>
    );
}

const initialValue = [
    { id: '123', text: 'ㅋㅋ', status: 'active' },
    { id: '124', text: '안녕하세요', status: 'active' },
  ];

export default CommentBox;