import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import HomeDiv from './StyledHome';

export default function Home() {

  const h2 = `<h> web developer </h>`
  return (
    <div>
      <Layout>
        <HomeDiv>
        <div className="title">
        <h1>hello, <br></br> i'm eddie.</h1>
            <h2>web developer</h2>
            <small>front end developer with full stack capability</small>
        </div>
        </HomeDiv>
      </Layout>
    </div>
  )
}