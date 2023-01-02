import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "../axios";

const Detail = () => {
  const location = useLocation();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieKey, setMovieKey] = useState();
  const [anyMovieKey, setAnyMovieKey] = useState();
  const [tvKey, setTvKey] = useState();
  const [anyTvKey, setAnyTvKey] = useState();

  useEffect(() => {
    async function fetchVidKey() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${location.state.id}/videos?api_key=${API_KEY}&watch_region=IN&with_watch_providers=122`
      );
      let mov_key = request.data.results;

      mov_key.map((many) => {
        many.name === "Official Trailer" ||
        many.name === "Main Trailer" ||
        many.name === "Trailer" ||
        many.name === "Official HBO Max Trailer" ||
        many.name === "Trailer" ||
        many.name === "#TBT Trailer"
          ? setMovieKey(many.key)
          : setAnyMovieKey("no");
      });
    }
    fetchVidKey();
  }, [
    `https://api.themoviedb.org/3/movie/${location.state.id}/videos?api_key=${API_KEY}&with_watch_provider=122`,
  ]);

  useEffect(() => {
    async function fetchVidKey() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/tv/${location.state.id}/videos?api_key=${API_KEY}&watch_region=IN&with_watch_providers=122`
      );
      let mov_key = request.data.results;

      mov_key.map((many) => {
        many.name === "Official Trailer" ||
        many.name === "Main Trailer" ||
        many.name === "Trailer" ||
        many.name === "Official HBO Max Trailer" ||
        many.name === "Trailer" ||
        many.name === "#TBT Trailer"
          ? setTvKey(many.key)
          : setAnyTvKey("no");
      });
    }
    fetchVidKey();
  }, [
    `https://api.themoviedb.org/3/tv/${location.state.id}/videos?api_key=${API_KEY}&with_watch_provider=122`,
  ]);

  function playPopUp() {
    alert("Sorry, You need to subscribe");
  }

  function trailerPopUp() {
    {
      movieKey !== undefined
        ? window.open(`https://www.youtube.com/watch?v=${movieKey}`)
        : tvKey !== undefined
        ? window.open(`https://www.youtube.com/watch?v=${tvKey}`)
        : alert("Sorry, you can watch this soon ( Not available right now )");
    }
  }
  return (
    <Container>
      <Background>
        <img src={`${location.state.url + location.state.img}`} />
      </Background>

      <Title>{location.state.movie.title || location.state.movie.name}</Title>

      <Controls>
        <PlayBtn onClick={playPopUp}>
          <img src="/images/play-icon-black.png" />
          <span>play</span>
        </PlayBtn>
        <TrailerBtn onClick={trailerPopUp}>
          <img src="/images/play-icon-white.png" />
          <span>trailer</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img src="/images/group-icon.png" />
        </GroupWatchBtn>
      </Controls>

      <Desc>{location.state.movie.overview}</Desc>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  margin-top: 20vh;
  font-size: 50px;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2vw;
`;
const PlayBtn = styled.button`
  height: 56px;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerBtn = styled(PlayBtn)`
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;
const AddBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
  }
`;
const GroupWatchBtn = styled(AddBtn)`
  background-color: rgba(0, 0, 0);
`;
const Desc = styled.div`
  margin-top: 4vh;
  font-size: 20px;
  min-height: 20px;
  line-height: 1.4;
  max-width: 600px;
`;
