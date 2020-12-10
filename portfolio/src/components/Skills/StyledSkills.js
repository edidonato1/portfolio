import styled from 'styled-components';

const StyledSkills = styled.div`
transform: ${({ showSkills }) => (showSkills ? "translateX(0%)" : "translateX(102%)")};
transition:.4s;
position: absolute;
right: 0;
top: 0;
color: lightgray;
display: flex;
flex-direction: column;
/* border-top: 3px solid #43a8a8; */
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
  margin-bottom: 100px;
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


`

export default StyledSkills