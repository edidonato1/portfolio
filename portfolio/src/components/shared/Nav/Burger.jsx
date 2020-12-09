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
    background-color: #202020;
    border-radius: 20px;
  }

  #line-1 {
    transform: ${({ open }) => (open ? "rotate(-405deg) translateX(-6px) translateY(9px)" : "rotate(0deg)")};

    transition: .4s;
  }

  #line-2 {
    transform: ${({ open }) => (open ? "rotate(405deg) translateX(-6px) translateY(-9px)" : "rotate(0deg)")};
    transition: .4s;
  }


`

export default function Burger(props) {
  const { open, setOpen } = props

  return (
    <BurgerStyles open={open} className="burger-box" onClick={() => setOpen(!open)}>
      <div className="burger-line" id="line-1"></div>
      <div className="burger-line" id="line-2"></div>
    </BurgerStyles>
  )
}