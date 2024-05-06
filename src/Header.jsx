import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #32a852;
  .header-inner {
    margin: auto 20px auto 20px;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .menu {
      margin: auto 20px auto auto;
      max-width: 550px;
      display: -webkit-flex;
      -webkit-flex-direction: row;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-grow: 1;
      list-style-type: none;
    }
  }
`;

function Header() {
  return (
    <StyledHeader className="header">
      <div className="header-inner">
        <h1>
          <a href={`/`}>CPU HOBBY GARDEN</a>
        </h1>
        <ul className="menu">
          <li>
            <a href={`/search`}>취미 찾기</a>
          </li>
          <li>
            <a href={`/add`}>취미 등록</a>
          </li>
          <li>
            <a href={`/freeboard`}>자유게시판</a>
          </li>
          <li>
            <a href={`/signin`}>로그인/회원가입</a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
