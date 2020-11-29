import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

export default function Test() {

  const TestDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 50px;
  padding: 40px;
  background:#092741;
  color:#E36562;
  `

  return (
    <TestDiv>
      <h1>C o L <FontAwesomeIcon icon={faFlask} /> b</h1>
    </TestDiv>
  )
}