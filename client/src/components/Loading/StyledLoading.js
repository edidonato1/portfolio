import styled from 'styled-components';
import colors from '../../helpers/colorVars';

const LoadingDiv = styled.div`
z-index: 99;
position: absolute;
top: 0;
right: -80px;
background: ${colors.darkGray};
width: calc((100vw - 20px) * .7);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
transition: .5s ease-out;
transform: ${({ load }) => (load ? "translateY(0px)" : "translateY(-100%)")};
border-bottom: 3px solid ${colors.aqua};


h3 {
  font-family: 'Nothing You Could Do', cursive;
  font-size: 31px;
}




.ticker {
  position: relative;
  width: 200px;
  height: 3px;
  background: ${colors.lightGray};
}

.inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${({ load }) => (load ? "200px" : "0")};
  transition: 1.2s;
  transition-delay: .5s;
  transition-timing-function: linear;
  background: ${colors.aqua};
}


`

export default LoadingDiv;