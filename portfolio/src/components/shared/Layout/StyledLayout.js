import styled from 'styled-components';

const StyledLayout = styled.div`
width: 100vw;
max-width: 100vw;
.left-div {
  position: sticky;
  top: 0;
  width: 30%;
  min-width: 250px;
  display: flex;
  background: #202020;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  margin: 0 0 0 80px;
  padding-left: 50px;
  color: #DB686F;
}


.left-div-child {
  padding-top: 0px;
  height: 60%;
}

hr {
  background-color: #818181;
  border: none;
  height: 1px;
  margin: 20px 0;
}


.right-div {

  border-left: 3px solid #43a8a8;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #313131;
  width: 70%;
  color: #f0ebeb;
  padding-bottom: 70px;
}

@media screen and (max-width: 800px) {
  .left-div {
    margin-left: 0px;
    min-width: 180px;
    padding-left: 30px;
  }

  .right-div {
    padding-top: 120px;
  }
}


`

export default StyledLayout