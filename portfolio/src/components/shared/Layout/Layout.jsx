import {useState} from 'react';
import Nav from '../Nav/Nav'
import Skills from '../../Skills/Skills';
import StyledLayout from './StyledLayout'



export default function Layout(props) {
  const { home, openBurger, setOpenBurger } = props
  const [showSkills, setShowSkills] = useState(false);
  


  return (
    <StyledLayout
      showSkills={showSkills}
      openBurger={openBurger}>
      <Nav
        showSkills={showSkills}
        seShowskills={setShowSkills}
        home={home}
        openBurger={openBurger}
        setOpenBurger={setOpenBurger} />
      {props.children}
      <Skills showSkills={showSkills}/>
   </StyledLayout>
  )
}