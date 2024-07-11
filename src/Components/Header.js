import React from "react";
import "./styles/Header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <div className="search-bar-text">
          <b>Ask me</b> - e.g: GreAI/ What the best way to looks like sympathic?
        </div>
        <div className="search-bar-input">
          <input type="text" placeholder="Gre AI" />
          <i className="eye-icon">
            <SearchOutlinedIcon />
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
