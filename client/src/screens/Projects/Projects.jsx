import { useState } from 'react';
import StyledProjects from './StyledProjects';
import ProjectCardsContainer from '../../components/containers/ProjectCardsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faFlask } from '@fortawesome/free-solid-svg-icons';
import '../../components/ProjectCards/Animations.css'


export default function Projects(props) {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('home');
  const { openBurger, mobile } = props;

  const handleClick = (project) => {
    setCurrentProject(project); // toggle project card to be rendered
    if (mobile && open) {
      setOpen(false); // close menu when new project is selected on mobile breakpoint
    }
  }

  return (
    <StyledProjects
      openBurger={openBurger}
      open={open}>
      <div className="left-div" >
        <div className="left-div-child">
          <div className="projects-title-inline">
            <h1 className="left-div-title" onClick={() => setCurrentProject('home')}>projects</h1>
            <div className="icon-container" >
              <FontAwesomeIcon
                style={!open ? {} : { transform: "rotate(180deg)" }}
                className="icon"
                icon={faChevronCircleDown}
                onClick={() => setOpen(!open)} />
            </div>
          </div>
          <ul className="drop-down">
            <li className="project-li" onClick={() => handleClick('colab')}>C o L <FontAwesomeIcon icon={faFlask} /> b</li>
            <li className="project-li" onClick={() => handleClick('root')}>ROOT</li>
            <li className="project-li" onClick={() => handleClick('pops')}>Pop's Liquor Cabinet</li>
            <li className="project-li" onClick={() => handleClick('sunset')} >Sunset Oracle</li>
          </ul>
        </div>
      </div>
      <ProjectCardsContainer
        open={open}
        setOpen={setOpen}
        mobile={mobile}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
    </StyledProjects>
  )
}