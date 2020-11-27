import styled from 'styled-components';

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
}

.projects-title-inline {
  position: relative;
  background: #202020;
  display: flex;
  align-items: center;
  z-index: 1;
  width: fit-content;
  height: 100px;
}

.icon {
  font-size: 22px;
  transition: .1s;
  background: #202020;
  margin-top: 4px;
}


.icon:hover {
  color: #35a3a3;
  font-size: 26px;
  margin-left: -1px;
  animation-name: none;
}
.icon-container {
  margin-top: -10px;
  z-index: 1;
  background: #202020;
}

.drop-down {
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  margin-top: ${({ open }) => (open ? "0px" : "-30px")};
  line-height: ${({ open }) => (open ? "35px" : "0px")};
  transition: .5s;
  z-index: 0;
}


.project-li {
  color: #DB686F;
  cursor: pointer;
  width: fit-content;
  transition: .2s;
  font-weight: 500;
}

.project-li:hover {
  color: #35a3a3;
  font-size: 18px;
}

h1 {
  margin-right: 20px;
  margin-top: 8px;
}


`

export default ProjectsDiv;