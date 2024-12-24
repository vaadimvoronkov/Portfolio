import "./Technology.css";

function Technology(props) {
  return (
    <div className="technology">
      <img src={props.image} alt=""></img>
      <p>{props.name}</p>
    </div>
  );
}

export default Technology;
