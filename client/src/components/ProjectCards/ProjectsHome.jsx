import { useState, useEffect } from 'react';
import StyledProjectCard from './StyledProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Animations.css'

export default function ProjectsHome(props) {
  const [showMessage, setShowMessage] = useState('')
  const [mobile, setMobile] = useState(false);

  const handler = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
    handler();
    window.addEventListener("resize", handler);
    return () =>
      window.removeEventListener("resize", handler)
  }, [])

  return (

    <StyledProjectCard >
      <h2 className="title">welcome.</h2>
      <h3 className="subtitle" id="my-work">my work</h3>
      <div className="message">
        <h6 className="appear">thanks for stopping by. <br />
  you can navigate with the drop-down{ mobile ? " above." : " to the left."}</h6>
      </div>
      <div className="gear-box">
        <FontAwesomeIcon icon={faCog} className="gears" id="large" />
        <FontAwesomeIcon icon={faCog} className="gears" id="medium" />
        <FontAwesomeIcon icon={faCog} className="gears" id="small" />
      </div>
    </StyledProjectCard>

  )
}