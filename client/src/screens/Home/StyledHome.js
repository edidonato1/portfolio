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
    6% {transform: translateY(-12%)}
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
    animation: 6.5s ease-in-out 1s infinite bounce;
  }

  #d1 {
    animation: 6.5s ease-in-out 1.15s infinite bounce;
  }

  #d2 {
    animation: 6.5s ease-in-out 1.3s infinite bounce;
  }

  #i {
    animation: 6.5s ease-in-out 1.40s infinite bounce;
  }

  #e2 {
    animation: 6.5s ease-in-out 1.5s infinite bounce;
  }

  #dot {
    animation: 6.5s ease-in-out 1.63s infinite bounce;
  }

  #home-right {
    background: #313131;
    position: relative;
    padding-top: 0;
  }

  .show-pineapple {
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 20px;
    z-index: 5;
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

  #fade-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 0;
    margin-left: 3px;
  }
  
  @keyframes ease-left {
    from {
      transform: translateX(10px) translateY(-10px);
      opacity: .3;
    }
    to {
      transform: translateX(0px) translateY(0px);
      opacity: 1;
    }
  }

  @keyframes ease-right {
    from {
      transform: translateX(-10px) translateY(10px) rotate(-90deg);
    }
    to {
      transform: translateX(0px) translateY(0px) rotate()(-80deg);
    }
  }
  
  #pina-bg {
    z-index: -1;
    height: 110vh;
    position: fixed;
    bottom: -10%;
    transform: rotate(-80deg);
    -webkit-animation:1.5s ease-out 0s 1 ease-right;
    animation: 1.5s ease-out 0s 1 ease-right;
  }
  
  .html-text {
    font-family: 'Nothing You Could Do', cursive;
    margin: 15px 0;
    font-size: 30px;
    color: #494949;
    -webkit-animation: 1.5s ease-out 0s 1 ease-left;
    animation: 1.5s ease-out 0s 1 ease-left;
  }

  .ul{
    padding: 20px 0;
    margin-left: -20px;
    }

  .list {
    margin-left: 41px;
    transition: 1s;
  }
  
  .list-span {
    margin: 0 10px;
    font-family: inherit;
    color: #f0ebeb;
    text-shadow: 4px 4px #202020;
    animation: 1s ease-out 1.5s 1 flash;
    transition: .5s;
  }

  .list-span:hover {
    color: #35a3a3;
  }

  .list:hover {
    color: #bf6b72;
  }

  #contact {
    animation-delay: 1.7s;
  }

  #work {
    animation-delay: 1.9s;
  }

  #resume {
    animation-delay: 2.1s;
  }


@media screen and (max-width: 800px) {

  .show-pineapple {
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

  overflow: hidden;
  
  .show-pineapple {
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

  #fade-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    z-index: 0;
    margin-left: 0;
  }
   
  #pina-bg {
    z-index: -1;
    height: 70vh;
    position: fixed;
    bottom: 0;
    transform: rotate(-70deg);
    -webkit-animation:1.5s ease-out 0s 1 ease-right;
    animation: 1.5s ease-out 0s 1 ease-right;
  }
  
  .html-text {
    margin: 25px 0;
    font-size: 28px;
  }

  .ul{
    padding: 20px 0;
    margin-left: -10px;
    }

  .list {
    margin-left: 31px;
    transition: .5s;
  }
  
  .list-span {
    margin: 0 10px;
  }

  .list-span:hover {
    color: #f0ebeb;
  }

  .list:hover {
    color: #494949;
  }


}

`

export default HomeDiv;