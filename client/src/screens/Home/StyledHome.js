import styled from 'styled-components';

const HomeDiv = styled.div`
perspective: 1000px;
display: flex;
overflow: hidden;
height: 100vh;

  h1 {
    margin-bottom: 0px;
  }

  h2 {
    margin-top: 0px;
    color: #818181;
    font-weight: 500;
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

  #home-right {
    background: #313131;
    position: relative;
  }

  #why {
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 20px;

  }

  #arrow {
    margin-right: 6px;
    color: #616161;
  }

  #arrow-right {
    color: #919191;
  }

  h5 {
    margin-right: 6px;
    font-weight: 500;
    color: #616161;
  }
  #hide {
    color: #919191;
  }

  #hide-that {
    display: none;
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
    animation-delay: 2s;
  }

  #color-2 {
    border: 3px solid #35a3a3;
    animation-delay: 2.3s;
  }
  #color-3 {
    border: 3px solid #f0ebeb;
    animation-delay: 2.6s;
  }

  #color-4 {
    animation-delay: 2.9s;
    border: 3px solid #35a3a3;
  }
  
  #color-5 {
    animation-delay: 3.2s;
    border: 3px solid #DB686F;
  }
  
  #color-4 {
    border: 3px solid #f0ebeb;
    animation-delay: 1.5s;
  }

  .home-links {
    animation: 15s linear 1s infinite rotate;
    color: #f0ebeb;
    font-size: 30px;
    position: absolute;
  }

  .home-links:hover {
    animation-play-state: paused;
    color: #35a3a3;
    font-size: 34px;
    text-shadow: 2px 2px #202020;
    transition: .3s;
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
  background: rgba(0,0,0,.2);
  border-radius: 50%;
  margin-top: 60px;
  box-shadow: 5px 5px 30px 50px rgba(0, 0, 0,.2);
  transform: rotateY(190deg)
}


@media screen and (max-width: 800px) {

  #why {
    top: 80px;
  }

  #arrow {
    transform: rotate(30deg);
  }

  .circle, .circle2 {
    width: 50vw;
    height: 50vw;
  }

  .shadow {
    width: 25vw;
    height: 30px;

  }
}

@media screen and (max-width: 600px) {
  #why {
    top: 40px;
  }

  #hide-that {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 5px;
    background: #bf6b72;
    border: 1px solid #313131;
    border-radius: 10px;
    height: 30px;
    padding: 0 5px;
    align-items: center;
    cursor: pointer;
  }

  #hide-that:hover {
    background: #35a3a3;
  }

  #down-arrow {
    color: #202020;
  }

  h6 {
    color: #f0ebeb;
    margin-right: 5px;
    font-size: 15px;
  }
  
  h5, #arrow {
    color: ${({ openBurger }) => (openBurger ? "#313131" : "")};
    transition: .4s;
  }

  #arrow {
    transform: rotate(90deg);
  }

  #home-left {
    height: 120px;
  }

  .title {
    align-items: flex-end;
    justify-content: space-between;
  }
  .title-child {
    margin-top: 0;
    display: flex;
    align-items: flex-end;
    margin-bottom: 0;
  }

  .introduction {
    margin-left: 5px;
  }

  #e1, #e2, #d1, #d2, #i, #dot {
    margin-bottom: -1px;
  }


  h2 {
    margin-top: initial;
    margin: inherit;
    width: fit-content;
  }

  .circle, .circle2 {
    width: 70vw;
    height: 70vw;
    }

  .home-links {
    font-size: 28px;
  }

  #item1 {
    top: 10px;
    left: 30%;
  }

  #item2 {
    top: 40%;
  }

  #item3 {
    top: 70%;
  }


}

`

export default HomeDiv;