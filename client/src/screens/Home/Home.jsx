import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import HomeDiv from './StyledHome';
import Pineapple from './Pineapple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home(props) {
  const { home, setHome, openBurger, setOpenBurger, mobile } = props;
  const [showPineapple, setShowPineapple] = useState(false);

  useEffect(() => {
    setHome(true);
    return () => {
      setHome(false);
    }
  },)


  return (
    <div>
      <Layout
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
        home={home}>
        <HomeDiv
          openBurger={openBurger}
          setOpenBurger={setOpenBurger}>
          <div className="left-div" id="home-left">
            <div className="left-div-child">
              <div className="title left-div-title">
                <h1 className="title-child">hello, <br></br><span className="introduction">
                  i'm
                    <Link className="name" to="/about">
                    <div id="e1"> e</div>
                    <div id="d1">d</div>
                    <div id="d2">d</div>
                    <div id="i">i</div>
                    <div id="e2">e</div>
                    <div id="dot">.</div>
                  </Link>
                </span>
                </h1>
                <h2>web developer</h2>
              </div>
              {showPineapple ?
                <span id="hide-that">
                  <h6 onClick={() => setShowPineapple(false)}>hide </h6>
                  <FontAwesomeIcon id="down-arrow" icon={faArrowDown} />
                </span>
                :  <> </>
            }
            </div>
          </div>
          <div className="right-div" id="home-right">
            <div id="why">
              {!showPineapple ?
                <>
                  <FontAwesomeIcon id="arrow" icon={faArrowLeft} />
                  <h5 onClick={() => setShowPineapple(!showPineapple)}>why the pineapple?</h5>
                </> :
                mobile ? <></> :
                <> 
                  <h5 id="hide" onClick={() => setShowPineapple(!showPineapple)}>hide that </h5>
                  <FontAwesomeIcon id="arrow-right" icon={faArrowRight} />
                </>
              }
            </div>
            <div className="circle">
              <div className="circle2" id="color-1"></div>
              <div className="circle2" id="color-2"></div>
              <div className="circle2" id="color-3"></div>
              <div className="circle2" id="color-4"></div>
              <div className="circle2" id="color-5"></div>
              <div className="circle2" id="color-6"></div>
              <Link to="/about" className="home-links" id="item1">about me</Link>
              <Link to="/contact" className="home-links" id="item2">contact me</Link>
              <Link to="/projects" className="home-links" id="item3">my work</Link>
            </div>
            <div className="shadow"></div>
          </div>
          <Pineapple showPineapple={showPineapple} />
        </HomeDiv>
      </Layout>
    </div>
  )
}