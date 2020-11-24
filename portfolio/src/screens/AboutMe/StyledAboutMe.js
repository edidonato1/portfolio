import styled from 'styled-components';

const AboutMeDiv = styled.div`
display: flex;


#about-me-right {
  /* justify-content: space-evenly; */
  flex-direction: column;
}

.etc {
  color: lightcoral;
}
#get-in-touch {
  color: #43a8a8;
  cursor: pointer;
  text-decoration: none;
}


.about-text {
  width: 400px;
}

#eddie-bnw {
  width: 300px;
  border-radius: 50%;
}

`

export default AboutMeDiv;