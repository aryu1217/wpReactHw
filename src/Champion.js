const Champion = (props) => {
  const imageUrl = `/${props.title}.jpeg?timestamp=${Date.now()}`;
  return (
    <div className="champion">
      <a
        href={`https://namu.wiki/w/${props.title}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={imageUrl} alt={props.title} className="champion-image" />
      </a>
    </div>
  );
};

export default Champion;
