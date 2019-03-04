import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ;

import './App.css' ;
import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;
import HeroList from './comps/HeroList.js' ;
import VillainList from './comps/VillainList.js' ;
import TeamList from './comps/TeamList.js' ;
import StoryList from './comps/StoryList.js' ;
import Detail from './comps/Detail.js' ;
import BigDetail from './comps/BigDetail.js' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/hero' exact component={HeroList}/>
            <Route path='/villain' exact component={VillainList}/>
            <Route path='/team' exact component={TeamList}/>
            <Route path='/story' exact component={StoryList}/>
            <Route path='/hero/:name' component={Detail}/>
            <Route path='/villain/:name' component={Detail}/>
            <Route path='/team/:name' component={BigDetail}/>
            <Route path='/story/:name' component={BigDetail}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <Route path='/consearch' component={ConSearch} />
