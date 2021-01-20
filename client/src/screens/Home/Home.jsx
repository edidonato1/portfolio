import { useEffect } from 'react';
import HomeDiv from './StyledHome';
import HomeList from './HomeList';
import FirstName from './FirstName';
import Pineapple from './Pineapple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home(props) {
  const { setHome, openBurger, mobile, showSkills, setShowSkills, showPineapple, setShowPineapple } = props;

  useEffect(() => {
    setHome(true); // allows for styling adjustment for mobile breakpoint
    return () => { 
      setHome(false);
    }
  })

  return (
    <div>
      <HomeDiv
        openBurger={openBurger} >
        <div className="left-div" id="home-left">
          <div className="left-div-child">
            <FirstName />
            {showPineapple ?
              <span id="hide-that" onClick={() => setShowPineapple(false)}>
                <h6 >hide </h6>
                <FontAwesomeIcon id="down-arrow" icon={faArrowDown} />
              </span>
              : <> </>
            }
          </div>
        </div>
        <div className="right-div" id="home-right">
          <div id="why">
            {!showPineapple ? < > </> : 
                mobile ? <></> : // this toggle button lives in "Pineapple" component in mobile breakpoint
                <div className="show-pineapple" onClick={() => setShowPineapple(!showPineapple)}>
                  <h5 id="hide" >hide that </h5>
                  <FontAwesomeIcon id="arrow-right" icon={faArrowRight} />
                </div>
            }
          </div >
          <HomeList
            showSkills={showSkills}
            setShowSkills={setShowSkills}
          />
        </div>
        <Pineapple showPineapple={showPineapple} />
      </HomeDiv>
    </div>
  )
}