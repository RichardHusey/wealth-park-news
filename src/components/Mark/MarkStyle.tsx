import styled from "styled-components";


const StyledMark = styled.div`
  display: flex;
  align-items: center;
`;
const MarkImg = styled.img.attrs({
  src: "https://wealth-park.com/wp_next/wp-content/themes/wp-next-landing-page/img/app/logo_inverse.svg",
  alt: "WealthPark",
})`
  height: 30px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export { StyledMark, MarkImg };