import Nav from '../Nav/Nav';
import Skills from '../../Skills/Skills';
import StyledLayout from './StyledLayout';

export default function Layout(props) {
  const {
    home,
    openBurger,
    setOpenBurger,
    showPineapple,
    setShowPineapple,
    showSkills,
    setShowSkills,
    mobile
  } = props;

  return (
    <StyledLayout
      showSkills={showSkills}
      openBurger={openBurger}>
      <Nav
        mobile={mobile}
        showPineapple={showPineapple}
        setShowPineapple={setShowPineapple}
        showSkills={showSkills}
        setShowSkills={setShowSkills}
        home={home}
        openBurger={openBurger}
        setOpenBurger={setOpenBurger} />
      
      {props.children}
      
      <Skills
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
        home={home}
        showSkills={showSkills}
        setShowSkills={setShowSkills} />
    </StyledLayout>
  )
}
