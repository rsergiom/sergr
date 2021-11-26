import CardSk from "../components/CardSk";
import "../styles/content/Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h3>My Skills</h3>
      <div className="rows">
        <div className="row1">
          <CardSk
            url="https://nodejs.org/en/"
            name="Node.js"
            src="https://nodejs.org/static/images/logo.svg"
          />
          <CardSk
            url="https://vuejs.org/"
            name="Vue.js"
            src="https://vuejs.org/images/logo.svg?_sw-precache=346e12ee28bb0e5f5600d47beb4c7a47"
          />
          <CardSk
            url="https://reactjs.org/"
            name="React.js"
            src="https://duckduckgo.com/i/1919314e.png"
          />
          <CardSk
            url="https://git-scm.com"
            name="Git"
            src="https://git-scm.com/images/logo@2x.png"
          />
        </div>
        <div className="row2">
          <CardSk
            url="https://www.python.org"
            name="Python"
            src="https://duckduckgo.com/i/4e55a218.png"
          />
          <CardSk
            url="https://www.mongodb.com"
            name="MongoDB"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.servernoobs.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fmongodb-logo-1.png&f=1&nofb=1"
          />
          <CardSk
            url="https://www.mysql.com"
            name="MySQL"
            src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
          />
          <CardSk
            url="https://golang.org"
            name="Golang"
            src="https://go.dev/images/go-logo-blue.svg"
          />
        </div>
      </div>
    </div>
  );
}
