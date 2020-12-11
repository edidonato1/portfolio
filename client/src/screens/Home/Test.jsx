import pina from '../../assets/icons/pineapple.svg'
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background: #202020;
img {
  transform: rotate(-70deg);
  width: 500px;
}

`

export default function Test() {
  
  return (
    <Div>
      <img src={pina} />
    </Div>
  )
}