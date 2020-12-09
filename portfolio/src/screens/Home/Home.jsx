import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import HomeDiv from './StyledHome';

export default function Home(props) {
  const { home, setHome } = props

  useEffect(() => {
    setHome(true);
    return () => {
      setHome(false);
    }
  },[])


  return (
    <div>
      <Layout home={home}>
        <HomeDiv>
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
        </HomeDiv>
      </Layout>
    </div>
  )
}