/**
 * Created by Fine on 2016/11/9.
 */
import React from 'react';
import { Link } from 'react-router';

import './style';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div>
          <div className="fine_work" />
          <Link to="home">
            <div className="goBack">Go Back</div>
          </Link>
        </div>
        <div>
        <h2>About Me</h2>
        <p>
          <span>Social Role</span>
          &nbsp;&nbsp; Now, I am a developer of font-end and data visualization
          about Busniness Intelligence.
          My work is coding,debug,hack and fix.
          I love my work, it makes my life full, and makes me confidence.
        </p>
        <p>
          <span>Life Attitude</span>
          &nbsp;&nbsp; I Like saying, like laughing, and like thinking. My eyes are not thick
          eyebrows, I hope to open-minded, warm and happy life.
        </p>
        <p>
          <span>Development Attitude</span>
          &nbsp;&nbsp; I love three things in this world.
          Sun, moon and you.Sun for morning,moon for night,and you forever.
        </p>
        </div>
        <div />
      </div>
    );
  }
}

module.exports = About;
