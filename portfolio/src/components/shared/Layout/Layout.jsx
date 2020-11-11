import React from 'react';
import Nav from '../Nav/Nav'
import StyledLayout from './StyledLayout'



export default function Layout(props) {



  return (
    <StyledLayout>
      <Nav />
      {props.children}
   </StyledLayout>
  )
}