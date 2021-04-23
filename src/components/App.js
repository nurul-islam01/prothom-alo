import './App.scss';
import logo from '../logo.png';
import React from 'react';
import Footer from './footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home/Home';
import NewsItem from './news-item/NewsItem';

function App() {

  return (
    <React.Fragment>
      <div className="header">
          <img src={logo} alt="Logo" className="header__logo"/>
      </div>
      
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news/:id" component={NewsItem} />
        </Switch>
      </Router>

      <Footer />
    </React.Fragment>
    
  );
}



export default App;
