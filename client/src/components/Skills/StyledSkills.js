import styled from 'styled-components';

const StyledSkills = styled.div`

transform: ${({ showSkills }) => (showSkills ? "translateX(0%)" : "translateX(102%)")};
transition:.4s;
position: fixed;
right: 0;
top: 0;
color: lightgray;
display: flex;
flex-direction: column;
height: 100vh;
width: 35vw;
z-index: 98;
border-left: 3px solid #43a8a8;
align-items: center;
background: #202020;
overflow-y: scroll;
color: #DB686F;


#title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding-left: 40px;
}

#resume {
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 40px;
}

#resume-text {
  margin-right: 20px;
}

small {
  color: #35a3a3;
  cursor: pointer;
}

.skill-icon {
  width: 25px;
}

h3 {
  font-weight: 400;
  margin: 10px;
  font-size: 18px;
  color: #f0ebeb; 
}

.icon-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-left: 0px;
  margin-bottom: 80px;
}

.skills-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 155px;
  height: 40px;
  margin: 10px 5px;
  background: #313131;
  border-radius: 10px;
  padding: 5px 5px 5px 10px;
  box-shadow:  1px 2px 2px #DB686F;
}

#react {
  width: 40px;
  margin-right: -7px;
}

#ruby, #postgres, #axios {
  width: 23px;
}

#rails {
  width: 37px;
  margin-right: -10px;
}

#express {
  width: 37px;
  margin-right: -7px;
}
#mongodb {
  width: 30px;
  margin-right: -5px;
}

#node, #html {
  width: 22px;
}

#css {
  width: 29px;
  margin-right: -5px;
}

@media screen and (max-width: 800px) {
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
  transform: ${({ showSkills }) => (showSkills ? "translateY(0%)" : "translateY(102%)")};
  /* top: 220px; */
  bottom: 0;
  right: initial;
  width: 100%;
  /* height: 100%; */
  height: fit-content;
  overflow-y: scroll;
  z-index: 0;
  border-left: initial;
  border-top: 3px solid #43a8a8;
  transition: .7s;
  /* top: 80px; */
  height: ${({home}) => (home ? "calc(100vh - 200px )" : "calc(100vh - 160px)")};
  top: ${({ home }) => (home ? "200px" : "160px")};
  padding-bottom: 40px;

h1 {
  color: #f0ebeb;
  margin-bottom: 10px;
}
.icon-box {

    overflow-y: scroll;
    margin-bottom: 20px;
    height: 100%;
    padding-bottom: 100px;
  }

  .skills-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 155px;
  height: 37px;
  margin: 7px 5px;
  background: #313131;
  border-radius: 10px;
  padding: 5px 5px 5px 10px;
  box-shadow:  1px 2px 2px #DB686F;
}



}


`

export default StyledSkills