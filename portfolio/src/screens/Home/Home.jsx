import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import HomeDiv from './StyledHome';

export default function Home() {


  return (
    <div>
      <Layout>
        <HomeDiv>
          <div className="left-div">
            <div className="left-div-child">
              <div className="title">
                <h1>hello, <br></br> i'm eddie.</h1>
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