import { useState, useEffect } from 'react';
import StyledProjectCard from './StyledProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Animations.css'

export default function SunsetOracle(props) {
  const [showMessage, setShowMessage] = useState('')

  useEffect(() => {
    setTimeout(() => setShowMessage('thanks for stopping by'), 1500)
    setTimeout(() => setShowMessage('feel free to navigate from the drop-down menu to the left'), 6500)
    setTimeout(() => setShowMessage('enjoy'), 11500)
    setTimeout(() => setShowMessage(''), 16500)
  }, [])

  return (

    <StyledProjectCard>
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