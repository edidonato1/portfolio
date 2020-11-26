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
  /* color: #f0ebeb; */
  background-color: #818181;
  border: none;
  /* background-color: #f0ebeb; */
  height: 1px;
  margin: 20px 0;
}

.pointer {
  width: 40px;
  height: 57px;
  margin-right: -25px;
  padding-top: 15px;
  border-bottom: 1px solid #ecc8cb;
  border-left: 1px solid #ecc8cb;
  transition: .3s;
}

.inline-span {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: fit-content;
  margin-top: -10px;
}

.inline-span.closed {
  transform: scaleY(1);
  color: inherit;
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


`

export default StyledLayout