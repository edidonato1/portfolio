import React from 'react';
import Nav from '../Nav/Nav'
import StyledLayout from './StyledLayout'



export default function Layout(props) {
  const { home } = props


  return (
    <StyledLayout>
      <Nav home={home}/>
      {props.children}
   </StyledLayout>
  )
}