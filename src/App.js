import "./App.css";
import React from "react";
import Champion from "./Champion";

const App = () => {
  const champions = [
    {
      id: 1,
      title: "니달리",
      line: "Jungle",
      proficiency: 3,
      content:
        "암살자 치곤 능력치가 준수한 편이다. 특히 성장 체력과 방어력이 높으며, 기동력도 우수한 데다가 잃은 체력에 비례한 힐까지 있어 소규모 교전에서 어그로 핑퐁에 능하다. 마나는 특별히 우수하다고 보긴 힘들지만 정글 포지션 특성상 마나 부족에 시달릴 일은 적다. 라인 니달리의 경우 쿠거 형태는 노 코스트라는 점을 이용해 마나 관리가 가능하다.인간 형태일 때는 원거리 기본 공격을 하며, 치명타가 터지면 창을 아래에서 위로 휘둘러서 던진다. 쿠거 형태일 때는 근거리 기본 공격을 한다.",
    },
    {
      id: 2,
      title: "렉사이",
      line: "Jungle",
      proficiency: 5,
      content:
        "괴물이라는 묘사와 큰 덩치, 전무한 탱킹 스킬, 출시 초기의 인식 때문에 자주 오해하지만 기본 능력치에 하자가 상당히 많다.[3] 평캔에 추가 피해를 입히는 Q 때문인지 공격력과 공격 속도가 하위권이며 이동 속도도 W의 추가 이동 속도 때문인지 근접 전사치고는 낮다. 기본 체력도 낮은 편이며 성장 체력은 상당히 저조하다. 그나마 방어력은 기본/성장치 모두 준수하고, 덩치 큰 괴물이라 그런지 기본 사거리도 긴 편.치명타가 터지면 울부짖으며 손으로 잡아뜯듯이 공격한다. 포탑 전용 공격 모션은 팔꿈치로 육중하게 후려친다. 춤은 브레이크 댄스를 춘다.",
    },
    {
      id: 3,
      title: "리신",
      line: "Jungle",
      proficiency: 4,
      content:
        "딱히 모난 곳 없는 우수한 능력치를 지녔다. 기본 및 성장 공격력이 높은 편이고,[5] 이동 관련 기술이 2개나 있음에도 이동 속도가 345로 빠른 편이다. 방어 능력치도 준수하다. 단 기본 공격 사거리는 125로 가장 짧다. 닌자가 아닌데도 기력을 사용하는 챔피언이다.치명타가 발동했을 때는 왼발로만 찬다.",
    },
  ];
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
      <h1>나의 취미</h1>
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
