import StyledPineapple from './StyledPineapple';
import { Link } from 'react-router-dom';

export default function Pineapple(props) {
  const { showPineapple, } = props;

  return (
    <StyledPineapple showPineapple={showPineapple}>
      <div className="main"> 
      <h3>what's up with the pineapple?</h3>
        <p>While I'll admit that I have an affinity for their overall aesthetic ( and flavor ) and am fascinated
        by their naturally-occurring Fibonacci pattern, that's not why you see a pineapple icon
        on my portfolio website.</p>
        <p>Pineapples are a global symbol of hospitality.</p>
      <p>By navigating to my page, you've shown interest in my work, as well as getting to know me as a 
       professional.  For that, I just want to say I'm humbled by your visit.</p>
        <p>If you see anything you need clarification on, please don't hesitate to<Link to='/contact'> contact me.</Link></p>
        <p>Thanks for stopping by,</p>
        <p id="me">- Eddie</p>
      </div>
    </StyledPineapple>
  )
}