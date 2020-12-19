import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import HomeDiv from './StyledHome';
import Pineapple from './Pineapple';
import pina3 from '../../assets/icons/pina3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home(props) {
  const { home, setHome, openBurger, setOpenBurger, mobile } = props;
  const [showPineapple, setShowPineapple] = useState(false);

  useEffect(() => {
    setHome(true);
    return () => {
      setHome(false);
    }
  })

  const htmlUl = "<ul>"
  const htmlUlClose = "</ul>"
  const liOpen = " <li> "
  const liClose = " </li> "

  return (
    <div>
      <Layout
        showPineapple={showPineapple}
        setShowPineapple={setShowPineapple}
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
              {!showPineapple ?
                < > </>
                :
                mobile ?
                  <></>
                  :
                  <div className="show-pineapple" onClick={() => setShowPineapple(!showPineapple)}>
                    <h5 id="hide" >hide that </h5>
                    <FontAwesomeIcon id="arrow-right" icon={faArrowRight} />
                  </div>
              }
            </div >

            <div id="fade-container" >
              <img src={pina3} alt="pina" id="pina-bg" />
              <ul className="html-text" id="home-list-container">
                <li className="html-text ul">{htmlUl}</li>
                <li className="html-text list">{liOpen}
                  <Link
                    to="/about"
                    className="list-span"
                    id="about"> about me </Link>{liClose}
                </li>
                <li className="html-text list ">{liOpen}
                  <Link
                    to="/contact"
                    className="list-span"
                    id="contact"> contact me </Link>{liClose}</li>
                <li className="html-text list">{liOpen}
                  <Link
                    to="/projects"
                    className="list-span"
                    id="work"> my work </Link> {liClose}</li>
                <li className="html-text list">{liOpen}
                  <a href="https://drive.google.com/file/d/1YPFFdGHNCVJDWTfUbhE52VRk91qrM_c4/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="list-span"
                    id="resume"> résumé </a> {liClose}</li>
                <li className="html-text ul">{htmlUlClose}</li>
              </ul>
            </div>

          </div>
          <Pineapple showPineapple={showPineapple} />
        </HomeDiv>
      </Layout>
    </div>
  )
}