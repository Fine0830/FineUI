/**
 * Created by Fine on 2016/11/9.
 */
import React from 'react';
import './style.css';
import { Link } from 'react-router';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div>
          <div className="fine_work" />
          <Link to="home">
            <div className="goBack">Go Back</div>
          </Link>
        </div>
        <div>
        <h2>Projects</h2>
        <p>
          <span>React+ES6+Webpack</span>
          <a href="//github.com/Fine0830/DAD-layout-dashboard" target="_black">
            DAD-layout-dashboard
          </a>
        </p>
        <p>
          <span>Ng1.X+ES6+Webpack</span>
          <a href="//github.com/Fine0830/angular-file-tree" target="_black">
            angular-file-tree
          </a>
        </p>
        <p>
          <span>D3.js+Backbone</span>
          <a href="//github.com/Fine0830/FineChart-Saiku" target="_black">
            FineChart-Saiku
          </a>
        </p>
        <p>
          <span>Node+jq+mysql</span>
          <a href="//github.com/Fine0830/News-APP" target="_black">
            News-APP
          </a>
        </p>
        </div>
        <div />
      </div>
    );
  }
}

module.exports = Projects;
