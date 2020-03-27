import React from 'react'
import './header_Search.css'

export default function Header_Search() {
  return (
    <div className="search_box">
    <div>
      <input id="text_box" type="text"/>
    </div>
      <div class="search_bar">
      <input class="search_button" type="submit" value="Google 검색"/>
      <input class="search_button" type="submit" value="I'm Feeling Lucky"/>
    </div>
    </div>
  );
}
