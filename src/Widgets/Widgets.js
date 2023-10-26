import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className='widgets__searchIcon' />
          <input placeholder='Search Twitter' />
        </div>

        <div className='widgets__widgetContainer'>
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1717242164940280156'} />
          <TwitterTimelineEmbed sourceType='profile' screenName='igim11_1164' options={{height: 400}} />
          <TwitterShareButton url='' options={{ text: "#reactjs is awesome", via: "igim11"}} />
        </div>
    </div>
  )
}

export default Widgets