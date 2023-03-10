import "./Card.css";

function Card(props) {
  return (
    <div className="mycard d-flex justify-content-between flex-column align-items-center my-3">
      <props.background />
      <span className="card-text">{props.title}</span>
    </div>
  );
}

export default Card;
