import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ;

import './App.css' ;
import StreamList from './comps/StreamList.js' ;
import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;
import ConSearch from './comps/ConSearch/ConSearch.js' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/hero' component={StreamList}/>
            <Route path='/villain'component={StreamList}/>
            <Route path='/team' component={StreamList}/>
            <Route path='/story' component={StreamList}/>
            <Route path='/consea' component={ConSearch} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
