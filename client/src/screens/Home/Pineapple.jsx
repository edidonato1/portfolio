import StyledPineapple from './StyledPineapple';

export default function Pineapple(props) {
  const { showPineapple, setShowPineapple } = props;

  return (
    <StyledPineapple showPineapple={showPineapple}>
      <h1>hello</h1>
    </StyledPineapple>
  )
}