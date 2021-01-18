import styled from 'styled-components';
import colors from '../../helpers/colorVars';

const StyledPineapple = styled.div`

transform: ${({ showPineapple }) => (showPineapple ? "translateX(0%)" : "translateX(102%)")};

transition:.4s;
position: fixed;
right: 0;
top: 0;
color: lightgray;
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
width: 40vw;
z-index: 98;
border-left: 3px solid ${colors.aqua};
align-items: center;
background: ${colors.darkGray};
overflow-y: scroll;
color: ${colors.pink};

.main {
  text-align: justify;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
}

a {
  color: ${colors.aqua};
}

p {
  color: ${colors.lightGray};
}

#me {
  font-family: 'Nothing You Could Do', cursive;
  font-size: 25px;
  color: ${colors.pink};
}

h3 {
  font-weight: 600;
  margin: 10px;
  font-size: 18px;
  color: ${colors.pink}; 
}


@media screen and (max-width: 800px) {
opacity: ${({ showPineapple }) => (showPineapple ? "1" : "0)")};
width: 50vw;

  top: 80px;
  height: 100%;
  overflow-y: auto;

  body {
    overflow: hidden;
  }

  .icon-box {
    height: initial;
  }
}

@media screen and (max-width: 600px) {
  transform: ${({ showPineapple }) => (showPineapple ? "translateY(0%)" : "translateY(102%)")};
  bottom: 0;
  right: initial;
  width: 100%;
  height: fit-content;
  overflow-y: scroll;
  z-index: 0;
  border-left: initial;
  border-top: 3px solid ${colors.aqua};
  transition: .7s;
  height: calc(100vh - 200px);
  top: 200px;
  padding-bottom: 40px;

  .main {
    margin-top: 20px;
    overflow: scroll;
    margin-bottom: 60px;
    text-align: left;
    max-width: initial;
  }

  h1 {
    color: ${colors.lightGray};
    margin-bottom: 10px;
  }

}


`

export default StyledPineapple