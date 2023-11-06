// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


  const App = () => {
  //  c = 'siyaram';
 const pageSize = 15;

 const apiKey = process.env.REACT_APP_NE_API_KEY;
  // apiKey = "272daa27fd8a45efa6982845c17c3346";
  const [progress, setProgress] = useState(0);
 
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
          <Routes>
            {/* <Route exact path='/science' element={<News  setProgress={setProgress} key = 'science'pageSize={5} country={'in'} apiKey={apiKey} category={'science'} />} /> */}
            <Route exact path='/science' element={<News  setProgress={setProgress} key = 'science'pageSize={pageSize} country={'in'} apiKey={apiKey} category={'science'} />} />
            <Route exact path='/' element={<News  setProgress={setProgress} key='general' pageSize={pageSize} country={'in'} apiKey={apiKey} category={'general'} />} />
              <Route exact path='/business' element={<News  setProgress={setProgress} key = 'business' pageSize={pageSize} country={'in'} apiKey={apiKey} category={'business'} />}/>
                    <Route exact path='/sports' element={<News  setProgress={setProgress} key = 'sports'pageSize={pageSize} country={'in'} apiKey={apiKey} category={'sports'} />}/>
                    <Route exact path='/entertainment' element={<News  setProgress={setProgress} key = 'entertainment' pageSize={pageSize} country={'in'} apiKey={apiKey} category={'entertainment'} />}/>


        </Routes>
        </Router>
        {/* hello this is {c} */}
        
      </div>
    );
  
  }
  export default App;

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
