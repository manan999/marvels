import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import { ScrollContext } from 'react-router-scroll-4';
import AOS from 'aos' ;
import 'aos/dist/aos.css';

import './App.css' ;
import Header from './comps/Header/Header.js' ;
import Home from './comps/Home/Home.js' ;
import HeroPage from './comps/pages/HeroPage.js' ;
import VillainPage from './comps/pages/VillainPage.js' ;
import TeamPage from './comps/pages/TeamPage.js' ;
import StoryPage from './comps/pages/StoryPage.js' ;
import Detail from './comps/detail/Detail.js' ;
import BigDetail from './comps/detail/BigDetail.js' ;
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

              <Route path='/hero' exact component={HeroPage}/>
              <Route path='/villain' exact component={VillainPage}/>
              <Route path='/team' exact component={TeamPage}/>
              <Route path='/story' exact component={StoryPage}/>
              
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