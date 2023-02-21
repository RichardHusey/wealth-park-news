import styled from "styled-components";

interface ILoading {
  loading?: boolean
}
const StyledCard = styled.div`
  display: flex;
  width: 250px;
  height: 350px;
  border: 1px solid black;
  background: white;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  flex-direction: column;
  &:hover {
    box-shadow: 10px 10px 10px lightgray;
  }
  filter: blur(${(props: ILoading) => (props.loading ? "10px" : "0px")});
  transition: all 0.4s;
`;
const StyledCardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  width: 100%;
`;
const StyledNewsButton = styled.a`
  border: 1px solid black;
  background-color: black;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  &: hover {
    opacity: 0.4;
    cursor: pointer;
  }
  height: 30px;
  font-size: 1.1em;
  transition: opacity 0.2s;
`;
const StyledContent = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  border: 1px solid black;
  margin-top: 20px;
  flex-direction: column;
`;
const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const StyledScoreNumber = styled.h2`
  font-size: 1.2em;
`;

export {
  StyledCard,
  StyledCardHead,
  StyledNewsButton,
  StyledContent,
  StyledScore,
  StyledScoreNumber,
};
