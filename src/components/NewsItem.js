import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description,imgURL,newsUrl ,date,author,source} = this.props;
    return (
      <div className="card" style={{ width: "18" }}>

        {/* <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'98%'}}>
    {source}
    <span className="visually-hidden">unread messages</span> */}
        <span className= "badge rounded-pill bg-danger" style={{ position: 'absolute',right: 0, display: 'flex', justifyContent: 'flex-end'}}>{source}
  </span>
        <img src={imgURL?imgURL:'https://c.ndtvimg.com/2023-10/3hpav6q8_benjamin-netanyahu_625x300_08_October_23.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{ title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author?author:'Unkonown'} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Go somewhere</a>
        </div>
      </div>
    
    )
  }
}

export default NewsItem



