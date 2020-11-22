import styled from 'styled-components'

const StyledSunsetOracle = styled.div`
.logo-box {
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 10px; 
  margin-right: 10px;
}
.tools {
  display: flex;
  align-items: center;
  height: 90px;
}
.logos {
  width: 30px;
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