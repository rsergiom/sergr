import "../styles/components/CardPr.css";
import link from "../assets/icons/external-link.svg";
import github from "../assets/icons/github.svg";

export default function CardPr(props) {
  return (
    <div className="cardPr">
      <a href={props.urlEx} target="_blank" rel="noopener noreferrer">
        <img className="image" src={props.url} alt={props.name} />
      </a>
      <div className="content">
        <p>{props.name}</p>
        <p className="description">{props.description}</p>
      </div>
      <div className="footer">
        <p>{props.tech}</p>
        <div className="icons">
          <a href={props.urlEx} target="_blank" rel="noopener noreferrer">
            <img src={link} className="link" alt="icon external link" />
          </a>
          <a href={props.urlGh} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="icon github" />
          </a>
        </div>
      </div>
    </div>
  );
}
