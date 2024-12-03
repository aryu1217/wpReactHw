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
        <h2>좋아하는 챔피언</h2>
        <div className="champ-card">
          <FavoriteChampion></FavoriteChampion>
        </div>
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
      <div className="favoritechampiotn"></div>
      <Champion title="니달리" line="정글" />
      <Champion title="렉사이" line="정글" />
      <Champion title="리신" line="정글" />
    </div>
  );
};

export default App;
