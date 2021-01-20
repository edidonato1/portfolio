export default function SkillBox(props) {

  return (
    <div className="skills-box">
      <img className="skill-icon" id={props.name} alt={props.name} src={props.src} />
      <h3>{props.name}</h3>
    </div>
  )
}