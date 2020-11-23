import styled from 'styled-components';

const StyledLayout = styled.div`
width: 100vw;
max-width: 100vw;
.left-div {
  position: sticky;
  top: 0;
   width: 30%;
   display: flex;
   background: #202020;
   /* background: #050D26; */
   flex-direction: column;
   justify-content: center;
   height: 100vh;margin-bottom: 70px;
   margin-left: 80px;
   padding-left: 50px;
   margin-top: 0px;
   color: #BF6B72;;
}

.right-div {
  border-left: 3px solid #688C8C;
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