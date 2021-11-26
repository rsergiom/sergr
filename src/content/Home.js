import "../styles/content/Home.css";
import Image from "../assets/logo.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="text">
        <h2>Sergio Rey</h2>
        <h3>I am software developer</h3>
        <p>Enthusiastic about new technologies and the development of a more digital world </p>
      </div>
      <div className="image">
        <img src={Image} alt="logo"></img>
      </div>
    </div>
  );
}
