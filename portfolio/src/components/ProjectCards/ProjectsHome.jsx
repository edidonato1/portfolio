import { useState, useEffect } from 'react';
import StyledProjectCard from './StyledProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Animations.css'

export default function ProjectsHome(props) {
  const [showMessage, setShowMessage] = useState('')
  const [mobile, setMobile] = useState(false);

  const handler = () => {
    window.innerWidth <= 500 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () =>
      window.removeEventListener("resize", handler)
  }, [])

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
    setTimeout(() => setShowMessage('thanks for stopping by'), 1500)
    setTimeout(() => setShowMessage(`you can navigate with the drop-down by "projects"`), 6500)
    setTimeout(() => setShowMessage('enjoy'), 11500)
    setTimeout(() => setShowMessage(''), 16500)
  }, [])

  return (

    <StyledProjectCard >
      <h2 className="title">welcome.</h2>
      <h3 className="subtitle">my work</h3>
      <div className="message">
        <h6 className="appear">{showMessage}</h6>
      </div>
      <div className="gear-box">
        <FontAwesomeIcon icon={faCog} className="gears" id="large" />
        <FontAwesomeIcon icon={faCog} className="gears" id="medium" />
        <FontAwesomeIcon icon={faCog} className="gears" id="small" />
      </div>
    </StyledProjectCard>

  )
}