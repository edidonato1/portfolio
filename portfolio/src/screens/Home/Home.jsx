import { Link } from 'react-router-dom';
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
            <h1> FILL THIS SPACE</h1>
          </div>
        </HomeDiv>
      </Layout>
    </div>
  )
}