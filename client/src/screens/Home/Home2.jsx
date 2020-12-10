import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import HomeDiv from './StyledHome';
import pina from '../../assets/icons/pina3.svg'

export default function Home2(props) {
  const { home, setHome, openBurger, setOpenBurger } = props

  useEffect(() => {
    setHome(true);
    return () => {
      setHome(false);
    }
  }, [])


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
                <small>front end  |  full stack</small>
              </div>
            </div>
          </div>
          <div className="right-div" id="home-right">
          <img src={pina} />
          </div>
        </HomeDiv>
      </Layout>
    </div>
  )
}