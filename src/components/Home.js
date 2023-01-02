import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import requests from "../requests";

const Home=() =>{
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies
        title="Recommended For You"
        fetchUrl={requests.fetchTrending}
        isLarge
      />
      <Movies
        title="Disney+ Originals"
        fetchUrl={requests.fetchHotstarOriginals}
        isLarge
      />
      <Movies title="TOP RATED" fetchUrl={requests.fetchTopRated} isLarge />
      <Movies
        title="Action and Adventure"
        fetchUrl={requests.fetchActionMovies}
        isLarge
      />
      <Movies
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLarge
      />
      <Movies
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        isLarge
      />
      <Movies
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLarge
      />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
