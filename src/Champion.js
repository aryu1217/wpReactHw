import { useState } from "react";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Champion = (props) => {
  const imageUrl = `/${props.champ.title}.jpeg`;

  const [champExpanded, setChampExpanded] = useState(false);

  const toggleChamp = () => {
    setChampExpanded((prevState) => !prevState);
  };

  return (
    <div className="champion-card">
      <div className="champion-img">
        <a
          href={`https://namu.wiki/w/${props.champ.title}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imageUrl}
            alt={props.champ.title}
            className="champion-image"
          />
        </a>
      </div>
      <div className="champion-content">
        <h3>{props.champ.title}</h3>
        <h3>{props.champ.line}</h3>
        <div>
          {[...Array(props.champ.proficiency)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <div className="toggle-arrow" onClick={toggleChamp}>
          {champExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {props.champ.content && champExpanded && (
          <p className="champ-content">{props.champ.content}</p>
        )}
      </div>
    </div>
  );
};

export default Champion;
