import "../styles/components/CardSk.css";

export default function CardSk(props) {
  return (
    <div className="cardSk">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <p>{props.name}</p>
        <div className="img">
          <img src={props.src} alt={props.name} />
        </div>
      </a>
    </div>
  );
}
