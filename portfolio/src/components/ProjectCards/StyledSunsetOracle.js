import styled from 'styled-components'

const StyledSunsetOracle = styled.div`
text-align: center;
width: 70%;
max-width: 600px;
min-width: 300px;

.logo-box {
  display: flex;
  align-items: center;
  border-radius: 10px; 
  margin-right: 10px;
}

.project-links {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  align-items: center;
  justify-content: space-evenly;

}

.link-mini-div {
  width: 60px;
  height: 50px;
}

a {
  color: #171717;
  text-shadow: .5px .5px #DB686F;
  transition: .2s;
}

a:hover {
  text-shadow: .5px .5px #35a3a3;
  font-size: 110%;
}

.title {
  font-size: 3rem;
  text-decoration: none;
  color: #DB686F;
  margin: 0;
}

.subtitle {
  color: #35a3a3;
  margin-top: -5px;
  font-weight: 500;
  margin-bottom: 10px;
}

#logo-text-container {
  height: 20px;
  margin: -20px 0 10px 0;
  color: #DB686F;
}

.media {
  width: 100%;
  /* max-width: 600px;
  min-width: 300px; */
}

.tools {
  display: flex;
  justify-content: center;
  align-items: center;
}

h4 {
  display: inline;
}
.logos {
  width: 30px;
  display: inline;
}

.temp-parent {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 8vw;
} 

.temperature-grid {

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 450px;
  min-width: 450px;
  background: white;
  padding: 10px;
  justify-content: space-evenly;
  align-content: stretch;
}


.temp {
  height: 120px;
  padding: 5px;
  /* margin: 5px; */
}

caption {
  display: flex;
  width: 100%;
}
`

export default StyledSunsetOracle