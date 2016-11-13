/**
 * Created by Fine on 2016/11/9.
 */
import React from 'react';
import { Link } from 'react-router';
import './style.css';

class Technology extends React.Component {
  render() {
    return (
      <div className="technology">
        <div>
          <div className="introduction">
            <h2>Technology</h2>
          </div>
          <Link to="home">
            <div className="goBack">Go Back</div>
          </Link>
        </div>
        <div>
        <p>
          <span><b>Font-end</b></span>
          <a>
            <b>Technical foundation</b>
            <span>html5、css3、ecma、ajax、json</span>
          </a>
          <a>
            <b>frame and library</b>
            <span>backbone、angular、react、node、express</span>
          </a>
          <a>
            <b>CSS processors</b>
            <span>postcss、sass、less</span>
          </a>
          <a>
            <b>Module standard</b>
            <span>ES6、CommonJs、AMD</span>
          </a>
          <a>
            <b>Auto tools</b>
            <span>Webpack、gulp</span>
          </a>
          <a>
            <b>Other</b>
            <span>eslint、karma、phantomjs</span>
          </a>
        </p>
        <p>
          <span><b>Data visualization</b></span>
          <a>
            <b>Visualization frame and library</b>
            <span>d3、zrender、echarts、mapv、arcgis、threeJS</span>
          </a>
        </p>
        </div>
        <div />
      </div>
    );
  }
}

module.exports = Technology;
