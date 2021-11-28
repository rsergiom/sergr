import CardSk from "../components/CardSk";
import "../styles/content/Skills.css";

export default function Skills() {
  const data = [
    {
      name: "Vue.js",
      url: "https://vuejs.org/",
      src: "https://vuejs.org/images/logo.svg?_sw-precache=346e12ee28bb0e5f5600d47beb4c7a47",
    },
    {
      name: "React.js",
      url: "https://reactjs.org/",
      src: "https://duckduckgo.com/i/1919314e.png",
    },
    {
      name: "Python",
      url: "https://www.python.org",
      src: "https://duckduckgo.com/i/4e55a218.png",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com",
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.servernoobs.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fmongodb-logo-1.png&f=1&nofb=1",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com",
      src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    },
    {
      name: "Golang",
      url: "https://golang.org",
      src: "https://go.dev/images/go-logo-blue.svg",
    },
  ];

  const Cards = data.map((card, index) => (
    <CardSk key={index} name={card.name} url={card.url} src={card.src} />
  ));

  return <div className="skills">{Cards}</div>;
}
