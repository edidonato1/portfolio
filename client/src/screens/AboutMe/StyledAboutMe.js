import styled from 'styled-components';

const AboutMeDiv = styled.div`

@keyframes appears {
  from {opacity: 0}
  30% {opacity: 0}
  to {opacity: 1;}
}

display: flex;
text-align: justify;

  
h2 {
  animation: 1s linear 0s 1 appears;
  color: #bf6b72;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 0;
}

h3 {
  animation: 1s linear 0s 1 appears;
  margin-top: 0;
  font-weight: 500;
  color: #35a3a3;
}

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
  animation: 1s linear 0s 1 appears;
}

#eddie-bnw {
  animation: 1s linear 0s 1 appears;
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