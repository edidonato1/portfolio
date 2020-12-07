import styled from 'styled-components'

const Navbar = styled.nav`

position: fixed;
left: 0;
top: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #DB686F;
height: 100vh;
width: 80px;
z-index: 99;

@keyframes spin {
  0% {transform: rotate(0)}
  100%{transform: rotate(1800deg)}
}

h1 {
  font-weight: 700;
}

.initials {
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: #DB686F;
  background: #202020;
  margin-top: 20px;
}

.initials:hover {
  background: #35a3a3;
  color: #202020;
  animation-name: spin;
  animation-duration: 1700ms;

}

ul {
  padding-inline-start: 0px;
  text-align: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  height: 80px;
  width: 80px;
}

.nav-icon {
  color: #202020;
  padding: 30px 0;
  font-size: 30px;
  transition: .2s;
}

.nav-icon:hover {
  color: #35a3a3;
  font-size: 33px;
}

a {
  text-decoration: none;
}

.social-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.nav-hidden {
  font-size: 18px;
  font-weight: 500;
  margin-top: -35px;
  color: #ecc8cb;
  transition: .3s;
}

.social-icons {
  width: 30px;
  margin: 10px;
  border-radius: 50%;
  transition: .3s;
}

.social-icons:hover {
  width: 38px;
  margin: 6px;
}

@media screen and (max-width: 800px) {
  left: initial;  
  flex-direction: row;
  height: 80px;
  width: 100vw;


.initials {
  margin-top: initial;
  margin-left: 15px;
}

ul {
  display: flex;
  flex-direction: row;
}

.social-container {
  flex-direction: row;
  margin-bottom: initial;
  margin-right: 5px;
}

.icon-container {
  align-items: center;
}

}

`

export default Navbar