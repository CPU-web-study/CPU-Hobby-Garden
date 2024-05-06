import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: white;
  color: black;
  display: flex;
  .footer-inner {
    margin: auto;
  }
`;

function Footer() {
  return (
    <StyledFooter className="footer">
      <div className="footer-inner">
        <h3>CPU 웹 개발팀 제작</h3>
      </div>
    </StyledFooter>
  );
}

export default Footer;
