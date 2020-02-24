import React,{ Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Movie from './views/Movie'
import Music from './views/Music'
import MovieDetail from './views/MovieDetail'
import MusicDetail from './views/MusicDetail'
import { Icon } from 'antd';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="tab">
          <Router>
            <ul>
              <li>
                <Link className="movie" to="/">
                  <Icon type="video-camera" />
                  <p>电影</p>
                </Link>
              </li>
              <li>
                <Link className="music" to="/music">
                  <Icon type="customer-service" />
                  <p>音乐</p>
                </Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Movie}></Route>
              <Route path="/music" component={Music}></Route>
              <Route path="/movieDetail" component={MovieDetail}></Route>
              <Route path="/musicDetail" component={MusicDetail}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;