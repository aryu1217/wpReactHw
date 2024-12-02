import "./App.css";
import React from "react";
import Champion from "./Champion";

const App = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="content">
        <Header />
        <FavoriteChampion title="좋아하는 챔피언"></FavoriteChampion>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>나의 취미</h1>
      <h2>League of Legends</h2>
    </div>
  );
};

const FavoriteChampion = (props) => {
  return (
    <div className="favoritechampion">
      <div className="favoritechampiotn">{props.title}</div>
      <Champion title="Nidalee" line="정글" />
      <Champion title="Reksai" line="정글" />
      <Champion title="Leesin" line="정글" />
    </div>
  );
};

export default App;
