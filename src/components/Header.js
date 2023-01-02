import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Logo" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="homeIcon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="searchIcon" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlistIcon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="originalIcon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movieIcon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="seriesIcon" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src="./images/user.jpg" alt="profile" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x:hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;