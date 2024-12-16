import "./App.css";
import React from "react";
import Champion from "./Champion";
import axios from "axios";
import { useState, useEffect } from "react";

const SERVER_URL = "https://wphwbackend.onrender.com/";

const App = () => {
  const [champions, setChampions] = useState([]);

  const getChampions = async () => {
    try {
      const res = await axios.get(SERVER_URL);
      console.log(res);

      const sortedChampions = res.data.sort(
        (a, b) => a.name.localeCompare(b.name, "ko-KR") // 한국어 로케일로 정렬
      );

      setChampions(sortedChampions); // 정렬된 데이터를 상태에 저장

      setChampions(res.data);
    } catch (err) {
      console.log(err);

      setChampions([]);
    }
  };

  useEffect(() => {
    getChampions();
  }, []);

  return (
    <div>
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="content">
        <div className="header">
          <Header />
        </div>
        <div className="card-container">
          <Champlist title="좋아하는 챔피언 리스트" list={champions} />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Term Project. 취미 데이터 서버 개발</h1>
      <h2>League of Legends</h2>
    </div>
  );
};

const Champlist = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="champList">
        {props.list.map((champ) => (
          <Champion key={champ.id} champ={champ}></Champion>
        ))}
      </div>
    </>
  );
};

export default App;
