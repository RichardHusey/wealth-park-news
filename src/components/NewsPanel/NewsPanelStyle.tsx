import styled, { keyframes } from "styled-components";

import { bounceIn, bounceOut } from "react-animations";

const StyledNewPanel = styled.div`
  flex: 1;
  display: flex;
  background-color: #f5f5f5;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  margin-top: 60px;
  overflow-y: auto;
`;
const StyledTitle = styled.h1`
  width: 100%;
  align-items: center;
  z-index: 2;
`;
const StyledCardPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const bounceInAnimation = keyframes`${bounceIn}`;
const bounceOutAnimation = keyframes`${bounceOut}`;

const BouncyInDiv = styled(StyledTitle)`
  animation: 1s ${bounceInAnimation};
`;
const BouncyOutDiv = styled(StyledTitle)`
  animation: 1s ${bounceOutAnimation};
`;

export {
  StyledNewPanel,
  StyledTitle,
  StyledCardPanel,
  BouncyInDiv,
  BouncyOutDiv,
};
