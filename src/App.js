// import logo from './logo.svg';
// import './App.css';

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


import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage.js";
// import DiaryList from "./pages/DiaryList.js";
// import DiaryPage from "./pages/DiaryPage.js"
// import About from "./pages/About.js";
// import EPanpan from "./pages/EPanpan.js";
// import Edit from "./pages/Edit.js";
// import Album from "./pages/Album.js";

function App() {

  return (
    <div>
      <Router forceRefresh = {true}>
        <Switch>
          <Route exact path="/" component={()=><HomePage/>} />
          {/* <Route exact path="/diaries" component={()=><DiaryList/>} />
          <Route path="/diaries/:id" component={({ match })=><DiaryPage match = {match}/>} /> */}
          {/* <Route exact path="/about" component={()=><About/>} /> */}
          {/* <Route exact path="/epanpan" component={()=><EPanpan/>} />
          <Route exact path="/edit" component={()=><Edit/>} />
          <Route exact path="/album" component={()=><Album/>} /> */}
        </Switch>
      </Router>
    </div>
  );

  
}

export default App;