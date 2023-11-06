import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
 const capitalizeFLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
    
  
  const updateNews = async() =>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(45);
    let parsedData = await data.json();
    props.setProgress(85);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
}
  useEffect(() => {
    // eslint-disable-next-line
    document.title = `${capitalizeFLetter(props.category)} - News Monkey `;
    // eslint-disable-next-line
    updateNews();
    // eslint-disable-next-line
  //Runs on the first render
  //And any time any dependency value changes
}, []);
  
//  const handlePrevious = async () => {
//   setPage(  page - 1 );
//     updateNews();
    
//   };
//   const handleNext = async () => {
//     setPage(  page + 1 );
//     updateNews();
//   };
  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page+1}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setPage(page + 1 );
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };


    return (
      <>
      {/* // <div className="container my-3"> */}
        <h1 className="text-center" style={{marginTop : '95px'}}>
          Top {capitalizeFLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {/* {!this.state.loading && */}
              {articles.map((ele) => (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele ? ele.title : ""}
                    description={ele ? ele.description : ""}
                    imgURL={ele.urlToImage}
                    newsUrl={ele.url}
                    date={ele.publishedAt}
                    author={ele.author}
                    source={ele.source.name}
                  />
                </div>
              ))}
              </div>
           
          </div>
        </InfiniteScroll>
       
        </>
    );
  
}
News.propTypes = {
  country: "in",
  pageSize: 5,
  category: "general",
  
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
