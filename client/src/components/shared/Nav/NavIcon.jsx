import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavIcon(props) {

  return (
    <Link to={`/${props.pageTitle}`}>
    <div onClick={props.handleClick} className="icon-container">
      <li
        className="nav-icon"
        onMouseOver={() => props.setHover(true)} 
        onMouseLeave={() => props.setHover(false)}>
        <FontAwesomeIcon icon={props.icon} />
        {props.hover || props.mobile ? <p className="nav-hidden">{props.pageTitle}</p> : <></>}
      </li>
    </div>
  </Link>
  )
}