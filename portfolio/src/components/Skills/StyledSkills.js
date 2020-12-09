import styled from 'styled-components';

const StyledSkills = styled.div`
position: sticky;
bottom: 0;
color: lightgray;
width: 30%;
margin: 0 0 0 80px;
min-width: 290px;
display: flex;
flex-direction: column;
border-top: 3px solid #43a8a8;
height: 65vh;
padding-left: 10px;
z-index: 98;

h1 {
  margin-left: 40px;
}

.skills-list {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  
}
.icon-box {
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
}

.skill-icon {
  width: 30px;
  padding: 15px;
}
#feature {
  height: 200px;
  position: absolute;
  width: 100px;
  left: 30%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.big-icon {

  width: ${({ hover }) => (hover ? "91px" : "0px")};
  height: ${({ hover }) => (hover ? "91px" : "0px")};
  transition: .4s;
  position: absolute;
  bottom: 70px;
  right: ${({ hover }) => (hover ? "35%" : "50%")};
  /* right: 35%; */
}

#platform {
  height: 100px;
  width: 100px;
  background: white;
  border-radius: 50%;
  transform: rotateX(70deg);
}

#platform-shadow {
  position: absolute;
  bottom: 50%;
  right: ${({ hover }) => (hover ? "35%" : "50%")};
  /* right: 35%; */
  width: ${({ hover }) => (hover ? "40px" : "0px")};
  height: ${({ hover }) => (hover ? "20px" : "0px")};
  transition: .3s;
  /* height: 20px; */
  /* width: 40px; */
  border-radius: 50%;
  background: rgba(0, 0, 0, .5);
  box-shadow: ${({ hover }) => (hover ? "5px 5px 10px 20px rgba(0, 0, 0,.5);" : "none")};
  /* box-shadow: 5px 5px 10px 20px rgba(0, 0, 0,.5); */
  transition: .3s;
}

`

export default StyledSkills