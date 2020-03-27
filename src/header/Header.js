import React, { Fragment } from 'react'
import Header_Menu from "../header/header_contents/Header_Menu";
import './header.css';
import Header_Logo from './Header_Logo';
export default function Header() {

  return (
    <div className="Header">
      <div className="lolBody">
      <Header_Logo />
      <Header_Menu />
    </div>
    </div>
  );
}
