import styled from "styled-components";
const StyledPagination = styled.div`
    display: flex;
    padding-left;
    align-items: center;
    transition: all 0.5s;
`;

interface IButton {
  selected?: boolean
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  color: ${(props: IButton) => (props.selected ? "black" : "white")};
  background: ${(props: IButton) => (props.selected ? "white" : "black")};
  margin: 5px;
  justify-content: ;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  transition: all 0.2s;
`;

Button.defaultProps = {
  selected: false
}

export { Button, StyledPagination };
