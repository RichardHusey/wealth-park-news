import React from "react";
import Header from "../components/Header/Header";
import Mark from "../components/Mark/Mark";
import NewsPanel from "../components/NewsPanel/NewsPanel";
import Pagination from "../components/Pagination/Pagination";

const News: React.FC = () =>{
  return(
    <>
      <Header>
        <Mark></Mark>
        <Pagination></Pagination>
        
      </Header>
      <NewsPanel></NewsPanel>
    </>
  )
}

export default News;