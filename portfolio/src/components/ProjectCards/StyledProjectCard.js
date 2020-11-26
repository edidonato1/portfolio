import styled from 'styled-components'

const StyledProjectCard = styled.div`
 text-align: center;
 width: 70%;
 max-width: 550px;
 min-width: 300px;


 h3 {
  font-weight: 600;
}

 h4 {
  display: inline;
}

a {
  color: #DB686F;
  transition: .2s;
}

a:hover {
  color: #35a3a3;
  font-size: 105%;
}
 
 .title {
   font-size: 3rem;
   text-decoration: none;
   color: rgb(207, 207, 207);
   margin: 0;
 }

 .subtitle {
  color: #35a3a3;
  margin-top: -5px;
  font-weight: 500;
  margin-bottom: 10px;
}

.project-links {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  align-items: center;
  justify-content: space-evenly;
}

.link-mini-div {
  width: 60px;
  height: 50px;
}

.tools {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-box {
  display: flex;
  align-items: center;
  border-radius: 10px; 
  margin-right: 10px;
}

.logos {
  width: 30px;
  display: inline;
}

#logo-text-container {
  height: 20px;
  margin: -20px 0 10px 0;
  color: #818181;
}

.media {
  width: 100%;
}

`

export default StyledProjectCard;