import { useState, useEffect } from 'react';
import StyledProjectCard from './StyledProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Animations.css'

export default function SunsetOracle(props) {
  const [showMessage, setShowMessage] = useState('')

  useEffect(() => {
    setTimeout(() => setShowMessage('all work is 100% my own, unless specified otherwise'), 1500)
    setTimeout(() => setShowMessage('feel free to navigate from the drop-down menu to the left'), 7500)
    setTimeout(() => setShowMessage('thanks for stopping by'), 13500)
    setTimeout(() => setShowMessage('enjoy'), 19500)
    setTimeout(() => setShowMessage(''), 25500)
  }, [])

  return (

    <StyledProjectCard>
      <div className='vl'></div>
      <h2 className="title">welcome.</h2>
      <h3 className="subtitle">my work</h3>
      <div className="message">
        <p className="appear">{showMessage}</p>
      </div>
      <div className="gear-box">
        <FontAwesomeIcon icon={faCog} className="gears" id="large" />
        <FontAwesomeIcon icon={faCog} className="gears" id="medium" />
        <FontAwesomeIcon icon={faCog} className="gears" id="small" />
      </div>
    </StyledProjectCard>

  )
}