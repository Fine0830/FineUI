/**
 * Created by Fine on 2016/11/9.
 */

import React from 'react';
import { Link } from 'react-router';

// import init from './Wave';
import './style';

class Home extends React.Component {

  componentDidMount() {
    // init();
  }

  render() {
    return (
      <div className="homePage">
        <div className="rowOne">
          <div>
            <Link to="life">My Life</Link>
          </div>
          <div />
        </div>
        <div className="rowTwo">
          <div />
          <div>
            <Link to="technology">Technology</Link>
          </div>
        </div>
        <div className="rowThree">
          <div>
            <Link to="projects">Projects</Link>
          </div>
          <div />
        </div>
        <div className="rowFour">
          <div />
          <div>
            <Link to="contact">Contact</Link>
          </div>
          <div>
            <Link to="about">About Me</Link>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
