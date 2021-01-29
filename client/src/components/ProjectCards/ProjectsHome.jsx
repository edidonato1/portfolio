import StyledProjectCard from './StyledProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Animations.css';

export default function ProjectsHome(props) {
  const { mobile, open, setOpen } = props;

  return (
    <StyledProjectCard >
      <h2 className="title">welcome.</h2>
      <h3
        className="subtitle"
        id="my-work"
        onClick={() => setOpen(!open)}
      >my work</h3>
      <div className="message">
        <h6 className="appear">
          you can navigate with the drop-down{mobile ? " above" : " to the left"} by "projects"</h6>
      </div>
      <div className="gear-box">
        <FontAwesomeIcon icon={faCog} className="gears" id="large" />
        <FontAwesomeIcon icon={faCog} className="gears" id="medium" />
        <FontAwesomeIcon icon={faCog} className="gears" id="small" />
      </div>
    </StyledProjectCard>
  )
}