import React from 'react';
import { Carousel } from 'antd';
import { Icon } from 'antd';
import Wrap from './views/components/AppStyle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import Index from './views/components/Index'
import Coming from './views/components/Coming'
import City from './views/City'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="Wrap">
        <Wrap>
          <Carousel autoplay>
            <div className="contain">
              <img className="banner" src="https://static.maizuo.com/v5/upload/15ec8fffe58a7275380ff7c2937deca2.jpg?x-oss-process=image/quality,Q_70" />
            </div>
            <div className="contain">
              <img className="banner" src="https://static.maizuo.com/v5/upload/13648b1f3e9255a97a96cd6718ea844a.jpg?x-oss-process=image/quality,Q_70" />
            </div>
            <div className="contain">
              <img className="banner" src="https://static.maizuo.com/v5/upload/a065abe367c5e0920875f730d3adfc54.jpg?x-oss-process=image/quality,Q_70" />
            </div>
          </Carousel>
          <p className="address" onClick={this.handleCity}>
            武汉<Icon type="down" />
          </p>
          <Router>
            <ul className="tab">
              <li><Link to="/films/nowPlaying">正在热映</Link></li>
              <li><Link to="/films/comingSoon">即将上映</Link></li>
            </ul>
            <Switch>
              <Route exact path="/films/nowPlaying" component={Index}></Route>
              <Route path="/films/comingSoon" component={Coming}></Route>
              <Redirect from="/" to="/films/nowPlaying" />
            </Switch>
          </Router>
        </Wrap>
      </div>
    )
  }
  handleCity=()=>{
    console.log(1)
    this.props.history.push('/city')
  }
}

export default App;