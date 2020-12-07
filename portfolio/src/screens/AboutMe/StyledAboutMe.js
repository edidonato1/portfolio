import styled from 'styled-components';

const AboutMeDiv = styled.div`
display: flex;
text-align: justify;


#about-me-right {
  flex-direction: column;
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

@media screen and (max-width: 800px) {
#eddie-bnw {
  width: 47%;
}

.about-text {
  width: 85%
}

}

`

export default AboutMeDiv;