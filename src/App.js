import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import { ScrollContext } from 'react-router-scroll-4';
import AOS from 'aos' ;
import 'aos/dist/aos.css';

import './App.css' ;
import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;
import HeroList from './comps/HeroList.js' ;
import VillainList from './comps/VillainList.js' ;
import TeamList from './comps/TeamList.js' ;
import StoryList from './comps/StoryList.js' ;
import Detail from './comps/Detail.js' ;
import BigDetail from './comps/BigDetail.js' ;
import NotFound from './comps/Home/NotFound.js' ;

class App extends Component {
  resize = () => this.forceUpdate()

  componentDidMount() {
    AOS.init() ;
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <ScrollContext>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/hero' exact component={HeroList}/>
              <Route path='/villain' exact component={VillainList}/>
              <Route path='/team' exact component={TeamList}/>
              <Route path='/story' exact component={StoryList}/>
              <Route path='/hero/:name' component={Detail}/>
              <Route path='/villain/:name' component={Detail}/>
              <Route path='/team/:name' component={BigDetail}/>
              <Route path='/story/:name' component={BigDetail}/>
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </ScrollContext>
        </BrowserRouter>
      </div>
      );
  }
}

export default App;