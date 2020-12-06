import styled from 'styled-components';

const HomeDiv = styled.div`
display: flex;
  h1 {
    margin-bottom: 0px;
  }

  h2 {
    margin-top: 0px;
  }

  @keyframes bounce {
    0% {transform: translateY(0%)}
    5% {transform: translateY(-10%)}
    10% {transform: translateY(0%)}
   100% {transform: translateY(0%)}
  }

  .introduction {
    display: flex;
    align-items: flex-end;
  }



  .name {
    color: inherit;
    margin-left: 7px;
    display: flex;
    font-size: 40px;
    -webkit-text-stroke: .8px #f0ebeb;
    text-shadow: 2px 2px #35a3a3;
    /* letter-spacing: 1px; */
  }

  #e1 {
    animation: 8.5s ease-in-out 1s infinite bounce;

  }

  #d1 {
    animation: 8.5s ease-in-out 1.2s infinite bounce;

  }

  #d2 {
    animation: 8.5s ease-in-out 1.4s infinite bounce;
  }

  #i {
    animation: 8.5s ease-in-out 1.6s infinite bounce;
  }

  #e2 {
    animation: 8.5s ease-in-out 1.8s infinite bounce;
  }

  #dot {
    animation: 8.5s ease-in-out 2s infinite bounce;
  }

  .title {
  }

  #home-right {

    background: #313131;
  }
`

export default HomeDiv;