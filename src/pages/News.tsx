import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Mark from "../components/Mark/Mark";
import NewsPanel from "../components/NewsPanel/NewsPanel";
import Pagination from "../components/Pagination/Pagination";
import { TOP_STORY_IDS } from "../consts";

const News: React.FC = () =>{
  const limitNews = 10;
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  const fetchStoryIds = async () =>{
    try {
      const res = await fetch(TOP_STORY_IDS);
      const data = await res.json();
      setTopStoryIds(data.slice(0, 100));
      setCurrentPage(0);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageMove = (page: number) =>{
    setCurrentPage(page);
  }

  useEffect(() =>{
    fetchStoryIds();
  }, []);

  return(
    <>
      <Header>
        <Mark></Mark>
        <Pagination
          totalPageCount={Math.ceil(topStoryIds.length / limitNews)}
          currentPage={currentPage}
          pageMove={handlePageMove}
        />
        
      </Header>
      <NewsPanel></NewsPanel>
    </>
  )
}

export default News;