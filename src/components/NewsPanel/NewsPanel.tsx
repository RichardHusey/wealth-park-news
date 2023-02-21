import React from "react";
import { 
  StyledNewPanel,
  StyledCardPanel,
  BouncyInDiv,
  BouncyOutDiv,
 } from "./NewsPanelStyle";
 import Card from "../Card/Card";
 import { useEffect, useState } from "react";
type Props = {
  news: Array<number>;
}
const NewsPanel: React.FC<Props> = ({news}) =>{
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    setInitial(false);
    setTimeout(() => setInitial(true), 1000);
  }, [news]);
  return(
    <StyledNewPanel>
      {initial ? (
        <BouncyInDiv>100 Top News</BouncyInDiv>
      ) : (
        <BouncyOutDiv>100 Top News</BouncyOutDiv>
      )}
      <StyledCardPanel>
        {news.map((cardId, index) => (
          <Card key={`${index}-Card`} cardId={cardId}></Card>
        ))}
      </StyledCardPanel>
    </StyledNewPanel>
  )
}

export default NewsPanel;