import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavIcon(props) {

  const handleClick = () => {
    setTimeout(() => {
      props.setOpenBurger(false);
    }, 800);
  }

  return (
    <Link to={`/${props.pageTitle}`}>
      <div onClick={handleClick} className="icon-container">
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