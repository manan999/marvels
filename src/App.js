import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ;

import './App.css' ;
import StreamList from './comps/StreamList.js' ;
import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/heroes' component={StreamList}/>
            <Route path='/villains'component={StreamList}/>
            <Route path='/teams' component={StreamList}/>
            <Route path='/comics' component={StreamList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
