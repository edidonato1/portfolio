import {useState} from 'react';
import Nav from '../Nav/Nav'
import StyledLayout from './StyledLayout'



export default function Layout(props) {
  const { home, openBurger, setOpenBurger } = props
  


  return (
    <StyledLayout>
      <Nav home={home} openBurger={openBurger} setOpenBurger={setOpenBurger}/>
      {props.children}
      
   </StyledLayout>
  )
}