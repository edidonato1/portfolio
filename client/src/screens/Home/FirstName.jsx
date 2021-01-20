import { Link } from 'react-router-dom';

export default function FirstName() {

  return (
    <div className="title left-div-title">
      <h1 className="title-child">
        hello,
        <br></br>
        <span className="introduction">
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
  )
}