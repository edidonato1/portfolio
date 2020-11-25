import styled from 'styled-components';

const ProjectsDiv = styled.div`
  display: flex;
  
#projects-right {
  flex-direction: column;
}

ul {
  padding-inline-start: 5px;
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
  /* z-index: 2; */
  /* cursor: pointer; */
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

li {
  color: #DB686F;
  cursor: pointer;
  width: fit-content;
  transition: .2s;
  font-weight: 500;
}

li:hover {
  color: #35a3a3;
  font-size: 18px;

}

.icon:hover {
  font-size: 24px;
  color: #35a3a3;
}



h1 {
  margin-right: 20px;
  margin-top: 5px;
}


`

export default ProjectsDiv;