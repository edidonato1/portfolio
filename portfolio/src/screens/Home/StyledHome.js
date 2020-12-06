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
    animation: 8.5s ease-in-out 1.15s infinite bounce;
  }

  #d2 {
    animation: 8.5s ease-in-out 1.3s infinite bounce;
  }

  #i {
    animation: 8.5s ease-in-out 1.45s infinite bounce;
  }

  #e2 {
    animation: 8.5s ease-in-out 1.6s infinite bounce;
  }

  #dot {
    animation: 8.5s ease-in-out 1.85s infinite bounce;
  }

  .title {
  }

  #home-right {

    background: #313131;
  }

  @keyframes rotate {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(360deg);
    }
  }

  @keyframes adjust {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-360deg)
    }
  }

  .circle {
    animation: 15s linear 1s infinite rotate;
    position: relative;
    height: 400px;
    width: 400px;
    background: none;
    border-radius: 50%;
    margin-top: 40px;
  }

  .circle:hover {
    animation-play-state: paused;
  }

  perspective: 1000px;

  .circle2 {
    position: absolute;
    top: 0;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    animation: 7s linear 0s infinite adjust;
  }

  #color-1 {
    border: 3px solid #DB686F;
    animation-delay: 2.5s;
  }
  #color-2 {
    border: 3px solid #35a3a3;
    animation-delay: 4s;
  }
  #color-3 {
    border: 3px solid #f0ebeb;
    animation-delay: 5.5s;
  }

  #color-4 {
    border: 1px solid #DB686F;
    animation-delay: 9s;
  }

  #color-5 {
    border: 1px solid #35a3a3;
    animation-delay: 10.5s;
  }

  #color-4 {
    border: 1px solid #f0ebeb;
    animation-delay: 12s;
  }



  .home-links {
    animation: 15s linear 1s infinite rotate;
    color: lightpink;
    font-size: 30px;
    position: absolute;
  }

  .home-links:hover {
    animation-play-state: paused;
    color: #35a3a3;
    transform: rotateX(initial);
  }

  #item1 {
    top: 5px;
    left: 40%;
  }

  #item2 {

    left: 5px;
    top: 50%;
  }

  #item3 {
    right: 30px;
    top: 70%;
  }



.shadow {
  animation: 15s linear 4s infinite rotate;
  width: 200px;
  height: 50px;
  background: rgba(0,0,0,.1);
  border-radius: 50%;
  margin-top: 60px;
  box-shadow: 5px 5px  30px 50px rgba(0,0,0,.1);
  transform: rotateY(190deg)
}

`

export default HomeDiv;