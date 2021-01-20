import ProjectsHome from '../ProjectCards/ProjectsHome';
import SunsetOracle from '../ProjectCards/SunsetOracle';
import PopsLiquorCabinet from '../ProjectCards/PopsLiquorCabinet';
import Root from '../ProjectCards/Root';
import CoLab from '../ProjectCards/CoLab';

export default function ProjectCardsContainer(props) {
  const { currentProject, setCurrentProject, mobile } = props;

  return (
    <div className="right-div" id="projects-right">
      {currentProject === 'home' ?
        <ProjectsHome mobile={mobile} currentProject={currentProject} /> : <> </>}
      {currentProject === 'sunset' ?
        <SunsetOracle
          mobile={mobile}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject} /> : <> </>}
      {currentProject === 'pops' ?
        <PopsLiquorCabinet
          mobile={mobile}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject} /> : <> </>}
      {currentProject === 'root' ?
        <Root
          mobile={mobile}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject} /> : <> </>}
      {currentProject === 'colab' ?
        <CoLab
          mobile={mobile}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject} /> : <> </>}
    </div>
  )
}