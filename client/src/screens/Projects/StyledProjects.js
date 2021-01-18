import styled from 'styled-components';
import colors from '../../helpers/colorVars';

const ProjectsDiv = styled.div`
  display: flex;
  
#projects-right {
  flex-direction: column;
}

ul {
  padding-inline-start: 5px;
}

h1 {
  cursor: pointer;
  margin-right: 20px;
  margin-top: 8px;
}

.projects-title-inline {
  position: relative;
  background: ${colors.darkGray};
  display: flex;
  align-items: center;
  z-index: 1;
  width: fit-content;
  height: 100px;
}

.icon {
  color: ${({ open }) => (open ? colors.aqua : colors.pink)};
  font-size: 22px;
  transition: .1s;
  background: ${colors.darkGray};
  margin-top: 4px;
}

.icon:hover {
  color: ${colors.aqua};
  font-size: 26px;
  margin-left: -1px;
  animation-name: none;
}
.icon-container {
  margin-top: -10px;
  z-index: 1;
  background: ${colors.darkGray};
}

.drop-down {
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  margin-top: ${({ open }) => (open ? "0px" : "-30px")};
  line-height: ${({ open }) => (open ? "35px" : "0px")};
  transition: .5s;
  z-index: -1;
}

.project-li {
  color: ${colors.pink};
  cursor: pointer;
  width: fit-content;
  transition: .2s;
  font-weight: 500;
}

.project-li:hover {
  color: ${colors.aqua};
  font-size: 18px;
}


@media screen and (max-width: 600px) {
.projects-title-inline {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
}

.icon-container {
  margin-top: initial;
}

.drop-down {
  position: absolute; 
  top: 80px;
  left: 0;
  line-height: 37px;
  font-size: 18px;
  background: ${colors.darkGray};
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  border-bottom: ${({ open }) => (open ? `3px solid ${colors.aqua}` : "none")};
  padding-top: ${({ openBurger }) => (openBurger ? "85px" : "0")};
  border-top: none;
}

h1 {
  margin-top: initial;
  margin-bottom: 0;
}

}


`

export default ProjectsDiv;