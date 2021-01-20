import pina3 from '../../assets/icons/pina3.svg'
import { Link } from 'react-router-dom';

export default function HomeList(props) {

  const { showSkills, setShowSkills } = props;

  return (
    <div id="fade-container" >
      <img
        src={pina3}
        alt="pina"
        id="pina-bg" />
      <ul className="html-text" id="home-list-container">
        <li className="html-text ul">{"<ul>"}</li>
        <li className="html-text list">{" <li> "}
          <Link
            to="/about"
            className="list-span"
            id="about"> about me </Link>{" </li> "}
        </li>
        <li className="html-text list ">{" <li> "}
          <Link
            to="/contact"
            className="list-span"
            id="contact"> contact me </Link>{" </li> "}</li>
        <li className="html-text list">{" <li> "}
          <Link
            to="/projects"
            className="list-span"
            id="work"> my work </Link> {" </li> "}</li>
        <li className="html-text list">{" <li> "}
          <span
            className="list-span"
            id="skills"
            onClick={() => setShowSkills(!showSkills)}
          > skills
      </span>
          {" </li> "}</li>
        <li className="html-text ul">{"</ul>"}</li>
      </ul>
    </div>
  )
}