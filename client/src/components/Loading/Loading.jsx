import StyledLoading from './StyledLoading';

export default function Loading({ load }) {

  return (
    <StyledLoading load={load}>
        <h3>loading...</h3>
        <div className="ticker">
          <div className="inner"></div>
        </div>
    </StyledLoading>
  )
}