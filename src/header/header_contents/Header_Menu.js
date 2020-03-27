import React from 'react'
import { Link } from "react-router-dom";

import "./header_Menu.css"
export default function Header_Menu() {
  return (
    <div>
      <ul>
      <li><Link to="/home">홈</Link></li>
      <li><Link to="/info">챔피언 분석</Link></li>
      <li><Link to="/lank">랭킹</Link></li>
      <li><Link to="/community">커뮤니티</Link></li>
    </ul>
    </div>
  )
}
