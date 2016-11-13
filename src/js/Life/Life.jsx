/**
 * Created by Fine on 2016/11/9.
 */
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import './style.css';

class Life extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.life ul li').each(function() {
      var fold = $(this).find('.fold');

      if (fold.is(':hidden')) {
        $(this).width(400);
      }
      else {
        $(this).width(80);
      }
    });
    $('.life ul li').click(function() {
      $(this).animate({width: 400}, 200);
      $(this).find('.unfold').show();
      $(this).find('.fold').hide();
      $(this).siblings().animate({width: 80}, 200);
      $(this).siblings().find('.unfold').hide();
      $(this).siblings().find('.fold').show();
    });
  }

  render() {
    return (
      <div className="life">
        <div className="menuList">
          <div>
            <h2>Life</h2>
            <p>
              &nbsp;&nbsp;
              Life experience a youth, only to hear a sound of bloom, see a flower falls silent,
              and then press.We know life is short.
              So forgive quickly,kiss slowly,love truly,laugh uncotrollably,
              never regret anything that made us smile.<br />
              <br />
              &nbsp;&nbsp;
              My hobbies are music, travel, tea culture, cultivation flowers and so on.
            </p>
          </div>
          <Link to="home">
            <div className="goBack">Go Back</div>
          </Link>
        </div>
		<ul>
			<li className="li1" style= {{width: 80 + 'px'}}>
				<div className="fold" style={{display: 'block'}} />
				<div className="unfold" style={{display: 'none'}} />
			</li>
			<li className="li2" style={{width: 80 + 'px'}}>
				<div className="fold" style={{display: 'block'}} />
				<div className="unfold" style={{display: 'none'}} />
			</li>
			<li className="li3" style={{width: 80 + 'px'}}>
				<div className="fold" style={{display: 'block'}} />
				<div className="unfold" style={{display: 'none'}} />
			</li>
			<li className="li4" style={{width: 80 + 'px'}}>
				<div className="fold" style={{display: 'block'}} />
				<div className="unfold" style={{display: 'none'}} />
			</li>
			<li className="li5" style={{width: 80 + 'px'}}>
				<div className="fold" style={{display: 'block'}} />
				<div className="unfold" style={{display: 'none'}} />
			</li>
			<li className="li6" style={{width: 400 + 'px'}}>
				<div className="fold" style={{display: 'none'}} />
				<div className="unfold" style={{display: 'block'}} />
			</li>
		</ul>
      </div>
    );
  }
}

module.exports = Life;
