import styled from 'styled-components';

const StyledLayout = styled.div`
width: 100vw;
max-width: 100vw;
.left-div {
  position: sticky;
  top: 0;
   width: 35%;
   display: flex;
   background: coral;
   flex-direction: column;
   justify-content: center;
   height: 100vh;
   margin-left: 120px;
   margin-top: 0px;
}

.right-div {

  display: flex;
  flex-direction: column;
  background: lightcoral;
  width: 65%;
  /* overflow-y: scroll; */
}


`

export default StyledLayout