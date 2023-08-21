import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';
import reddit from '../../pics/reddit1.svg'
import redditm from '../../pics/reddit2.svg'


function SideBar() {
  const subreddits = [
    'memes',
    "askReddit",
    "worldNews",
    "videos",
    "funny",
    "pics",
    "gaming",
    'movies',
    'news', 
    'gifs',
    'aww',
    'televison',
    'jokes',
    'science'
  ];
  const popular =['popular','rising','controversial'];
  return (
    <div id='sidenav__container'>
      <div id="sidenav__logo">
        <div id='redditLogoL'>
          <img src={reddit}/>
        </div>
        <div id='redditLogoS'>
          <img src={redditm}/>
        </div>
      </div>

      <ul id="sidenav__ul">

        {popular.map(subreddit => (
          <div className="sidenav__link">
            <li><Link to={`/${subreddit}`} className="fontNav">{subreddit}</Link></li>
          </div>
        ))}
        <li></li>
        <li></li>

        {subreddits.map(subreddit => (
          <div className="sidenav__link">
            <li><Link to={`/${subreddit}`} className="fontNav">{subreddit}</Link></li>
          </div>
        ))}

      </ul>
      <div id="sidenav__footer">

        <p><a href='https://github.com/abedsada/reddit-clone' target='_blank' className="fontNav">Source <span>Code</span></a></p>
        <p><a href='https://abedsada.github.io/Portfolio-Website/' target='_blank' className="fontNav">Contact</a></p>
      </div>
    </div>
  );
}

export default SideBar;
