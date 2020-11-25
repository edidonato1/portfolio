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
   /* background: #242424; */
   /* background: #050D26; */
   flex-direction: column;
   justify-content: flex-end;
   height: 100vh;
   /* margin-bottom: 70px; */
   margin: 0 0 0 80px;
   /* margin-left: 80px; */
   padding-left: 50px;
   /* margin-top: 0px;
   margin-bottom: 0px; */

   /* color: #BF6B72; */
   color: #DB686F;
}

.left-div-child {
  padding-top: 0px;
  height: 60%;
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
  /* #688C8C; */
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: #505050; */
  background: #313131;
  /* background: #688C8C; */
  width: 70%;
  color: #f0ebeb;
  padding-bottom: 70px;
  /* overflow-y: scroll; */
}


`

export default StyledLayout