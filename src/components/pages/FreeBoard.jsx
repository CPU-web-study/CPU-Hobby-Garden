import React from "react";
import styled from "styled-components";

const StyledFreeBoard = styled.div`
  background-color: transparent;
  flex-grow: 1;
`;

function FreeBoard() {
  return (
    <StyledFreeBoard className="">This is FreeBoard page.</StyledFreeBoard>
  );
}

export default FreeBoard;
