import * as React from "react";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import {
  StyledCard,
  StyledCardHead,
  StyledNewsButton,
  StyledContent,
  StyledScore,
  StyledScoreNumber,
} from "./CardStyle";
import { BASE_URL } from "../../consts";
import { SUFFIX } from "../../consts";
import ReactLoading from "react-loading";

type Props = {
  cardId: number
}

type Card = {
  by: string;
  descendants: number;
  id: number,
  kids: Array<number>,
  score: number,
  time: number,
  title: string,
  type: string,
  url?: string
}

const Card: React.FC<Props> = ({cardId}) =>{
  const [isLoading, setLoading] = useState(false);
  const [card, setCard] = useState<Card | null>(null);
  
  const fetchCard = async (cardId: number) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}${cardId}${SUFFIX}`);
      const data = await res.json();
      setCard(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCard(cardId);
  }, [cardId]);
  return (
    <StyledCard>
      {!isLoading && card ? (
        <>
          <StyledCardHead>
            <StyledNewsButton href={`${card.url}`}>News</StyledNewsButton>
            <div>{new Date(card.time * 1000).toISOString().slice(0,10)}</div>
          </StyledCardHead>
          <StyledContent>
            <h2>{card.title} </h2>
          </StyledContent>
          <StyledScore>
            <StyledScoreNumber>Score: {card.score}</StyledScoreNumber>
            <StarRatings
              starRatedColor="#FF6347"
              rating={card.score / 10}
              numberOfStars={10}
              starDimension="20px"
              starSpacing="1px"
            />
          </StyledScore>
        </>
      ) : (
        <ReactLoading
          type="spokes"
          color="grey"
          height={`20%`}
          width={`20$`}
        ></ReactLoading>
      )}
    </StyledCard>
  )
}

export default Card;