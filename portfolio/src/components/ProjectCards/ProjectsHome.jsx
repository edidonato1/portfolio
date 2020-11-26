import StyledProjectCard from './StyledProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Animations.css'

export default function SunsetOracle(props) {
  const { setCurrentProject } = props

  return (

    <StyledProjectCard>
      <h2 className="title">welcome.</h2>
      <h3 className="subtitle">my work</h3>
      {/* render these one-by-one using CSS animation */}
      <p className="appear" >all work is 100% my own, unless specified otherwise</p>
      {/* set timer to highlight the projects drop-down toggle at the same time as
      the text indicates to use the drop-down */}
      <p className="appear" id="second">feel free to navigate with the drop-down menu to the left</p>
      <p className="appear" id="third">thanks for stopping by</p>
      <p className="appear" id="last">enjoy</p>
      <FontAwesomeIcon icon={faCog} className="gears" id="large" />
      <FontAwesomeIcon icon={faCog} className="gears" id="medium" />
    </StyledProjectCard>

  )
}