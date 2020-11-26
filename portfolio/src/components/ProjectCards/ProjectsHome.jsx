import StyledProjectCard from './StyledProjectCard';

export default function SunsetOracle(props) {
  const { setCurrentProject } = props

  return (

    <StyledProjectCard>
      <h2 className="title">welcome.</h2>
      <h3 className="subtitle">my work</h3>
      {/* render these one-by-one using CSS animation */}
      <p>all work is 100% my own, unless specified otherwise.</p>
      {/* set timer to highlight the projects drop-down toggle at the same time as
      the text indicates to use the drop-down */}
      <p>feel free to navigate with the drop-down menu to the left.</p>
      <p>thanks for stopping by.</p>
      <p>enjoy</p>
    </StyledProjectCard>

  )
}