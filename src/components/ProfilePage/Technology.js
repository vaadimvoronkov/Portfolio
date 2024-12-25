import "./Technology.css";

function Technology(props) {
  return (
    <div className="technology">
      <img src={props.image} alt=""></img>
      <p className = "name">{props.name}</p>
      <p className = "desc">{props.desc}</p>
    </div>
  );
}

export default Technology;
