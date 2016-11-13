/**
 * Created by Fine on 2016/11/9.
 */
import React from 'react';
import { Link } from 'react-router';

import './style';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div>
          <div className="fine_work" />
          <Link to="home">
            <div className="goBack">Go Back</div>
          </Link>
        </div>
        <div>
        <h2>Contact Ways</h2>
        <p>
          <span>Github</span>
          <a href="//github.com/Fine0830" target="_black">https://github.com/Fine0830</a>
        </p>
        <p>
          <span>Blog</span>
          <a href="//blog.csdn.net/fanxue456" target="_black">http://blog.csdn.net/fanxue456</a>
        </p>
        <p>
          <span>Email</span>
          <a>fine0830@qq.com</a>
        </p>
        <p>
          <span>QQ Group</span>
          <a>BI前端开发 548924174</a>
        </p>
        </div>
        <div />
      </div>
    );
  }
}

module.exports = Contact;
