import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
    
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  // articles = [
  //   {
  //     "source": {
  //       "id": "talksport",
  //       "name": "TalkSport"
  //     },
  //     "author": "Josh Fordham",
  //     "title": "Manchester United-supporting India star Jasprit Bumrah honours Marcus Rashford at Cricket World Cup...",
  //     "description": "Marcus Rashford’s celebration continues to go global as one Indian cricket star emulated the Manchester United forward at the Cricket World Cup. Rashford starting performing a celebration in …",
  //     "url": "https://talksport.com/sport/cricket/1597052/man-utd-marcus-rashford-jasprit-bumrah-india/",
  //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/10/DK-TALKSPORT-RASHFORD.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
  //     "publishedAt": "2023-10-11T09:42:25Z",
  //     "content": "Marcus Rashford's celebration continues to go global as one Indian cricket star emulated the Manchester United forward at the Cricket World Cup.\r\nRashford starting performing a celebration in which h… [+1257 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-sport",
  //       "name": "BBC Sport"
  //     },
  //     "author": null,
  //     "title": "World Cup: Afghanistan bat first against hosts India",
  //     "description": "Follow live text, in-play video clips and radio commentary as India play Afghanistan in the Men's Cricket World Cup 2023.",
  //     "url": "http://www.bbc.co.uk/sport/live/cricket/66854477",
  //     "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
  //     "publishedAt": "2023-10-11T08:52:21.3390278Z",
  //     "content": "India: Rohit Sharma (c), Ishan Kishan, Virat Kohli, Shreyas Iyer, KL Rahul (wk), Hardik Pandya, Ravindra Jadeja, Shardul Thakur, Mohammed Siraj, Jasprit Bumrah, Kuldeep Yadav. \r\nAfghanistan: Rahmanul… [+188 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]

  capitalizeFLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      
    };
    document.title = `${this.capitalizeFLetter(
      this.props.category
    )} - News Monkey `;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.props.page}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(45);
    let parsedData = await data.json();
    this.props.setProgress(85);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData =await data.json();
    //  this.setState({
    //    articles: parsedData.articles,
    //    totalResults: parsedData.totalResults,
    //    loading: false
    //  });
    this.updateNews();
  }
  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page -1 }`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData =await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false
    // });
  };
  handleNext = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) ){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     articles: parsedData.articles,
    //     page: this.state.page + 1,
    //     loading: false

    //   });
    //   }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
    // }
    // if (this.state.page +1 >Math.ceil(this.state.totalResults/ 20) ) {

    // }
    // else {
    //   // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
    //   // //let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=272daa27fd8a45efa6982845c17c3346&pageSize=${this.props.pageSize}&page=${this.state.page +1 }`;
    //   // let data = await fetch(url);
    //   // let parsedData = await data.json();
    //   // this.setState({
    //   //   articles: parsedData.articles,
    //   //   page: this.state.page + 1,
    //   //   loading:false
    //   // });
    //   this.setState({ page: this.state.page - 1 });
    //   this.updateNews();
    // }
  };
  fetchData = async () => {
    this.setState({ page: this.setState.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    });
  };

  render() {
    return (
      <>
      {/* // <div className="container my-3"> */}
        <h1 className="text-center">
          Top {this.capitalizeFLetter(this.props.category)} Headines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {/* {!this.state.loading && */}
              {this.state.articles.map((ele) => (
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
            {/* <NewsItem title={ele?ele.title.slice(0,45):''} description={ele?ele.description.slice(0,88):''} imgURL={ele.urlToImage} newsUrl={ele.url} /></div>)} */}
            {/* <div className='col-md-3'>
            <NewsItem title="1"desc="desc1" imgURL="https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg" /></div>
            <div className='col-md-3'>
            <NewsItem title="2" desc="desc2" /></div>
            <div className='col-md-3'>
            <NewsItem title="3"desc="desc3" /></div> */}
          </div>
        </InfiniteScroll>
        {/* <div className='row'>
          <div className='col-md-3'>
            <NewsItem title="1"desc="desc1" /></div>
            <div className='col-md-3'>
            <NewsItem title="2" desc="desc2" /></div>
            <div className='col-md-3'>
            <NewsItem title="6"desc="desc3" /></div>
        </div> */}
        {/* <div className=" container d-flex justify-content-between">
          <button
            className="btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevious}
          >
            &larr;Previous
          </button>
          <button
            className="btn-dark"
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 20)
            }
            onClick={this.handleNext}
          >
            Next&rarr;
          </button>
        </div> */}
        {/* // </div> */}
        </>
    );
  }
}

export default News;
