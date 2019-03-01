import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ;

import './App.css' ;
import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;
import HeroList from './comps/HeroList.js' ;
import VillainList from './comps/VillainList.js' ;
import TeamList from './comps/TeamList.js' ;
import StoryList from './comps/StoryList.js' ;


//import ConSearch from './comps/ConSearch/ConSearch.js' ;
//import StreamList from './comps/StreamList.js' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/hero' component={HeroList}/>
            <Route path='/villain'component={VillainList}/>
            <Route path='/team' component={TeamList}/>
            <Route path='/story' component={StoryList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <Route path='/consearch' component={ConSearch} />
