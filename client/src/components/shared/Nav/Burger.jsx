import styled from 'styled-components';

const BurgerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 20px;
  transition: .3s;
  width: 60px;
  height: 60px;

  .burger-line {
    height: 4px;
    width: 50px;
    background-color:#202020;
    border-radius: 20px;
    transition: .4s;
    transition-timing-function: ease-out;
  }

  #line-1 {
    -webkit-transform: rotate(-405deg) translate(-6px, 9px);
    transform: rotate(-405deg) translate(-6px, 9px);
  }

  #line-2 {
    -webkit-transform: rotate(405deg) translate(-6px, -9px);
    transform: rotate(405deg) translate(-6px, -9px);
  }

`

export default function Burger(props) {
  const { openBurger, setOpenBurger } = props;

  return (
    <BurgerStyles openBurger={openBurger} className="burger-box" onClick={() => setOpenBurger(!openBurger)}>
      <div className="burger-line" id={openBurger ? "line-1" : "top"}></div>
      <div className="burger-line" id={openBurger ? "line-2" : "bottom"}></div>
    </BurgerStyles>
  )
}