// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  //  c = 'siyaram';
  pageSize = 15;

  apiKey = process.env.REACT_APP_NE_API_KEY;
  // apiKey = "272daa27fd8a45efa6982845c17c3346";
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState ({progress:progress});
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Routes>
            {/* <Route exact path='/science' element={<News  setProgress={this.setProgress} key = 'science'pageSize={5} country={'in'} apiKey={this.apiKey} category={'science'} />} /> */}
            <Route exact path='/science' element={<News  setProgress={this.setProgress} key = 'science'pageSize={this.pageSize} country={'in'} apiKey={this.apiKey} category={'science'} />} />
            <Route exact path='/' element={<News  setProgress={this.setProgress} key='general' pageSize={this.pageSize} country={'in'} apiKey={this.apiKey} category={'general'} />} />
              <Route exact path='/business' element={<News  setProgress={this.setProgress} key = 'business' pageSize={this.pageSize} country={'in'} apiKey={this.apiKey} category={'business'} />}/>
                    <Route exact path='/sports' element={<News  setProgress={this.setProgress} key = 'sports'pageSize={this.pageSize} country={'in'} apiKey={this.apiKey} category={'sports'} />}/>
                    <Route exact path='/entertainment' element={<News  setProgress={this.setProgress} key = 'entertainment' pageSize={this.pageSize} country={'in'} apiKey={this.apiKey} category={'entertainment'} />}/>


        </Routes>
        </Router>
        {/* hello this is {this.c} */}
        
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
