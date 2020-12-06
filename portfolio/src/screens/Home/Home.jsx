import { Link, NavLink } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import HomeDiv from './StyledHome';

export default function Home() {


  return (
    <div>
      <Layout>
        <HomeDiv>
          <div className="left-div">
            <div className="left-div-child">
              <div className="title">
                <h1>hello, <br></br><span className="introduction">
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
              <NavLink to="/about" className="home-links" id="item1">about me</NavLink>
              <NavLink to="/contact" className="home-links" id="item2">contact me</NavLink>
              <NavLink to="/projects" className="home-links" id="item3">my work</NavLink>
            </div>
            <div className="shadow"></div>
          </div>
        </HomeDiv>
      </Layout>
    </div>
  )
}