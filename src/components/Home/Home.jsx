import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Article from "../Article/Article";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const [news, setNews] = useState([]);
  const [newsPage, setNewsPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getFetchUrl = () => {
    return `https://newsscraperapi.bartoszmagiera.me/api/v1/news?page=${newsPage}`;
  };

  const fetchNews = async () => {
    const response = await axios.get(getFetchUrl());
    setNews((state) => [...state, ...JSON.parse(response.data.result)]);
    setNewsPage((state) => state + 1);
    setHasMore(response.data.hasNext);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="mt-4 w-full md:w-4/5 flex flex-row justify-center items-center overflow-auto">
        <InfiniteScroll
          className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4"
          dataLength={news.length}
          next={fetchNews}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          {news.map((article, index) => (
            <Article key={index} data={article} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
